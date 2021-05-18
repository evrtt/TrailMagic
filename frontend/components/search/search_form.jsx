import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapSigns, 
  faArrowCircleRight, 
  faSearch 
  } from '@fortawesome/free-solid-svg-icons';



class SearchForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      input: '',
      trails: [],
      errors: ''
    }
    this.search = this.search.bind(this)
  }

  search() {
    return(
      e => {
        e.preventDefault();
        this.setState({
          input: e.currentTarget.value
        })
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

    // let view;
    // if(this.state.trails.length > 0) {
    //   view = "visible"
    // } else {
    //   view = "hidden"
    // }
    console.log(this.state)

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
            />
          </div>            
          <button>
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </form>
        <div className="search-list-container">
          <ul className="search-list">
            {this.state.trails.map(trail => {
              console.log(trail)
              return(
                <li className="search-result-li">
                  <FontAwesomeIcon icon={faMapSigns}/>
                  <div>{trail.title}</div>
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