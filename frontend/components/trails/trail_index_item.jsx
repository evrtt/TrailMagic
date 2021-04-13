import React from 'react';
import { Link } from 'react-router-dom';

const TrailIndexItem = (props) => {

  let klass;
  props.from === "popup" ? klass = "popup-trail-item" : klass = "trail-index-item"

  return (
    <li className="trail-index-item">
      <Link to={`/trails/${props.trail.id}`} className="trail-index-item-link">
        <div>
          
        </div>
        <div>
          <h1>{props.trail.title}</h1>
          <p className="trail-location">{props.trail.location}</p>
          <p className={`dif-${props.trail.difficulty}`}>{props.trail.difficulty}</p>
          <span>
            Dist: {props.trail.length} miles |
            Est: {props.trail.estimatedTime} hours</span>
        </div>
      </Link >
    </li>
  )
}

export default TrailIndexItem;