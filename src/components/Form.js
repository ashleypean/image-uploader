import React, { Component } from 'react'
import UploadImage from './UploadImage.js'
import ImageLoading from './ImageLoading.js'
import Success from './Success.js'
import Failed from './Failed.js'
import '../styles/form.css'
import ErrorImg from '../img/404-placeholder.jpeg'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 4,
      imageURL: '', 
      validImage: true, 
      imageFile: ''
    }

    this.nextStep = this.nextStep.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  //Go to next step in form 
  nextStep= () => {
    this.setState({
      step: this.state.step + 1, 
    })
  }

  //Allow user to upload another image 
  resetForm = () => {
    this.setState({
      step: 1
    })
  }

  //Handle form changes
  handleChange = (fileObj) => {
    if(typeof fileObj !== 'object') {
      const img = new Image ()
      img.src = fileObj
      this.setState({
        imageURL: img.src, 
        step: 4
      })
    }else {
      const url = URL.createObjectURL(fileObj).toString()
     console.log('Loading: ' + url)
     this.setState({
      imageURL: url 
      }, () => this.nextStep()
      )}
    }

  render() {
    const { step } = this.state
    switch(step) {
      //First form will prompt user to upload/drag and drop an image 
      case 1: 
      return (
          <UploadImage 
          nextStep={this.nextStep} 
          handleChange={this.handleChange} 
          imageUrl=''
        /> 
      )
      
      //Second form is loading page, in real-life project will give server time to check if valid image
      case 2: 
        return (
            <ImageLoading 
            nextStep={this.nextStep}
            imageURL={this.state.imageURL}
          />
        )
      
      //Third form will give a success message and give the option to upload another image
      case 3: 
        return (
            <Success 
            resetForm={this.resetForm}
            imageURL={this.state.imageURL}
          />
        )

      case 4: 
        return (
          <Failed 
          resetForm={this.resetForm}/>
        )

      //Default form will ask user to upload image    
      default: 
        return (
            <UploadImage 
            resetForm={this.resetForm}
            handleChange={this.handleChange} 
            nextStep={this.nextStep}
            imageUrl=''
          />
        )
    }
  }
}
