import React from 'react';

class SearchForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      input: '',
      output: []
    }
    this.search = this.search.bind(this)
  }

  search(input) {
    return(
      e => {
        e.preventDefault();
        this.props.searchTrails(e.currentTarget.value)
        this.setState({
          input: e.currentTarget.value
        })
      }
    )
  }

  render() {
    return(
      <div className="search-container">
        <input 
          type="text"
          value={this.state.input} 
          placeholder="Search by trail name"
          onChange={this.search()}
        />
      </div>
    )
  }

}

export default SearchForm;