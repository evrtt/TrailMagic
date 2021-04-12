import React from 'react';
import TrailIndexItem from './trail_index_item';
import Map from '../map/mapbox';

class TrailIndex extends React.Component {

  constructor(props) {
    super(props)

  }

  componentDidMount() {
      console.log(this.props.trails)
      this.props.fetchAllTrails();
  }

  render() {
    return (
      <div className="trails-index-page">
        <ul className="trails-index-list">
          {this.props.trails.map( 
            trail => <TrailIndexItem key={trail.id} trail={trail} />
            )}
        </ul>
        <div className="trail-index-map">
          <Map />
        </div>
      </div>
      )
  }
}

export default TrailIndex;