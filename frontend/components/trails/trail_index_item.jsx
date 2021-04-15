import React from 'react';
import { Link } from 'react-router-dom';

class TrailIndexItem extends React.Component {
  constructor(props) {
    super(props)


    this.openPopup = this.openPopup.bind(this);
  }

  openPopup(trailId) {
    return(
      () => this.props.openPopup(trailId)
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
            {/* <img 
              src={this.props.trail.mainPhotoURL}
              style={{
                objectFit: "cover",
                objectPosition: "center"
              }} 
            /> */}
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
    }
  }
}

export default TrailIndexItem;