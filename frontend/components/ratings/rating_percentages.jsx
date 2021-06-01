import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingPercentages = ({ reviews, reviewCount }) => {

  console.log(reviews, "REVIEWSSSSS")

  if(reviewCount === 0) {
    return null
  } else {

  
    let places = {5: 0, 4: 0, 3: 0, 2: 0, 1: 0};
    Object.values(reviews).forEach(review => places[review.rating] += 1);
    let max = Math.max(...Object.values(places));
    let percentages = Object
      .entries(places)
      .sort((a, b) => a[0] < b[0] ? 1 : -1)
      .map(place => {
        console.log((Math.round((place[1] / max) * 100)))
        console.log(place[1], max)
        return (
          <li className="percentage-li">
            <span>{place[0]}</span>
            <FontAwesomeIcon
              icon={faStar}
            />
            <div className="rating-bar-container">
              <div style={{ width: `${Math.round((place[1] / max) * 100)}px`}}>
                {null}
              </div>
            </div>
          </li>
        )
      })
    return (
      <ul>
        {percentages}
      </ul>
    )
  }
}

export default RatingPercentages;