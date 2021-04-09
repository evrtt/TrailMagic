import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowCircleRight, faSearch } from '@fortawesome/free-solid-svg-icons';


class Splash extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="splash-container">
        <div className="search-bar-container">
          <h1>Find a new adventure</h1>
          <form className="search-form">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input className="search-bar" type="text" name="" id="" />
            <button>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </button>
          </form>
        </div>
        <div className="filler-content">
          HIRE ME
        </div>

      </section>
    )
  }



}

export default Splash;