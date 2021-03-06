import React from 'react';
import ReviewListItemContainer from './review_list_item_container';
import RatingStars from '../ratings/rating_stars';
import RatingPercentages from '../ratings/rating_percentages';
import { Link } from 'react-router-dom'


class Reviews extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openModal(
      {
        type: 'createReview', 
        data: {
          trailId: this.props.trailId, 
          trailTitle: this.props.trailTitle
        }
      }
    )
  }

  componentDidMount() {
    this.props.fetchTrailReviews(this.props.trailId)
  }

  render() {
    console.log(this.props.prefix)
    console.log(this.props.reviews)

    if (this.props.visible === 'hidden') {
      return null
    } else {
      let reviews;
      let rating;
      if (Object.values(this.props.reviews).length === 0) {
        if (this.props.loggedIn) {
          reviews = <div className="empty-reviews">
            <span>
              Be the first to leave a review on this trail.
            </span>
          </div>
        } else {
          reviews = reviews = <div className="empty-reviews">
            <span>
              <Link to='/signup' className="empty-reviews-link">
                Sign up
              </Link>
              {" or "} 
              <Link to='/login' className="empty-reviews-link">
                log in 
              </Link>

              {" and be the first to leave a review on this trail."}
            </span>
          </div>
        }
      } else {
        reviews = <ul className={`${this.props.prefix}-reviews-container-${this.props.visible}`}>
          {this.props.reviews.map((review, idx) => (
            <ReviewListItemContainer 
              review={review}
              trailTitle={this.props.trailTitle}
              key={`review-${idx + 1}`}
            />
          ))}
        </ul>
        rating = <div className="reviews-header-content">
          <RatingPercentages
            reviews={this.props.reviews}
            reviewCount={this.props.reviewCount}
          />
          <div className="trail-ratings-container">
            <h6>{this.props.rating}</h6>
            <RatingStars rating={this.props.rating} />
            <div>{`${this.props.reviewCount} Reviews`}</div>
          </div>
        </div>
      }
      if(this.props.loggedIn) {
         if(rating) {
          return <div>
            <div className="reviews-header">
              {rating}
              <button onClick={this.handleClick}> Write review </button>
            </div>
            {reviews}
          </div>  
         } else {
           return <div>
             <div className="button-only-header">
               <button onClick={this.handleClick}> Write review </button>
             </div>
             {reviews}
           </div>
         }
      } else {
        if(rating) {
          return <div>
            <div className="reviews-header">
              {rating}
              <span className="full-reviews-logged-out">
                <Link to='/signup' className="full-reviews-link">
                  Sign up
              </Link>
                {" or "}
                <Link to='/login' className="full-reviews-link">
                  log in
              </Link>

                {" to write a review."}
              </span>
            </div>
            {reviews}
          </div>       
        } else {
          return <div>
            <div className="reviews-header-empty">
              {rating}
            </div>
            {reviews}
          </div>
        }
      }
    }
  }
}

export default Reviews;