import React from 'react';
import MapContainer from '../map/mapbox_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faDirections, faPrint } from '@fortawesome/free-solid-svg-icons';



class Trail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mapView: false,
      contentLeftNav: "reviews"
    }
  }


  componentDidMount() { 
      this.props.fetchAllTrails();
  }

  mapViewOn() {
    this.setState({mapView: true})
  }

  mapViewOff() {
    this.setState({mapView: false})
  }

  render () {
    console.log(this.props)
    console.log(JSON.stringify(this.props.trail)) 
    console.log(JSON.stringify({}))
    if (this.props.trail === undefined) {
      return <div></div>
    } else {
      if (this.state.mapView) {
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
        return (
          <div className="grey-background">
            <div className="trail-page-no-map">
              <nav className="trail-page-nav">
                <div className="nav-spans">
                  {this.props.trail.location.split(',').map( el =>
                    <span>{el.toString()}</span>
                  )}
                </div>
                <div>SEARCH COMPONENT HERE</div>
                {/* <SearchComponent /> */}
              </nav>
              <div className="trail-page-header">
                <div className="trail-page-header-content">
                  <h1>{this.props.trail.title}</h1>
                  <p className={`dif-${this.props.trail.difficulty}`}>{this.props.trail.difficulty}</p>
                  <p className="trail-location">{this.props.trail.location.split(",")[0].toString()}</p>
                </div>
              </div>
              <div className="green-bar">
                <button>
                  <FontAwesomeIcon icon={faCameraRetro} className="icon"/>
                  <p>Photos</p>
                </button>
                <button>
                    <FontAwesomeIcon icon={faDirections} className="icon"/>
                  <p>Directions</p>
                </button>
                <button>
                    <FontAwesomeIcon icon={faPrint} className="icon"/>
                  <p>Print/PDF Map</p>
                </button>
              </div>
              <div className="trail-page-content">
                <div className="trail-page-content-left">
                  <p className="description">{this.props.trail.description}</p>
                  <div className="content-spans">
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
                  <nav className="nav">
                    WAYPOINTS HERE TOGGLED
                    REVIEWS HERE TOGGLED
                    PHOTOS HERE TOGGLED
                  </nav>
                  {/* {this.state.contentLeftNav === "reviews" ? (
                    <TrailReviews trailId={this.props.trail.id}/>
                  ) : null} */}
                  {/* {this.state.contentLeftNav === "waypoints" ? (
                    <TrailWaypoints trailId={this.props.trail.id}/>
                  ) : null} */}
                  {/* {this.state.contentLeftNav === "photos" ? (
                    <TrailPhotos trailId={this.props.trail.id}/>
                  ) : null} */}
                </div>
                <div className="trail-page-content-right">
                  <div className="static-map">STATIC MAP HERE</div>
                  <button className="map-view-on">View Full Map</button>
                  {this.props.trails.map}
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