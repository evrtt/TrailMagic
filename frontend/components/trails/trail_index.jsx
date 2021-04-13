import React from 'react';
import TrailIndexItemContainer from './trail_index_item_container';
import MapContainer from '../map/mapbox_container';

class TrailIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // popup: false,
      // popupTrailId: null
    }

    // this.openPopup = this.openPopup.bind(this);
    // this.closePopup = this.closePopup.bind(this);
  }

  // openPopup(trailId) {
  //   console.log(trailId)
  //   return (
  //     () => {
  //       this.setState({ popupTrailId: trailId, popup: true })
  //     }
  //   )
  // }

  // closePopup() {
  //   this.setState({popup: false, popupTrailId: null})
  // }

  render() {
    return (
      <div className="trails-index-page">
        <ul className="trails-index-list">
          {Object.values(this.props.trails).map( 
            trail => <div
              // onMouseEnter={this.openPopup(trail.id)}
              // onMouseLeave={this.closePopup}
            >
              <TrailIndexItemContainer 
                key={trail.id} 
                trail={trail}
                from={"trailIndex"} 
              />
            </div>
          )}
        </ul>
        <div className="trail-index-map">
          <MapContainer 
            trails={this.props.trails}
            popup={this.state.popup}
            popupTrailId={this.state.popupTrailId}
          />
        </div>
      </div>
      )
  }
}

export default TrailIndex;