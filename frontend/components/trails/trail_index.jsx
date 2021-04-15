import React from 'react';
import TrailIndexItemContainer from './trail_index_item_container';
import MapContainer from '../map/mapbox_container';

class TrailIndex extends React.Component {

  constructor(props) {
    super(props)

  }

  render() {
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

export default TrailIndex;