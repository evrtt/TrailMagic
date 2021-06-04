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
      ? this.state.photos.length -1
      : this.state.photos.lastPhoto - 1;
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
    return (
      <div>
        <div>
          <div className="photo-show-last-button">{'<'}</div>
          <img 
            src={this.props.photos[this.state.lastPhoto]} 
            className="last-photo" 
          />
          <img 
            src={this.props.photos[currentPhoto]} 
            className="current-photo"
          />
          <img 
            src={this.props.photos[this.state.nextPhoto]} 
            className="next-photo" 
          />
          <div className="photo-show-next-button">{'>'}</div>
        </div>
        <div className="photo-show-footer">
          <p>{this.props.trailName}</p>
          {/* <button onClick={this.props.}>Delete photo</button> */}
        </div>
      </div>
    )
  }
}

export default PhotoShow;