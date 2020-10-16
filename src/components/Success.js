import React, { Component } from 'react'
import '../styles/success.css'
import Checkmark from '../img/checkmark.svg'
import Error from '../img/404-placeholder.jpeg'

export default class Success extends Component {
  render() {

    return (
      <div className="success">
        <img src={Checkmark} alt="Checkmark" className="checkmark" />
        <h4>Uploaded Successfully!</h4>
        <img src={Error} 
        alt="" 
        className="uploaded-image" />
        <form action="">
          <input type="text" name="image-link" className="image-link"  />
          <button className="copy">Copy Link</button>
        </form>
    </div>
    )
  }
}
