import React, { Component } from 'react'
import UploadImage from './UploadImage.js'
import ImageLoading from './ImageLoading.js'
import Success from './Success.js'
import '../styles/form.css'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      imageUrl: 'asdf', 
      validImage: true
    }
  }

  //Go to next step in form 
  nextStep= () => {
    const { step } = this.state
    this.setState({
      step: step + 1
    })
  }

  //Allow user to upload another image 
  resetForm = () => {
    this.setState({
      step: 1
    })
  }

  //Handle form changes
  handleChange = e => {
    this.setState({
      imageUrl: e.target.value 
    })
  }

  render() {
    const { step } = this.state
    const { imageUrl } = this.state
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
          />
        )
      
      //Third form will give a success message and give the option to upload another image
      case 3: 
          return (
              <Success 
              resetForm={this.resetForm}
              imageUrl={imageUrl}
            />
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
