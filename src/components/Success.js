import React, { Component } from 'react'
import '../styles/success.css'
import Checkmark from '../img/checkmark.svg'
import Error from '../img/404-placeholder.jpeg'

export default class Success extends Component {
  componentDidMount() {
    console.log('Success: ' + this.props.imageURL)
  }

  handleClick(e) {
    e.preventDefault()
    const url = document.querySelector('.image-link').value
    navigator.clipboard.writeText(url)
    const copiedText = document.querySelector('.copied')
    console.log(copiedText)
    copiedText.style.visibility = 'visible'
    setTimeout(() => copiedText.style.visibility = 'hidden', 1000)
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
          <input type="text" className="image-link" value={this.props.imageURL} disabled />
          <button className="copy" onClick={this.handleClick}>Copy Link</button>
        </form>
        <p className="copied">Link copied! </p>
    </div>
    )
  }
}
