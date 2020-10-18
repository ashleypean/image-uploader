import React, { Component } from 'react'
import '../styles/image-loading.css'

export default class ImageLoading extends Component {

  componentDidMount(){
    //Simulate a call to the server by loading for a few seconds 
    const randomWaitTime = Math.random()*5000 + Math.random()*5000
    console.log(randomWaitTime)
    const loading = () => setTimeout(this.props.nextStep, randomWaitTime)
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
