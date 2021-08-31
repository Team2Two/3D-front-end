import React, { Component } from "react";
import {  Carousel } from "react-bootstrap/";
export class carso extends Component {
  render() {
    return (
      <div>
        <Carousel 
        pause={false}
          style={{ textAlign: "center", }}
        >
          <Carousel.Item>
            <span><q>Search for 3D models from a variety of options</q></span>
          </Carousel.Item>
          <Carousel.Item>
            <span><q>Expand your collection by adding more models</q></span>
          </Carousel.Item>
          <Carousel.Item>
            <span><q>
              Support your ideas by some cool 3D models that will inspire your
              audience
              </q> </span>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default carso;
