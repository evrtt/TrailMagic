import React from 'react';
import MapContainer from '../map/mapbox_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faDirections, faMountain, faPrint } from '@fortawesome/free-solid-svg-icons';



class Trail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mapView: false,
      contentLeftNav: "reviews"
    }


    this.mapViewOn = this.mapViewOn.bind(this);
    this.mapViewOff = this.mapViewOff.bind(this);
    this.navLeftContentToReviews = this.navLeftContentToReviews.bind(this);
    this.navLeftContentToPhotos = this.navLeftContentToPhotos.bind(this);
  }


  componentDidMount() { 
      this.props.fetchAllTrails();
  }

  mapViewOn(e) {
    e.preventDefault();
    this.setState({mapView: true})
  }

  mapViewOff(e) {
    e.preventDefault();
    this.setState({mapView: false})
  }

  navLeftContentToReviews(e) {
    e.preventDefault();
    this.setState({contentLeftNav: "reviews"})
  }
  
  navLeftContentToPhotos(e) {
    e.preventDefault();
    this.setState({contentLeftNav: "photos"})
  }

  render () {
    console.log(this.props)
    console.log(JSON.stringify(this.props.trail)) 
    console.log(JSON.stringify({}))
    let toggledcontent;
    let reviewsBtn;
    let photosBtn;
    if (this.state.contentLeftNav === "reviews") {
      toggledcontent = "reviews-content"
      reviewsBtn = "content-left-nav-selected"
      photosBtn = "nothing"
    } else {
      toggledcontent = "photos-content"
      reviewsBtn = "nothing"
      photosBtn = "content-left-nav-selected"    
    }
    if (this.props.trail === undefined) {
      return <div></div>
    } else {
      let prefix;
      if (this.state.mapView) {
        prefix = "map-view"
        return (
          <div className="trail-page-mapview">
            <nav>
              <span>{this.props.trail.location}</span>
              {/* <SearchComponent /> */}
            </nav>
            <div>
              <h1>{this.props.trail.title}</h1>
              <p className="trail-location">{this.props.trail.location}</p>
              <p className={`dif-${this.props.trail.difficulty}`}>{props.trail.difficulty}</p>
            </div>
            <div className="trail-page-map">
              <MapContainer trail={this.props.trail} />
            </div>
          </div>
        )
      } else if (!this.state.mapView) {
        prefix = "standard-view"
        return (
          <div className={`${prefix}-grey-background`}>
            <div className={`${prefix}-trail-page-no-map`}>
              <nav className={`${prefix}-trail-page-nav`}>
                <div className={`${prefix}-nav-spans`}>
                  {this.props.trail.location.split(',').map( el =>
                    <span>{el.toString()}</span>
                  )}
                </div>
                <div>SEARCH COMPONENT HERE</div>
                {/* <SearchComponent /> */}
              </nav>
              <div 
                className={`${prefix}-trail-page-header`}
                style={{ 
                  backgroundImage: `url(${this.props.trail.mainPhotoURL})`, 
                  backgroundSize: "cover",
                  backgroundPosition: "center top 50%",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <div className={`${prefix}-trail-page-header-content`}>
                  <h1>{this.props.trail.title}</h1>
                  <p className={`${prefix}-dif-${this.props.trail.difficulty}`}>{this.props.trail.difficulty}</p>
                  <p className={`${prefix}-trail-location`}>{this.props.trail.location.split(",")[0].toString()}</p>
                </div>
              </div>
              <div className={`${prefix}-green-bar`}>
                <button>
                  <FontAwesomeIcon icon={faCameraRetro} className={`${prefix}-icon`}/>
                  <p>Photos</p>
                </button>
                <button>
                    <FontAwesomeIcon icon={faDirections} className={`${prefix}-icon`}/>
                  <p>Directions</p>
                </button>
                <button>
                    <FontAwesomeIcon icon={faPrint} className={`${prefix}-icon`}/>
                  <p>Print/PDF Map</p>
                </button>
              </div>
              <div className={`${prefix}-trail-page-content`}>
                <div className={`${prefix}-trail-page-content-left`}>
                  <p className={`${prefix}-description`}>{this.props.trail.description}</p>
                  <div className={`${prefix}-content-spans`}>
                    <div>
                      <p>Length</p>
                      <span> {this.props.trail.length} Mi</span>
                    </div>
                    <div>
                      <p>Elevation gain</p>
                      <span>{this.props.trail.elevationGain}</span>
                    </div>
                    <div>
                      <p>Route type</p>
                      <span>{this.props.trail.routeType}</span>
                    </div>
                  </div>
                  <nav className={`${prefix}-content-left-nav`}>
                    <button 
                      className={`${prefix}-${reviewsBtn}`}
                      onClick={this.navLeftContentToReviews}
                    >Reviews</button>
                    <button 
                      className={`${prefix}-${photosBtn}`}
                      onClick={this.navLeftContentToPhotos}
                      >Photos</button>
                  </nav>
                  <div className={`${prefix}-${toggledcontent}`}>

                      WAYPOINTS HERE TOGGLED
                      REVIEWS HERE TOGGLED
                      PHOTOS HERE TOGGLED
                    {this.state.contentLeftNav === "reviews" ? (
                        <div>THIS IS A FAKE REVIEW THAT NEEDS TO BE REPLACED SO THAT I CAN STYLE THIS SECTION CORRECLTY I JUST NEEDED SOME TEXT TO SEE HOW IT WOULD LOOK IS ALL</div>
                      // <TrailReviews trailId={this.props.trail.id}/>
                    ) : null}
                    {/* {this.state.contentLeftNav === "waypoints" ? (
                      <TrailWaypoints trailId={this.props.trail.id}/>
                    ) : null} */}
                    {this.state.contentLeftNav === "photos" ? (
                      <div>PHOTOS GO HERE</div>
                      // <TrailPhotos trailId={this.props.trail.id}/>
                    ) : null}
                  </div>
                </div>
                <div className={`${prefix}-trail-page-content-right`}>
                  <div className={`${prefix}-static-map`}>STATIC MAP HERE</div>
                  <button 
                    onClick={this.mapViewOn}
                    className={`${prefix}-map-view-on`}
                  >View Full Map</button>
                  {this.props.trails.map}
                  <div>
                    <h1>Nearby Trails</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }  
  }
}

export default Trail;