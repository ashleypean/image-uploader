import React, { Component } from 'react'
import '../styles/image-loading.css'

export default class ImageLoading extends Component {
  render() {

    return (
      <div className="uploading">
        <h4>Uploading...</h4>
        <div className="loading">
          <div className="loading-bar"></div>
        </div>

      </div>
    )
  }
}

