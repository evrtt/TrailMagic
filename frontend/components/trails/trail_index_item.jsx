import React from 'react';

const TrailIndexItem = (props) => {

  return (
    <li className="trail-index-item">
      <h1>{props.trail.title}</h1>
      <p className="trail-location">{props.trail.location}</p>
      <p className={`dif-${props.trail.difficulty}`}>{props.trail.difficulty}</p>
      <span>
        Dist: {props.trail.length} miles -
        Est: {props.trail.estimated_time} hours</span>
    </li>
  )
}

export default TrailIndexItem;