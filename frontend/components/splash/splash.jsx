import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import FillerContentContainer from './filler_content_container'
import SplashSearchContainer from '../search/splash_search_container';


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
          <SplashSearchContainer />
        </div>
        <FillerContentContainer />

      </section>
    )
  }



}

export default Splash;