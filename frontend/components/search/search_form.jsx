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
  }

  hideSearchList() {
    this.setState({
      searchListClass: 'hidden-search-list'
    })
  }

  // revealSearchList() {
  //   this.setState({
  //     searchListClass: 'visible'
  //   })
  // }

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
        console.log(this.props.searchTrails)
        this.props.searchTrails(e.currentTarget.value)
          .then(
            res => {
              console.log(res)
              this.setState({trails: Object.values(res)})
              this.setState({errors: ''})
            },
            err => {
              console.log(err.responseJSON)
              this.setState({trails: []})
              this.setState({errors: err.responseJSON})
            }
          )
      }
    )
  }

  render() {

    return(



      <div className="search-dropdown">
        <form className="search-form">
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
          <div className="search-container">
            <input
              type="text"
              value={this.state.input}
              placeholder="Search by trail name"
              onChange={this.search()}
              onBlur={this.hideSearchList}
            />
          </div>            
          <button>
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </form>
        <div className={this.state.searchListClass}>
          <ul className="search-list">
            {this.state.trails.map(trail => {
              console.log(trail)
              return(
                <li>
                  <Link to={`/trails/${trail.id}`} className="search-result-link">
                    <FontAwesomeIcon icon={faMapSigns} className="trail-search-list-icon"/>
                    <div>
                      <h5>{trail.title}</h5>
                      <p>{trail.location}</p>
                    </div>
                  </Link>
                </li>
              )
            })}
            <li className="search-error-li">{`${this.state.errors}`}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchForm;