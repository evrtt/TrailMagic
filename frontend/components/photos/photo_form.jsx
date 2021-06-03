import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from '@fortawesome/free-solid-svg-icons';

class PhotosForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      trailId: this.props.trailId,
      photoFile: null,
      photoURL: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.clearAddedPhotos = this.clearAddedPhotos.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', this.state.photoFile)
    this.props.action(formData, this.props.trailId)
    this.props.closeModal()
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    debugger
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoURL: fileReader.result})
    }
    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  clearAddedPhotos() {
    this.setState({
      photoFile: null,
      photoURL: null
    })
  }

  render() {
    let preview;
    if(this.state.photoURL) {
      preview = <div>
        <img src={this.state.photoURL}/> 
      </div>
    } else {
      preview = null
    }
    let submitButton;
    if(this.state.photoFile) {
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
          Upload
        </button>
      </div>
    } else {
      submitButton = <div className='photos-buttons-container'>
        <button className='photos-button-not-ready'>
          Upload 
        </button>
      </div>
      
    }
    return (
      <form className="upload-photos-form">
        <label>Upload photo</label>
        {preview}
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