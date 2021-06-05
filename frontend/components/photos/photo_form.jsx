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
    this.openFile = this.openFile.bind(this);

    this.fileInputRef = React.createRef();
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

  openFile() {
    this.fileInputRef.current.click()
  }

  render() {
    let preview;
    let submitButton;
    let browseFiles;
    if(this.state.photoURL && this.state.photoFile) {
      preview = (
        <div className="image-preview">
          <img src={this.state.photoURL}/> 
        </div>
      );
      submitButton = (
        <div className='photos-buttons-container'>
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
      );
      browseFiles = (
        <button onClick={this.openFile} className="change-file-container">
          <span>
            Choose a different file
          </span>
          <p>
            PNG, JPG, or JPEG
          </p>
        </button>
      );
    } else {
      preview = null;
      submitButton = (
        <div className='photos-buttons-container'>
          <button className='photos-button-not-ready'>
            Upload 
          </button>
        </div>
      );
      browseFiles = (
        <button 
          onClick={this.openFile} 
          className="browse-files-container"
        >
          <FontAwesomeIcon icon={faCamera} className="browse-camera" />
          <span>
            Choose a file to upload
          </span>
          <p>
            PNG, JPG, or JPEG
          </p>
        </button>
      );
    }
    return (
      <form className="upload-photos-form">
        <label>Upload photo</label>
        {preview}
        {browseFiles}
        <input
          type="file"
          onChange={this.handleFile}
          style={{display: "hidden"}}
          ref={this.fileInputRef}
          style={{display: "none"}}
        />
        {submitButton}
      </form>
    )
  }
}

export default PhotosForm;