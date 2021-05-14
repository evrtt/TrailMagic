import React from 'react';
import TrailIndexItemContainer from './trail_index_item_container';
import MapContainer from '../map/mapbox_container';

class TrailIndex extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    if(this.props.from === "sidebar" && this.props.trails.length === 0) {
      this.props.fetchAllTrails()
    }
  }

  render() {

    const haversineDistance = (coordsOne, coordsTwo) => {
      
      const distanceLat = (coordsTwo[1] - coordsOne[1]) * Math.PI / 180;
      const distanceLong = (coordsTwo[0] - coordsOne[0]) * Math.PI / 180;

      const strait = Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
        Math.cos(coordsOne[1] * Math.PI / 180) * Math.cos(coordsTwo[1] * Math.PI / 180) *
        Math.sin(distanceLong / 2) * Math.sin(distanceLong / 2);
      const havDist = 2 * Math.atan2(Math.sqrt(strait), Math.sqrt(1 - strait));
      const miles = (3950 * havDist);

      return miles;
    };

    if (this.props.from === "sidebar") {
      return (
        <div className="trails-index-sidebar">
          <span>Nearby Trails</span>
          <ul className="trails-index-list-sidebar">
            {Object.values(this.props.trails).map( (trail, idx) => {
              if(`${trail.id}` === `${this.props.currentTrail.id}`) {
                  return null 
              } else if(
                  (haversineDistance(
                    trail.routeCoords[0], 
                    this.props.currentTrail.routeCoords[0]
                  )) > 35
                ) {
                return null
              } else { 
                return(
                <div>
                  <TrailIndexItemContainer 
                    key={trail.id} 
                    trail={trail}
                    from={"sidebar"} 
                  />
                </div>
              )}  
            })}  
          </ul>
        </div>
      )
    } else {
      return (
        <div className="trails-index-page">
          <ul className="trails-index-list">
            {Object.values(this.props.trails).map( 
              trail => <div>
                <TrailIndexItemContainer 
                  key={trail.id} 
                  trail={trail}
                  from={"trailIndex"} 
                />
              </div>
            )}
          </ul>
          <div className="trail-index-map">
            <MapContainer trails={this.props.trails}/>
          </div>
        </div>
      )
    } 
  }
}

export default TrailIndex;