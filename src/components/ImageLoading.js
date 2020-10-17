import React, { Component } from 'react'
import '../styles/image-loading.css'

export default class ImageLoading extends Component {

  componentDidMount(){
    //Simulate a call to the server by loading for a few seconds 
    const loading = () => setTimeout(this.props.nextStep, 1000)
    loading()
  }
  

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
