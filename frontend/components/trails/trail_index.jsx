import React from 'react';
import TrailIndexItemContainer from './trail_index_item_container';
import MapContainer from '../map/mapbox_container';

class TrailIndex extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.props.from === "sidebar" ? this.props.fetchAllTrails() : null;
  }

  render() {

    function haversineDistance(coordsOne, coordsTwo) {
      function toRadians(num) {
        return num * Math.PI / 180;
      };

      var diffLat = coordsTwo[1] - coordsOne[1];
      var distanceLat = toRadians(diffLat);
      var diffTwo = coordsTwo[0] - coordsOne[0];
      var distanceLon = toRadians(diffTwo)
      var a = Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
        Math.cos(toRadians(coordsOne[1])) * Math.cos(toRadians(coordsTwo[1])) *
        Math.sin(distanceLon / 2) * Math.sin(distanceLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var hDistance = (3950 * c);

      return hDistance;
    };

    if (this.props.from === "sidebar") {
      if(this.props.trails.length > 0) {
        return (
          <div className="trails-index-sidebar">
            <span>Nearby Trails</span>
            <ul className="trails-index-list-sidebar">
              {Object.values(this.props.trails).map( trail => {
                console.log(trail)
                console.log(this.props.trails[this.props.currentTrailId - 1])
                if(`${trail.id}` === `${this.props.currentTrailId}`) {
                   return null 
                } else if(
                    (haversineDistance(
                      trail.routeCoords[0], 
                      this.props.trails[this.props.currentTrailId - 1].routeCoords[0]
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
        return <div></div>
      }
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