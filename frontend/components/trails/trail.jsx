import React from 'react';
import MapContainer from '../map/mapbox_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faDirections, faMapMarkerAlt, faPrint } from '@fortawesome/free-solid-svg-icons';
import TrailPhotosContainer from './trail_photos_container';
import { StaticMap } from 'react-map-gl';
import TrailIndexContainer from '../trails/trail_index_container';


class Trail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mapView: false
    }
  
  }



  componentDidMount() { 
      this.props.fetchAllTrails();
      this.props.fetchTrailPhotos(this.props.currentTrail);
      this.props.switchToReviews();
      window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.clearTrailPhotos();
  }

  render () {
    let toggledcontent;
    let reviewsBtn;
    let photosBtn;
    if (this.props.reviewsOrPhotos === "reviews") {
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
      return <div></div>
      // if (this.state.mapView) {
      //   prefix = "map-view"
      //   return (
      //     <div className="trail-page-mapview">
      //       <nav>
      //         <span>{this.props.trail.location}</span>
      //         {/* <SearchComponent /> */}
      //       </nav>
      //       <div>
      //         <h1>{this.props.trail.title}</h1>
      //         <p className="trail-location">{this.props.trail.location}</p>
      //         <p className={`dif-${this.props.trail.difficulty}`}>{props.trail.difficulty}</p>
      //       </div>
      //       <div className="trail-page-map">
      //         <MapContainer trail={this.props.trail} />
      //       </div>
      //     </div>
      //   )
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
                      onClick={this.props.switchToReviews}
                    >Reviews</button>
                    <button 
                      className={`${prefix}-${photosBtn}`}
                      onClick={this.props.switchToPhotos}
                      >Photos</button>
                  </nav>
                  <div className={`${prefix}-${this.props.reviewsOrPhotos}-content`}>
                    {this.props.reviewsOrPhotos === "reviews" ? (
                        <div>THIS IS A FAKE REVIEW THAT NEEDS TO BE REPLACED SO THAT I CAN STYLE THIS SECTION CORRECLTY I JUST NEEDED SOME TEXT TO SEE HOW IT WOULD LOOK IS ALL</div>
                      // <TrailReviews trailId={this.props.trail.id}/>
                    ) : null}
                    {/* {this.state.contentLeftNav === "waypoints" ? (
                      <TrailWaypoints trailId={this.props.trail.id}/>
                    ) : null} */}
                    {this.props.reviewsOrPhotos === "photos" ? (
                      <TrailPhotosContainer 
                        prefix={prefix} 
                        trailId={this.props.trail.id}
                        visible={"visible"}
                      />
                      ) : (
                      <TrailPhotosContainer 
                        prefix={prefix} 
                        trailId={this.props.trail.id}
                        visible={"hidden"}
                      />                      
                    )}
                  </div>
                </div>
                <div className={`${prefix}-trail-page-content-right`}>
                  <div className={`${prefix}-static-map`}>
                    <StaticMap 
                      width="100%"
                      height="100%"
                      latitude={this.props.trail.routeCoords[0][0]}
                      longitude={this.props.trail.routeCoords[0][1]}
                      zoom={12}
                      mapStyle="mapbox://styles/mapbox/outdoors-v11"
                      mapboxApiAccessToken={window.mapAPIKey}
                    />
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={{position: 'relative', top: "-55%", left: '47%', color: "blue"}}
                    />
                  </div>
                  {/* <button 
                    onClick={this.mapViewOn}
                    className={`${prefix}-map-view-on`}
                  >View Full Map</button> */}
                  {this.props.trails.map}
                  <div>
                    <TrailIndexContainer from="sidebar"/>
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