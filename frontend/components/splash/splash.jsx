import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import FillerContentContainer from './filler_content_container'


class Splash extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {

    return (
      <section className="splash-container">
        <div className="search-bar-container">
          <h1>Find a new adventure</h1>
          <form className="search-form">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input className="search-bar" type="text" placeholder="Search by trail name" />
            <button>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </button>
          </form>
        </div>
        <FillerContentContainer />

      </section>
    )
  }



}

export default Splash;