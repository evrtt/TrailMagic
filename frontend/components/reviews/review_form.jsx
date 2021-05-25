import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: this.props.review
    }
  }

  componentDidMount() {
    if(this.props.formType === 'edit') {
      this.props.fetchReview(this.props.reviewId)
    }
  }

  setRating(rating) {
    return (
      e => {
        e.preventDefault();
        this.setState({
          rating
        })
      }
    )
  }

  setBody(body) {
    return (
      e => {
        e.preventDefault();
        this.setState({
          body
        })
      }
    )
  }

  handleSubmit() {
    this.props.
  }

  render() {

    let stars = Array(5)
    stars.map((star, idx) => {
      let star;
      if (this.state.review.rating && this.state.review.rating < i) {
        star = <li>
          <FontAwesomeIcon
            icon={faStar}
            className='empty-star'
            onClick={this.setRating(idx + 1)}
          />
        </li>;
      } else {
        star = <li>
          <FontAwesomeIcon
            icon={faStar}
            className='full-star'
            onClick={this.setRating(idx + 1)}
          />
        </li>;
      }
      return star
    })


    return(
      <div>
        {stars}
        <form>
          <textarea 
            name="" 
            id="" 
            cols="200" 
            rows="80"
            placeholder="Share your experience"
          >

          </textarea>
        </form>
        <button
          onClick={this.handleSubmit}
        >
          Post
        </button>
      </div>
    )
  }
}

export default ReviewForm;