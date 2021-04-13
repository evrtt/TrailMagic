import React from 'react';
import MapContainer from '../map/mapbox_container';


class Trail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mapView: false
    }

  }

  componentDidMount() {
    this.props.fetchCurrentTrail(this.props.trail.id);
  }

  mapViewOn() {
    this.setState({mapView: true})
  }

  mapViewOff() {
    this.setState({mapView: false})
  }

  render () {
    
    
    if (this.state.mapView) {
      return (
        <div>
          <nav>
            <span>{this.props.trail.location}</span>
            {/* <SearchComponent /> */}
          </nav>
          <div>
            <h1>{this.props.trail.title}</h1>
            <p className="trail-location">{props.trail.location}</p>
            <p className={`dif-${props.trail.difficulty}`}>{props.trail.difficulty}</p>
          </div>
          <div className="trail-page-map">
            <MapContainer trail={this.props.trail} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <nav className="trail-page-nav">
            <span>{this.props.trail.location}</span>
            <div>SEARCH COMPONENT HERE</div>
            {/* <SearchComponent /> */}
          </nav>
          <div className="trail-page-header">
            <h1>{this.props.trail.title}</h1>
            <p className="trail-location">{this.props.trail.location}</p>
            <p className={`dif-${props.trail.difficulty}`}>{this.props.trail.difficulty}</p>
          </div>
          <div className="trail-page-content-left">
            <p className="description">{this.props.description}</p>
            <span>{this.props.trail.length}</span>
            <span>{this.props.trail.estimatedTime}</span>
            <nav>
              WAYPOINTS HERE TOGGLED
              REVIEWS HERE TOGGLED
              PHOTOS HERE TOGGLED
            </nav>
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

export default Trail;