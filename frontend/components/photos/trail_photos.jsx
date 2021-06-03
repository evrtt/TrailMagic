import React from 'react';
import { Link } from 'react-router-dom'

class TrailPhotos extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(trailId) {
    return (
      e => {
        e.preventDefault();
        this.props.openModal({
          type: 'uploadPhotos',
          data: trailId
        })
      }
    )
  }

  render() {

    let photosHeaderBlurb = <div className="photos-header-blurb">
      <h2>
        Add photos of this trail
      </h2>
      <span>
        Photos help others to preview the trail and make TrailMagic a better tool for all.
      </span>
    </div>
    let loggedOutHeader = <div className="photos-header-logged-out">
      {photosHeaderBlurb}
      <div className="photos-header-logged-out-links">
        <Link to='/signup' className="photos-signed-out-link">
          Sign up
        </Link>
        {" or "}
        <Link to='/login' className="photos-signed-out-link">
          log in
        </Link>
        {" to upload a photo."}
      </div>
    </div>

    if(this.props.visible === "hidden") {
      return null
    } else {
      if(Object.values(this.props.photoURLs).length === 0) {
        if(this.props.loggedIn) {
          return <div className="photos-header">
            <div>
              {photosHeaderBlurb}
              <button
                onClick={this.handleClick(this.props.trailId)}
              >
                Upload Photo
              </button>
            </div>
          </div>
        } else {
          return loggedOutHeader
        }
      } else {
        if(this.props.loggedIn) {
          return (
            <div>
              <div className="photos-header">
                {photosHeaderBlurb}
                <button
                  onClick={this.handleClick(this.props.trailId)}
                >
                    Upload Photo
                </button>
              </div>
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
                  )
                })
                }
              </ul>
            </div>
          )
        } else {
          return (
            <div>
              {loggedOutHeader}
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
            </div>
          )
        }
      }    
    }
  }
}

export default TrailPhotos;