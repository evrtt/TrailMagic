import { faThemeisle } from '@fortawesome/free-brands-svg-icons';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import TrailIndexItem from './trail_index_item';

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
      <div>
        <ul className="trails-index">
          {this.props.trails.map( 
            trail => <TrailIndexItem key={trail.id} trail={trail} />
            )}
        </ul>
      </div>
      )
  }
}

export default TrailIndex;