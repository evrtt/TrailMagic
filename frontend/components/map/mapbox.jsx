import { faMapMarked, faMapMarker, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import TrailIndexItem from '../trails/trail_index_item';


class Map extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 39.059811,
        longitude: -106.311104,
        zoom: 7,
        bearing: 0,
        pitch: 0
      }

    }

    this.openPopup = this.openPopup.bind(this);
  };

  componentDidMount() {
    this.props.fetchAllTrails();
  }

  openPopup(trailId) {
    return (
      () => this.props.openPopup(trailId)
    )
  }

  render() {
    let iconClass;
    if (this.props.trails.length < 12) {
      return <div></div>
    } else {
      if (JSON.stringify(this.props.trails) !== JSON.stringify({})) {
        console.log("TRUUUUU")
        return (
          <div>
            <ReactMapGL
              {...this.state.viewport}
              width="100%"
              height="100%"
              mapStyle="mapbox://styles/mapbox/outdoors-v11"
              onViewportChange={viewport => this.setState({viewport})}
              mapboxApiAccessToken={window.mapAPIKey}
            >
              {Object.values(this.props.trails).map(trail => (
                <div>
                  <Marker
                    key={`marker-${trail.id}`}
                    latitude={trail.routeCoords[0][0]}
                    longitude={trail.routeCoords[0][1]}
                    className="marker-class"
                  >
                    <FontAwesomeIcon
                      
                      key={`icon-${trail.id}`} 
                      icon={faMapMarkerAlt} 
                      className={
                        this.props.popupTrailId === trail.id 
                        ? "nav-icon-popped" 
                        : "nav-icon" 
                      }
                      onClick={this.openPopup(trail.id)}
                    />

                  </Marker>
                </div>
              ))}
            {this.props.popup ? 
              <div className="popup-div">
              <Popup
                key={`popup-${this.props.popupTrailId}`}
                latitude={this.props.trails[this.props.popupTrailId].routeCoords[0][0]}
                longitude={this.props.trails[this.props.popupTrailId].routeCoords[0][1]}
                onClose={this.props.closePopup}
                className="popup"
              >
                <TrailIndexItem 
                  from="popup" 
                  trail={this.props.trails[this.props.popupTrailId]} 
                />
              </Popup> 
              </div>
            : null}
              {/* {this.state.popup ? (
                <Popup
                  latitude={this.props.trails[this.state.popupTrailId].routeCoords[0][0]}
                  longitude={this.props.trails[this.state.popupTrailId].routeCoords[0][1]}
                >
                  <TrailIndexItem from="popup" trail={this.props.trails[this.state.popupTrailId]} />
                </Popup>
              ) : null
              } */}


            </ReactMapGL>
          </div>
        )
      } else {
        console.log("FALSE")
        return (
          <ReactMapGL
            {...this.state.viewport}
            width="100%"
            height="100%"
            mapStyle="mapbox://styles/mapbox/outdoors-v11"
            onViewportChange={viewport => this.setState({ viewport })}
            mapboxApiAccessToken={window.mapAPIKey}
          ></ReactMapGL>
        )
      }
    }
  }
}
export default Map;