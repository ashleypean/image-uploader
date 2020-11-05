import React, { Component } from 'react'
import '../styles/success.css'
import Checkmark from '../img/checkmark.svg'
import Error from '../img/404-green.png'

export default class Success extends Component {

  handleClick(e) {
    e.preventDefault()
    const URL = document.querySelector('input.image-link').value
    window.open(URL, "_blank")
    console.log(URL)

    document.querySelectorAll('.upload-another').forEach(x => {
      x.style.visibility = 'visible' 
    })
  }

  uploadAnother = () => {
    this.props.resetForm()
  }

  render() {

    return (
      <div className="success">
        <img src={Checkmark} alt="Checkmark" className="checkmark" />
        <h4>Uploaded Successfully!</h4>
        <img src={this.props.imageURL ||Error} 
        alt="" 
        className="uploaded-image" />
        <form>
          <input type="text" className="image-link" value={this.props.imageURL} placeholder="Image not available" disabled />
          <button className="open" onClick={this.handleClick}>Open</button>
        </form>
        <p className="upload-another"> Would you like to upload another photo? </p>
        <button className="upload-another" onClick={this.uploadAnother}>Upload</button>
    </div>
    )
  }
}
