import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowCircleRight, faSearch } from '@fortawesome/free-solid-svg-icons';


class Splash extends React.Component {

  constructor(props) {
    super(props)


    // if (innerWidth < 1038) {
    //   this.state = {
    //     fillerContentClass: "resize-big"
    //   }
    // } else {
    //   this.state = {
    //     fillerContentClass: "resize-small"
    //   }
    // }

  }


  // handleResize() {

  //   if (
  //     this.state.fillerContentClass = "resize-big" && window.innerWidth < 1038
  //   ) {
  //     this.setState({fillerContentClass: "resize-small"}) 
  //   }  else if (
  //     this.state.fillerContentClass = "resize-small" && window.innerWidth > 1038
  //   ) {
  //     this.setState({fillerContentClass: "resize-big"})
  //   };
  // };

  // componentDidMount() {
  //   window.addEventListener('resize', this.handleResize())
  // }

  render() {

    // if (window.innerWidth < 1038) {
    //   filler
    // }

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
        <div className="filler-content">
          <span>
            <h1> 0.004k+</h1>
            <h4>curated trails</h4>
            <p>See four trails that I've personally hiked and photos of them taken on my phone.</p>
          </span>
          <span>
            <h1>0 mil</h1>
            <h4>fellow explorers</h4>
            <p>This app is extremely niche. You basically have the place to yourself.</p>
          </span>
          <span>
            <h1>200+</h1>
            <h4>Hours Logged</h4>
            <p>Thats about how long it took me to make this website.</p>
          </span>
        </div>

      </section>
    )
  }



}

export default Splash;