import React from 'react';
import MapContainer from '../map/mapbox_container';


class Trail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mapView: false
    }

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
          <div className="trail-map">
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
            <p className="trail-location">{props.trail.location}</p>
            <p className={`dif-${props.trail.difficulty}`}>{props.trail.difficulty}</p>
          </div>
          <div className="trail-page-content-left">
            <p>{this.props.description}</p>
          </div>
          <div className="trail-page-content-right">
            <div>STATIC MAP HERE</div>
          </div>
        </div>
      )
    }
  }
}

export default Trail;