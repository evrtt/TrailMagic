import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from '@fortawesome/free-solid-svg-icons';

class PhotosForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      trailId: this.props.trailId,
      photoFile: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo[photoFile]')
    this.props.
    this.props.closeModal()
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState
    }
    this.setState({
      photoFiles: file
    })
  }

  clearAddedPhotos() {
    this.setState({
      photoFiles: []
    })
  }

  render() {
    console.log(this.state.photoFiles.length === 0)
    let submitButton;
    if(this.state.photoFiles.length === 0) {
      submitButton = <div className='photos-buttons-container'>
        <button className='photos-button-not-ready'>
          Upload 
        </button>
      </div>
      
    } else {
      submitButton = <div className='photos-buttons-container'>
        <button
          className='photos-button-cancel'
          onClick={this.clearAddedPhotos}
        >
          Cancel
        </button>
        <button
          className='photos-button-ready'
          onClick={this.handleSubmit}
        >
          {`Upload (${this.state.photoFiles.length})`}
        </button>
      </div>
      
    }
    return (
      <form className="upload-photos-form">
        <label>Upload photos</label>
        <input 
          type="file"
          onChange={this.handleFile}
        />
        {submitButton}
      </form>
    )
  }
}

export default PhotosForm;