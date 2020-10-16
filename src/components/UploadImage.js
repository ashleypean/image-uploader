import React, { Component } from 'react'
import '../styles/upload-image.css'
import defaultImg from '../img/drag-and-drop.svg'

export default class UploadImage extends Component {
    
  render() {
    const { imageUrl } = this.props
    return (
      <div className="upload-image">
        <h3>Upload your image</h3>
        <p>File should be Jpeg, Png...</p>
        <div className="dropbox">
          <img src={imageUrl || defaultImg} alt="" />
          <p>Drag &amp; Drop your image here</p>
        </div>
        <p className="or">Or</p>
        <button className="choose-file" type="submit">Choose a file</button>
     </div>
    )
  }
}
