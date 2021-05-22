import React from 'react';
import { Link } from 'react-router-dom';

class TrailIndexItem extends React.Component {
  constructor(props) {
    super(props)


    this.openPopup = this.openPopup.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openPopup(trailId) {
    return(
      () => this.props.openPopup(trailId)
    )
  }

  handleClick(trailId) {
    return(
      () => {
        this.props.clearTrailReviews();
        this.props.fetchTrailPhotos(trailId);
        this.props.clearTrailPhotos();
        this.props.fetchTrailPhotos(trailId);
        this.props.switchToReviews();
        window.scrollTo(0, 0);
      }
    )
  }
  
  render() {
    if (this.props.from === "trailIndex") {
      return (
        <li
          key={this.props.trail.id}
          className="trail-index-item"
          onMouseEnter={this.openPopup(this.props.trail.id)}
          onMouseLeave={this.props.closePopup}
        >
          <Link to={`/trails/${this.props.trail.id}`} className="trail-index-item-link">
            <div className="trail-index-item-header-top">
              <img src={this.props.trail.mainPhotoURL} className="trail-index-item-photo"/>
            </div>
            <div className="trail-index-item-header-bottom">
              <h1>{this.props.trail.title}</h1>
              <p className="trail-location">{this.props.trail.location}</p>
              <p className={`dif-${this.props.trail.difficulty}`}>{this.props.trail.difficulty}</p>
              <span>
                Dist: {this.props.trail.length} miles |
                Est: {this.props.trail.estimatedTime} hours
              </span>
            </div>
          </Link >
        </li>
      )
    } else if (this.props.from === "popup") {
      return (
          <div
            key={this.props.trail.id}
            className="popup-trail-item"
          >
            <div 
              className="popup-photo-container"
              style={{
                backgroundImage: `url(${this.props.trail.mainPhotoURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center top 50%",
                backgroundRepeat: "no-repeat",
                borderRadius: "8px",
                marginRight: "10px"
              }}
              >
            </div>
            <div className="popup-trail-item-content">
            <h1>{this.props.trail.title}</h1>
              <p className="trail-location">{this.props.trail.location}</p>
              <p className={`dif-${this.props.trail.difficulty}`}>{this.props.trail.difficulty}</p>
              <span>
                Dist: {this.props.trail.length} miles |
                Est: {this.props.trail.estimatedTime} hours
              </span>
            </div>
          </div>
      )
    } else if(this.props.from === "sidebar") {
      return (
        <li
          key={this.props.trail.id}
          className="trail-index-item-sidebar"
        >
          <Link 
            to={`/trails/${this.props.trail.id}`} 
            update={"true"} 
            className="trail-index-item-link-sidebar"
            onClick={this.handleClick(this.props.trail.id)}
          >
            <div className="trail-index-item-header-top">
              <img src={this.props.trail.mainPhotoURL} className="trail-index-item-photo-sidebar" />
            </div>
            <div className="trail-index-item-header-bottom-sidebar">
              <h1>{this.props.trail.title}</h1>
              <p className="trail-location">{this.props.trail.location}</p>
              <p className={`dif-${this.props.trail.difficulty}-sidebar`}>{this.props.trail.difficulty}</p>
              <span>
                Dist: {this.props.trail.length} miles |
                Est: {this.props.trail.estimatedTime} hours
              </span>
            </div>
          </Link >
        </li>
      )
    }
  }
}

export default TrailIndexItem;