import React from 'react';

class SearchForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      input: '',
      trails: []
    }
    this.search = this.search.bind(this)
  }

  search(input) {
    return(
      e => {
        e.preventDefault();
        this.props.searchTrails(e.currentTarget.value)
          .then(trails => this.setState({trails}))
          .catch(err => this.setState({trails: err.json}))
        this.setState({
          input: e.currentTarget.value
        })
      }
    )
  }

  render() {
    return(
      <div className="search-dropdown">
        <div className="search-container">
          <input 
            type="text"
            value={this.state.input} 
            placeholder="Search by trail name"
            onChange={this.search()}
            />
        </div>
        <div>
          <ul>
            {this.state.trails}
          </ul>
        </div>
      </div>
    )
  }

}

export default SearchForm;