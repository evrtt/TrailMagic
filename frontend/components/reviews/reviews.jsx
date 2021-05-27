import React from 'react';
import ReviewListItemContainer from './review_list_item_container';

class Reviews extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('createReview')
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

    if (this.props.visible === 'hidden') {
      return null
    } else {
      let reviews;
      if (Object.values(this.props.reviews).length === 0) {
        reviews = <div>
          <div
            className="empty-reviews"
          >
            Be the first to leave a review on this trail!
            </div>
        </div>
      } else {
        reviews = <div>
          <ul className={`${this.props.prefix}-reviews-container-${this.props.visible}`}>
            {this.props.reviews.map((review, idx) => (
                <li
                  key={`review-${idx + 1}`}
                  className={`${this.props.prefix}-reviews-li`}
                >
                  <ReviewListItemContainer review={review}/>
                </li>
            ))}
          </ul>
        </div>
      }
      if(this.props.loggedIn) {
       return <div>
          <button
            onClick={this.handleClick}
            className="write-review-button"
          >
            Write review
          </button>
          {reviews}
        </div> 
      } else {
        return reviews
      }
    }
  }
}

export default Reviews;