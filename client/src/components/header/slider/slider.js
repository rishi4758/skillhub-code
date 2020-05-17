import React ,{Component} from "react";
import {Carousel} from 'react-bootstrap'
import axios from "axios";
import "./slide.css"
 export default class Slider extends Component{


render(){

    return(
    
    <Carousel>
  <Carousel.Item className="slider">
    <img
      className="d-block w-100"
      src="./pic/p1.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style={{color:"maroon",fontWeight:"800"}}>All Service At Your Doorstep</h3>
      <p style={{color:"darkgrey",fontWeight:"800"}}>Skill hub is leading Plateform in the world</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider">
    <img
      className="d-block w-100"
      src="./pic/p2.jpg"
      alt="Third slide"
    />

<Carousel.Caption>
      <h3 style={{color:"maroon",fontWeight:"800"}}>All Service At Your Doorstep</h3>
      <p style={{color:"darkgrey",fontWeight:"800"}}>Skill hub is leading Plateform in the world</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider">
    <img
      className="d-block w-100"
      src="./pic/p3.jpg"
      alt="Third slide"
    />

<Carousel.Caption>
      <h3 style={{color:"maroon",fontWeight:"800"}}>All Service At Your Doorstep</h3>
      <p style={{color:"darkgrey",fontWeight:"800"}}>Skill hub is leading Plateform in the world</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

)
    }

}