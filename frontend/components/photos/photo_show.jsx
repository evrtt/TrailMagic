import React from 'react';


class PhotoShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      currentPhoto: this.props.currentPhoto,
      lastPhoto: this.props.currentPhoto === 0 
        ? this.props.photos.length - 1
        : this.props.currentPhoto - 1,
      nextPhoto: (this.props.currentPhoto + 1) % (this.props.photos.length - 1)
      
    }

    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);

  }

  moveLeft() {

    let newCurrentPhoto = this.state.lastPhoto;
    let newLastPhoto = this.state.lastPhoto === 0 
      ? this.props.photos.length -1
      : this.state.lastPhoto - 1;
    let newNextPhoto = this.state.currentPhoto

    this.setState({
      currentPhoto: newCurrentPhoto,
      lastPhoto: newLastPhoto,
      nextPhoto: newNextPhoto
    })
  }

  moveRight() {
    let newCurrentPhoto = this.state.nextPhoto;
    let newNextPhoto = (this.state.nextPhoto + 1) % (this.props.photos.length - 1)
    let newLastPhoto = this.state.currentPhoto

    this.setState({
      currentPhoto: newCurrentPhoto,
      lastPhoto: newLastPhoto,
      nextPhoto: newNextPhoto
    })
  }

  render() {

    let img = (new Image)
    img.src = this.props.photos[this.state.currentPhoto]
    let currentPhotoStyle;
    if (img.naturalHeight > img.naturalWidth) {
      console.log("TALL")
      currentPhotoStyle = {
        height: `${parseInt(this.props.height) - 40}px`,
        maxWidth: `${parseInt(this.props.width) - 40}px`,
        zIndex: 3,
        objectFit: "contain"
      }
    } else if (img.naturalHeight < img.naturalWidth) {
      console.log("WIDE")
      currentPhotoStyle = {
        width: `${parseInt(this.props.width) - 40}px`,
        maxHeight: `${parseInt(this.props.height) - 40}px`,
        zIndex: 3,
        objectFit: "contain"

      }
    } else {
      currentPhotoStyle = {
        height: `${parseInt(this.props.width) - 40}px`,
        width: `${parseInt(this.props.height) - 40}px`,
        zIndex: 3,
        objectFit: "contain"

      } 
    }

    return (
      <div>
        <div className="relative-parts">
          <div className="photo-show-last-button" onClick={this.moveLeft}>
            {'<'}
          </div>
        </div>
        <div className="relative-parts">
          <div className="em-left">
            <div className="photo-show-next-button" onClick={this.moveRight}>
              {'>'}
            </div>
          </div>
        </div>
        <div className="relative-parts">
          <div className="shift-x">
            <div className="photo-show-header">
              <p onClick={this.props.closeModal}>✕</p>
            </div>
          </div>
        </div>
        <div className="relative-parts">
          <div className="shift-trail-name">
            <div className="photo-show-footer-left">
              <p>{this.props.trailTitle}</p>
            </div>
          </div>
        </div>
        <div className="relative-parts">
          <div className="shift-delete-button">
            <button className="photo-show-footer-right">
              <p>Delete Photo</p>
            </button>
          </div>
        </div>
        <div 
          className="photo-show-container"
        >
          <img 
            src={this.props.photos[this.state.lastPhoto]} 
            className="last-photo" 
          />
          <img 
            src={this.props.photos[this.state.currentPhoto]} 
            // className="current-photo"
            style={currentPhotoStyle}
          />
          <img 
            src={this.props.photos[this.state.nextPhoto]} 
            className="next-photo" 
          />
        </div>
      </div>
    )
  }
}

export default PhotoShow;