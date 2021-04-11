import React from 'react';

const TrailIndexItem = (props) => {
  console.log(props.trail)
  return (
    <li className="trails-index-item">
      <h1>{props.trail.title}</h1>
      <p>{props.trail.location}</p>
      <p>{props.trail.difficulty}</p>
      <span>{props.trail.legnth}</span>
      <span>{props.trail.estimated_time}</span>
    </li>
  )
}

export default TrailIndexItem;