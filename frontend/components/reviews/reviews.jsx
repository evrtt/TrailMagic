import React from 'react';
import ReviewListItemContainer from './review_list_item_container';

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
      if (Object.values(this.props.reviews).length === 0) {
        reviews = <div className="empty-reviews">
          Be the first to leave a review on this trail!
        </div>
      } else {
        reviews = <ul className={`${this.props.prefix}-reviews-container-${this.props.visible}`}>
          {this.props.reviews.map((review, idx) => (
            <ReviewListItemContainer 
              review={review}
              key={`review-${idx + 1}`}
            />
          ))}
        </ul>
      }
      if(this.props.loggedIn) {
       return <div>
          <div className="trail-ratings">
            <ul>
              {/* {verticalRatings} */}
            </ul>
            <div>
              <h6>RATING</h6>
              <ul>
                
              </ul>
              <div>numreviews</div>
            </div>
            <button
              onClick={this.handleClick}
              className="write-review-button"
            >
              Write review
            </button>
          </div>
          {reviews}
        </div> 
      } else {
        return reviews
      }
    }
  }
}

export default Reviews;