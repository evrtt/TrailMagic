import React from 'react';
import CreateReviewFormContainer from '../reviews/create_review_form_container';
import UpdateReviewFormContainer from '../reviews/update_review_form_containter';

const Modal = ({modal, data, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  
  switch (modal) {
    case 'createReview':
      component = <CreateReviewFormContainer/>;
      break;
    case 'editReview':
      component = <UpdateReviewFormContainer review={data.review}/>;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default Modal;