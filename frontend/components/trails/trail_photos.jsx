import React from 'react';

class TrailPhotos extends React.Component {
  constructor(props) {
    super(props)
  
  }

  componentDidMount() {
    this.props.fetchTrailPhotos(this.props.trailId)
  }

  render() {

    if(!this.props.photoURLs) { return (<div></div>) } else {
      return (
        <ul>
          {this.props.photoURLs.map((url, idx) => {
            <li  
              key={`trail-${this.props.trailId}-photo-${idx}`}
              className="trail-photo-list-item"
            >
              <img 
                src={url}
                className="trail-photo"
              />
            </li>
          })}
        </ul>
      )
    }    
  }
}

export default TrailPhotos;