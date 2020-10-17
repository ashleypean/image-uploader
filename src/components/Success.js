import React, { Component } from 'react'
import '../styles/success.css'
import Checkmark from '../img/checkmark.svg'
import Error from '../img/404-placeholder.jpeg'

export default class Success extends Component {
  componentDidMount() {
    console.log('Success: ' + this.props.imageURL)
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
          <input name="image-link" className="image-link" value={this.props.imageURL} placholder={this.props.imageURL} disabled />
          <button className="copy">Copy Link</button>
        </form>
    </div>
    )
  }
}
