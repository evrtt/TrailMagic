import React from 'react';
import TrailIndexItem from './trail_index_item';
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
            trail => <TrailIndexItem key={trail.id} trail={trail} />
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