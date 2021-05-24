import React from 'react';
// import CreateReviewFormContainer from './create_review_form_container'

class Reviews extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.visible === 'hidden') {
      return null
    } else {
      if (Object.values(this.props.reviews).length === 0) {
        return (
          <div>
            <div
              className="empty-reviews"
              >
              Be the first to leave a review on this trail!
            </div>
            {/* <ReviewFormContainer /> */}
          </div>
        )
      } else {
        return (
          <div>
            {/* <ReviewFormContainer /> */}
            <ul className={`${this.props.prefix}-reviews-container-${this.props.visible}`}>
              {this.props.reviews.map((review, idx) => {
                return (
                  <li
                  key={`review-${idx + 1}`}
                  className={`${this.props.prefix}-reviews-li`}
                  >
                    <ReviewListItem />
                  </li>
                )
              })
            }
            </ul>
          </div>
        )
      }
    }
  }
}

export default Reviews;