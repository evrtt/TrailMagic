import React from 'react';
import mapbox_container from '../map/mapbox_container';
import Map from '../map/mapbox_container';

class Trail extends React.Component {
  constructor(props) {
    super(props)


  }

  render () {
    return (
      <div>
        <div>

        </div>
        <div className="trail-map">
          <TrailMapContainer trail={this.props.trail} />
        </div>
      </div>
    )
  }
}