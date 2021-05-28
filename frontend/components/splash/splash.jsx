import React from 'react';
import FillerContentContainer from './filler_content_container'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapSigns,
  faArrowCircleRight,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


class Splash extends React.Component {

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

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  hideSearchList() {
    return (
      this.setState({
        prefix: 'hidden',
        input: '',
        trails: [],
        errors: ''
      })
    )
  }

  linkToTrail() {
    return (
      e => {
        e.preventDefault()
        if (this.state.trails.length === 0) {
          this.setState({
            errors: 'Please search for a valid trail',
            prefix: 'visible'
          })
        } else if (this.state.errors !== '') {
          this.setState({
            errors: 'Please search for a valid trail',
            prefix: 'visible'
          })
        } else {
          this.props.history.push(`/trails/${this.state.trails[0].id}`)
          this.hideSearchList()
        }
      }
    )
  }

  search() {
    return (
      e => {
        e.preventDefault();
        this.setState({
          input: e.currentTarget.value
        })
        if (this.state.prefix === 'hidden') {
          this.setState({
            prefix: 'visible',
          })
        }
        this.props.searchTrails(e.currentTarget.value)
          .then(
            res => {
              this.setState({ trails: Object.values(res) })
              this.setState({ errors: '' })
            },
            err => {
              this.setState({ trails: [] })
              this.setState({ errors: err.responseJSON })
            }
          )
      }
    )
  }

  render() {


    let searchList;
    if (this.state.errors === '') {
      searchList = <ul>
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

    return (
      <section 
        className="splash-container"
        onClick={this.hideSearchList}
      >
        <div 
          className="search-bar-container"
          onClick={this.hideSearchList}
        >
          <div 
            className="search-bar"
            onClick={this.hideSearchList}
          >
            <h1
              onClick={this.hideSearchList}
            >Find a new adventure</h1>
            <div
              className="search-container"
              onClick={e => e.stopPropagation()}
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
              <div 
                className={`${this.state.prefix}-search-list`}
              >
                {searchList}
              </div>
            </div>
          </div>
        </div>
        <FillerContentContainer onClick={this.hideSearchList}/>
      </section>
    )
  }
}

export default Splash;