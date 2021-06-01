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
      let partialWidth = Math.round((rating - idx) * 18)
      console.log(partialWidth)
      console.log(rating)
      console.log()
      return( 
        <li>
          <div 
            className="half-full-star"
            style={{ width: `${partialWidth}px` }}
          >
            <FontAwesomeIcon
              icon={faStar}
            />
          </div>
          <div className="half-empty-star">
            <FontAwesomeIcon
              icon={faStar}
            />
          </div>
        </li>
      )
    }
  })

  return (
    <ul className='rating-stars-list'>
      {stars}
    </ul>
  )
}

export default RatingStars;
