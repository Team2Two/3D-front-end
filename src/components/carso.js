import React, { Component } from "react";
import {  Carousel } from "react-bootstrap/";
export class carso extends Component {
  render() {
    return (
      <div>
        <Carousel
          style={{ textAlign: "center", }}
        >
          <Carousel.Item>
            <span>Search for 3D models from a variety of options</span>
          </Carousel.Item>
          <Carousel.Item>
            <span>Expand your collection by adding more models</span>
          </Carousel.Item>
          <Carousel.Item>
            <span>
              Support your ideas with some cool 3D models that will inspire your
              audience
            </span>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default carso;
