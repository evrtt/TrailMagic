import React from 'react';
import CreateReviewFormContainer from '../reviews/create_review_form_container';
import UpdateReviewFormContainer from '../reviews/update_review_form_containter';
import PhotoFormContainer from '../photos/photo_form_container';
import PhotoShowContainer from '../photos/photo_show_container'

class Modal extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.modal && !document.body.classList.contains("body-no-scroll")) {
      document.body.classList.add("body-no-scroll")
    }
  }

  componentDidUpdate() {
    if (this.props.modal && !document.body.classList.contains("body-no-scroll")) {
      document.body.classList.add("body-no-scroll")
    } else if (!this.props.modal && document.body.classList.contains("body-no-scroll")) {
      document.body.classList.remove("body-no-scroll")
    }
  }

  componentWillUnmount() {
    document.body.classList.remove("body-no-scroll")
  }


  render() {
    if (!this.props.modal) {
      return null;
    }
    let component;  
    switch (this.props.modal) {
      case 'createReview':
        component = <CreateReviewFormContainer data={this.props.data}/>;
        break;
      case 'updateReview':
        component = <UpdateReviewFormContainer data={this.props.data}/>;
        break;
      case 'uploadPhotos':
        component = <PhotoFormContainer data={this.props.data}/>;
        break;
      case 'showPhoto':
        component = <PhotoShowContainer data={this.props.data}/>;
        break;
      default:
        return null;
    }
    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    );
  }
}

export default Modal;