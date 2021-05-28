import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapSigns, 
  faArrowCircleRight, 
  faSearch 
  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




class SearchForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      input: '',
      trails: [],
      errors: '',
      searchListClass: 'hidden-search-list'
    }
    this.search = this.search.bind(this);
    this.hideSearchList = this.hideSearchList.bind(this);
    this.linkToTrail = this.linkToTrail.bind(this);
  }

  hideSearchList() {
    this.setState({
      searchListClass: 'hidden-search-list'
    })
  }

  linkToTrail() {
    return (
      e => {
        console.log("hit")
        console.log(this.state.trails)
        console.log(this.state.errors)
        e.preventDefault()
        e.stopPropagation()
        if(this.state.trails.length === 0 || this.state.errors !== '') {
          this.setState({
            searchListClass: 'visible-search-list',
            trails: [],
            errors: 'Please search for a valid trail'
          })
        } else {
          this.props.history.push(`/trails/${this.state.trails[0].id}`)
        }
      }
    )
  }

  search() {
    return(
      e => {
        e.preventDefault();
        this.setState({
          input: e.currentTarget.value
        })
        if(this.state.searchListClass === 'hidden-search-list') {
          this.setState({
            searchListClass: 'visible-search-list'
          })
        }
        this.props.searchTrails(e.currentTarget.value)
          .then(
            res => {
              this.setState({trails: Object.values(res)})
              this.setState({errors: ''})
            },
            err => {
              this.setState({trails: []})
              this.setState({errors: err.responseJSON})
            }
          )
      }
    )
  }

  render() {
           
    const searchForm = <form className="search-form">
      <FontAwesomeIcon icon={faSearch} className="search-icon"/>
      <div className="search-container">
        <input
          type="text"
          value={this.state.input}
          placeholder="Search by trail name"
          onChange={this.search()}
          // onBlur={this.hideSearchList}
        />
      </div>            
      <button>
        <FontAwesomeIcon 
          icon={faArrowCircleRight} 
          onClick={this.linkToTrail()}  
        />
      </button>
    </form>
  
    let searchList;
    if(this.state.errors === '') {
      searchList = 
      <ul>
        {this.state.trails.map(trail => {
            return (
              <li>
                <Link to={`/trails/${trail.id}`} className="search-result-link">
                  <FontAwesomeIcon icon={faMapSigns} className="trail-search-list-icon" />
                  <div>
                    <h5>{trail.title}</h5>
                    <p>{trail.location}</p>
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>  
    } else {
      searchList = <div className="search-errors">
          <div className="search-error-li">{`${this.state.errors}`}</div>
        </div>
    }

    return(
      <div 
        className="search-dropdown"
      >
        {searchForm}
        <div className={this.state.searchListClass}>
          {searchList}
        </div>
      </div>
    )
  }
}

export default SearchForm;