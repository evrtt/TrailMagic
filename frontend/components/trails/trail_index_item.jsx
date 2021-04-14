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
    console.log(this.props.openPopup)
    console.log(this.props.closePopup)
    if (this.props.from === "trailIndex") {
      return (
        <li
          key={this.props.trail.id}
          className="trail-index-item"
          onMouseEnter={this.openPopup(this.props.trail.id)}
          onMouseLeave={this.props.closePopup}
        >
          <Link to={`/trails/${this.props.trail.id}`} className="trail-index-item-link">
            <div>
              <img src={``} alt=""/>
            </div>
            <div>
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
            <div>

            </div>
            <div>
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