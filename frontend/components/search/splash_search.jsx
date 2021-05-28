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
    this.link = this.link.bind(this);
  }

  hideSearchList() {
    return (
      e => {
          this.setState({
            prefix: 'hidden',
            input: '',
            errors: ''
          }), 1000
      }
    )
  }

  link(trailId, trails) {
    return (
      e => {
        this.inputEl.focus()
        e.preventDefault();
        this.setState({
          prefix: 'hidden',
          trails: [],
        })
        this.props.history.push(`/trails/${trailId}`)
      }
    )
  }

  linkToTrail() {
    return (
      e => {
        console.log("hit")
        console.log(this.state.trails.length)
        console.log(this.state.errors)
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

    let searchList;
    if(this.state.errors === '') {
      searchList = 
        <form>
        {this.state.trails.map(trail => {
            return (
              <li
                className={`${this.state.prefix}-search-result-link`}
                onClick={this.link(trail.id, this.state.trails)}
              >
                <FontAwesomeIcon 
                  icon={faMapSigns} 
                  className={`${this.state.prefix}-trail-search-list-icon`}
                  />
                <input type="text"/>
                <div className={`${this.state.prefix}-search-result-link-content`}>
                  <h5>{trail.title}</h5>
                  <p>{trail.location}</p>
                </div>
              </li>
            )
          })}
      </form>  
    } else {
      searchList = <div className={`${this.state.prefix}-search-errors`}>
        <div className={`${this.state.prefix}-search-error-li`}>
          {`${this.state.errors}`}
        </div>
      </div>
    }

    return(
      <div 
        className="search-container"
        onBlur={this.hideSearchList()}
      >
        <form className={`${this.state.prefix}-search-form`}>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <div className="search-input">
            <input
              type="text"
              value={this.state.input}
              placeholder="Search by trail name"
              onChange={this.search()}
            />
          </div>
          <button>
            <FontAwesomeIcon
              icon={faArrowCircleRight}
              onClick={this.linkToTrail()}
            />
          </button>
        </form>
        <div className={`${this.state.prefix}-search-list`}>
          {searchList}
        </div>
      </div>
    )
  }
}

export default SplashSearch;