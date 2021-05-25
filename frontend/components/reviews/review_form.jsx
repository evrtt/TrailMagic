import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tempRating: null,
      rating: this.props.rating,
      body: this.props.body,
      authorId: this.props.authorId,
      trailId: this.props.trailId,
    }

    this.setRating = this.setRating.bind(this);
    this.setTempRating = this.setTempRating.bind(this);
    this.clearTempRating = this.clearTempRating.bind(this);
    this.setBody = this.setBody.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.authorId, "AUTHORID", this.props.trailId, "TRAILID")
  }

  setRating(rating) {
    return (
      e => {
        e.preventDefault();
        this.setState({ rating })
      }
    )
  }

  setTempRating(rating) {
    return (
      e => {
        console.log(rating)
        e.preventDefault();
        this.setState({ tempRating: rating })
      }
    )
  }

  clearTempRating() {
    this.setState({tempRating: null})
  }

  setBody() {
    return (
      e => {
        e.preventDefault();
        this.setState({
          body: e.currentTarget.value
        })
      }
    )
  }

  handleSubmit() {

    console.log({
      rating: this.state.rating,
      body: this.state.body,
      authorId: this.state.authorId,
      trailId: this.state.trailId
    })

    this.props.action({
      rating: this.state.rating,
      body: this.state.body,
      authorId: this.state.authorId,
      trailId: this.state.trailId
    })
  }

  render() {

    const arr = (new Array(null, null, null, null, null))
    console.log(arr)
    let tempRating = this.state.tempRating
    let rating = this.state.rating
    const stars = <ul className="form-stars-list">
      {arr.map((star, idx) => {
        // console.log(this.state.tempRating)
        // console.log(this.state.tempRating < idx)
        if(!tempRating){
          console.log(typeof rating === 'undefined')
          if (typeof rating === 'undefined' || rating < idx + 1) {
            star = <li className='form-empty-star' >
              <FontAwesomeIcon
                icon={faStar}
                onClick={this.setRating(idx + 1)}
                onMouseOver={this.setTempRating(idx + 1)}
                onMouseOut={this.clearTempRating}              
              />
            </li>;
          } else {
            star = <li className='form-full-star' >
              <FontAwesomeIcon
                icon={faStar}
                onClick={this.setRating(idx + 1)}
                onMouseOver={this.setTempRating(idx + 1)}
                onMouseOut={this.clearTempRating}
              />
            </li>;
          }
          return star
        } else {
          console.log(tempRating, '=== TempRating')
          if (tempRating < idx + 1) {
            star = <li className='form-empty-star' >
              <FontAwesomeIcon
                icon={faStar}
                onClick={this.setRating(idx + 1)}
                onMouseOver={this.setTempRating(idx + 1)}
                onMouseOut={this.clearTempRating}              />
            </li>;
          } else {
            star = <li className='form-full-star' >
              <FontAwesomeIcon
                icon={faStar}
                onClick={this.setRating(idx + 1)}
                onMouseOver={this.setTempRating(idx + 1)}
                onMouseOut={this.clearTempRating}
              />
            </li>;
          }
          return star
        }
      })}
    </ul> 


    return(
      <div>
        {stars}
        <form>
          <textarea 
            className="create-review-body"
            placeholder="Share your experience"
            onChange={this.setBody()}
            value={this.state.body}
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