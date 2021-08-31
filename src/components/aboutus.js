import React, { Component } from "react";
import "./CSS/aboutus.css";
class Aboutus extends Component {
  render() {
    return (
      <div className="general">
        <div className="idk">
        <span className="brie">The idea behind this project is to give access to users to view 3D models and save them in collections, it helps designers to store references, it also helps students and any others who are interested in printing 3D models.</span></div>
     <span className="pa">Meet the team Behind this work</span>
       <div className="container">
  <div className="box">
    <img src="https://ca.slack-edge.com/TNGRRLUMA-U022P8BQS7N-4c20e30a7292-512"
    alt=""/>
    <span>Maiada Ibrahim </span>
  </div>
  <div className="box">
    <img src="https://ca.slack-edge.com/TNGRRLUMA-U023KJ3V8DA-006083e88e0f-512"alt=""/>
    <span>Emam Shararah</span>
  </div>
  <div className="box">
    <img src="https://ca.slack-edge.com/TNGRRLUMA-U023AB12F53-653c8d17581b-512"alt=""/>
    <span>Tasneem Al-Absi</span>
  </div>
  <div className="box">
    <img src="https://ca.slack-edge.com/TNGRRLUMA-U01P6FYJH2T-56c3658bd276-512"alt=""/>
    <span>Mansour Albatran</span>
  </div>
</div>
</div>
    );
  }
}


export default Aboutus;
