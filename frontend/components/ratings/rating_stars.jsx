import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStars = ({rating}) => {

  const arr = new Array(null, null, null, null, null)
  let stars = arr.map((star, idx) => {
    if (rating >= idx + 1) {
      return <li className="rating-stars-full-star">
        <FontAwesomeIcon
          icon={faStar}
        />
      </li>;
    } else if (rating <= idx) {
      return <li className='rating-stars-empty-star'>
        <FontAwesomeIcon
          icon={faStar}
        />
      </li>;
    } else {
      return <li
        
      >
        <FontAwesomeIcon
          icon={faStar}
        />
      </li>;
    }
  })

  return (
    <ul className='rating-stars-list'>
      {stars}
    </ul>
  )
}

export default RatingStars;
