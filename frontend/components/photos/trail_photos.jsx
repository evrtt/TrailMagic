import React from 'react';

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
    if(this.props.visible === "hidden") {
      return null
    } else {
      if(Object.values(this.props.photoURLs).length === 0) {
        if(this.props.loggedIn) {
          return <div>
            <div>
              <button
                onClick={this.handleClick(this.props.trailId)}
              >
                Upload Photos
              </button>
            </div>
          </div>
        } else {
          return (<div></div>) 
        }
      } else {
        if(this.props.loggedIn) {
          return (
            <div>
              <div>
              <button
                onClick={this.handleClick(this.props.trailId)}
              >
                  Upload Photos
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