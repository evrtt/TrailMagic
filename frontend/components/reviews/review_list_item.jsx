import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props)

    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  update() {
    this.props.openModal('updateReview')
  }

  delete(review, trailId) {
    return e => {
      e.preventDefault();
      let res = window.confirm("Are you sure you want to delete this review?")
      if(res) {
        this.props.deleteReview(review, trailId);
      }
    }
  }

  render() {
    let stars = []
    for(i = 0; i < 5; i++) {
      let star;
      if(this.props.review.rating < i) {
        star = <li>
          <FontAwesomeIcon
            icon={faStar}
            className='full-star'
          />
        </li>;
      } else {
        star = <li>
          <FontAwesomeIcon
            icon={faStar}
            className='empty-star'
          />
        </li>;
      }
      stars.push(star)
    }


    <div className="review-list-item">
      <p>{this.props.review.author}</p>
      <div>
        <ul className="stars-list">
          {stars}
        </ul>
        <p>
          {this.props.review.created_at}
        </p>
      </div>
      <p>
        {this.props.review.body}
      </p>
      <div>
        <button
          onClick={this.update}
        >
          edit
        </button> 
        <p>  |  </p>
        <button 
          onClick={this.delete(this.props.review, this.props.trailId)}
        >
          delete
        </button>
      </div>
    </div>
  }
}

export default ReviewListItem;