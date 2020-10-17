import React, { Component } from 'react'
import '../styles/upload-image.css'
import defaultImg from '../img/drag-and-drop.svg'

export default class UploadImage extends Component {  

  //Store upload image div in variable to change style on drag and drop events 

  //Change border styling on drag in   
  dragInHandler = (e) => {
    e.preventDefault()
    const dropbox = document.querySelector('.dropbox')
    dropbox.style.border = '3px dashed green'
    console.log('dragged in')
    
  }

  //Revert border styling to original on drag out
  dragOutHandler = (e) => {
    e.preventDefault()
    const dropbox = document.querySelector('.dropbox')
    dropbox.style.border = '3px dashed #2F80ED'
    console.log('dragged out')
  }

  //Handle file drop 
  dropHandler = (e) => {
    //Prevent form submission
    e.preventDefault()
    console.log('drop')
    //Change styling back to blue border 
    const dropbox = document.querySelector('.dropbox')
    dropbox.style.border = '3px dashed #2F80ED'

    this.props.handleChange(e)
  }

  //Hanlde CHOOSE A FILE button selection
  chooseFile = (e) => {
    console.log('file chosen')

    // Store fileName and update imageURL in parent component's state
    const fileName = e.target.files[0].name
    console.log(fileName)
    this.props.handleChange(e, fileName)

  }


  render() {
    const { imageUrl } = this.props
    return (
      <div className="upload-image">
        <h3>Upload your image</h3>
        <p>File should be Jpeg, Png...</p>
        <div className="dropbox" onDrop={this.dropHandler} onDragOver={this.dragInHandler} onDragLeave={this.dragOutHandler}>
          <img src={imageUrl || defaultImg} alt="" />
          <p>Drag &amp; Drop your image here</p>
        </div>
        <p className="or">Or</p>
        <label className="choose-file" onChange={this.chooseFile}>
          Choose a file
          <input type="file" accept="image/png, image/jpeg" /> 
        </label>
        
     </div>
    )
  }
}
