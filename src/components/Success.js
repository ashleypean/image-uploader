import React, { Component } from 'react'

export default class Success extends Component {
  render() {

    return (
      <div className="success">
        <img src="img/checkmark.svg" alt="" className="checkmark" />
        <h4>Uploaded Successfully!</h4>
        <img src="" alt="" id="uploaded-image" />
        <form action="">
          <input type="text" name="image-link" id="image-link" disabled />
          <button className="copy">Copy Link</button>
        </form>
    </div>
    )
  }
}
