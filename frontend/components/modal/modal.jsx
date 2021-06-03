import React from 'react';
import CreateReviewFormContainer from '../reviews/create_review_form_container';
import UpdateReviewFormContainer from '../reviews/update_review_form_containter';
import PhotoFormContainer from '../photos/photo_form_container';

const Modal = ({modal, data, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  
  console.log(data, 'data')

  switch (modal) {
    case 'createReview':
      component = <CreateReviewFormContainer data={data}/>;
      break;
    case 'updateReview':
      component = <UpdateReviewFormContainer data={data}/>;
      break;
    case 'uploadPhotos':
      component = <PhotoFormContainer data={data}/>;
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