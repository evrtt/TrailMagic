import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapSigns, 
  faArrowCircleRight, 
  faSearch 
  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class SplashSearch extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      input: '',
      trails: [],
      errors: '',
      prefix: 'hidden'
    }
    this.search = this.search.bind(this);
    this.hideSearchList = this.hideSearchList.bind(this);
    this.linkToTrail = this.linkToTrail.bind(this);
  }

  hideSearchList() {
    this.setState({
      prefix: 'hidden',
      input: '',
      trails: [],
      errors: ''
    })
  }

  linkToTrail() {
    return (
      e => {
        e.preventDefault()
        if(this.state.trails.length === 0 || this.state.errors !== '') {
          this.setState({
            prefix: 'visible',
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
        if(this.state.prefix === 'hidden') {
          this.setState({
            prefix: 'visible',
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
    console.log(this.state.trails)    
    console.log(this.state.errors)    
    console.log(this.state.prefix)    
    console.log(this.state.input)    
    const searchForm = <form className="search-form">
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
                <Link 
                  to={`/trails/${trail.id}`} 
                  className={`${this.state.prefix}-search-result-link`}
                >
                  <FontAwesomeIcon 
                    icon={faMapSigns} 
                    className={`${this.state.prefix}-trail-search-list-icon`}
                  />
                  <div className={`${this.state.prefix}-search-result-link-content`}>
                    <h5>{trail.title}</h5>
                    <p>{trail.location}</p>
                  </div>
                </Link>
              </li>
            )
          })}
      </ul>  
    } else {
      searchList = <div className={`${this.state.prefix}-search-errors`}>
        <div className={`${this.state.prefix}-search-error-li`}>
          {`${this.state.errors}`}
        </div>
      </div>
    }

    return(
      <div className="search-container">
        {searchForm}
        <div className={`${this.state.prefix}-search-list`}>
          {searchList}
        </div>
      </div>
    )
  }
}

export default SplashSearch;