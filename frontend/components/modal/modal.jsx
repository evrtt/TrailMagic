import react from 'react';

const Modal = (props) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'createReview':
      component = <CreateReviewFormContainer />;
      break;
    case 'editReview':
      component = <UpdateReviewFormContainer />;
      break;
    case 'deleteReview':
      component = <DeleteReviewFormContainer />;
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

export default Modal;