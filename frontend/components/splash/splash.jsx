import React from 'react';
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
          <div className="search-bar">
            <h1>Find a new adventure</h1>
            <SplashSearchContainer />
          </div>
        </div>
        <FillerContentContainer />

      </section>
    )
  }



}

export default Splash;