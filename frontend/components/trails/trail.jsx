import React from 'react';
import MapContainer from '../map/mapbox_container';


class Trail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mapView: false,
      contentLeftNav: "reviews"
    }
  }


  componentDidMount() {
    if (this.props.trail === undefined) {
      this.props.fetchCurrentTrail(this.props.currentTrail);
    }
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
          <div className="trail-page-no-map">
            <nav className="trail-page-nav">
              <span>{this.props.trail.location}</span>
              <div>SEARCH COMPONENT HERE</div>
              {/* <SearchComponent /> */}
            </nav>
            <div className="trail-page-header">
              <h1>{this.props.trail.title}</h1>
              <p className="trail-location">{this.props.trail.location}</p>
              <p className={`dif-${this.props.trail.difficulty}`}>{this.props.trail.difficulty}</p>
            </div>
            <div className="trail-page-content-left">
              <p className="description">{this.props.description}</p>
              <span>Dist {this.props.trail.length} Miles</span>
              <span>Est {this.props.trail.estimatedTime} Hours</span>
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
            </div>
          </div>
        )
      }
    }  
  }
}

export default Trail;