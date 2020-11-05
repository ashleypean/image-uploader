import React, { Component } from 'react'
import Caution from '../img/caution-sign.png'
import Error from '../img/404-blue.png'
import '../styles/failed.css'

export default class Failed extends Component {
  render() {
    return (
      <div className="failed"> 
      <img src={Caution} alt="Caution sign" className="caution" />
        <h3>Error! <br />Image could not be proccessed. Please try again.</h3>
        <img src={Error} alt="Could not be generated" 
        className="uploaded-image" />
        <button className="try-again" onClick={this.props.resetForm}>Try again</button>
      </div>
    )
  }
}
