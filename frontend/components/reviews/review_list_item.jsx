import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import RatingStars from '../ratings/rating_stars';

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props)

    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  update() {
    console.log(this.props.review)
    this.props.openModal({
      type: 'updateReview', 
      data: Object.assign(
        {}, 
        this.props.review, 
        {trailTitle: this.props.trailTitle}
      )
    })
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
    const month = (num) => {
      
      let numArr = num.split("")
      numArr[0] === "0" ? num = parseInt(numArr[1]) - 1 : num = parseInt(num) - 1

      return (
        [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ][num]
      )
    }
    
    const dateArr = this.props.review.createdAt.split("-")
    const createdAt = `${month(dateArr[1])} ${dateArr[2].split("T")[0]}, ${dateArr[0]}`

    return (

      <li className='review-li'>
        <div className="review-name-and-date">
          <div className='author-name'>{this.props.review.authorName}</div>
          <div className="review-created-at">
            {createdAt}
          </div>
        </div>
        <RatingStars rating={this.props.review.rating} />
        <div className='review-li-div'>
          {this.props.review.body}
        </div>
        {this.props.isAuthor ? 
          <div className='edit-delete-buttons-container'>
            <button
              onClick={this.update}
              className='edit-button'
            >
              edit
            </button> 
            <div>  |  </div>
            <button 
              onClick={this.delete(this.props.review, this.props.trailId)}
              className='delete-button'
            >
              delete
            </button>
          </div>
          : null}
      </li>
    )
  }
}

export default ReviewListItem;