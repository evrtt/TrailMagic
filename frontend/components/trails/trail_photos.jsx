import React from 'react';

class TrailPhotos extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(Object.values(this.props.photoURLs).length === 0) {
      console.log("bad")
      return (<div></div>) } else {
      return (
        <ul className={`${this.props.prefix}-photos-container-${this.props.visible}`}>
          {this.props.photoURLs.map((url, idx) => {
            return (
            <li  
              key={`photo-${idx + 1}`}
              className={`${this.props.prefix}-photo-li`}
            >
              <img 
                src={url}
                className={`${this.props.prefix}-photo`}
              />
            </li>
          )})
          }
        </ul>
      )
    }    
  }
}

export default TrailPhotos;