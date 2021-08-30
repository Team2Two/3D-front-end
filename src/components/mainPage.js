import React, { Component } from "react";
import { Form, Modal, Button,Carousel } from "react-bootstrap/";
import Carso from "./carso";
import axios from "axios";
import OneResult from "./oneResult";
// import LoginButton from './loginButton'
import "./CSS/mainPage.css";


export class mainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      searchResults: [],
      searchInput: "",
      showData: false,
      Alert: "",
      show: false,
      selectedResult: [],
      key:''
    };
  }

  getData = async (e) => {
    e.preventDefault();

    // this.setState({
    //   searchResults: [],
      
    // });

    await this.setState({
      searchInput: e.target.search.value,
    });
    // http://localhost:4000/models?title=car
    let requestURL = `http://localhost:3001/models?title=${this.state.searchInput}`;


    let retrivedURL = await axios.get(requestURL);
console.log("here here, ", retrivedURL.data);

    this.setState({
      searchResults: retrivedURL.data,
      showData: true,
    });
    console.log(this.state.searchResults);
  };

  showModal = async (title) => {
    // let targetKey = event.target.
    let results = this.state.searchResults.find((result) => {
      if (result.modelName === title) {
        return result;
      }
      // console.log(key);
    });
    console.log(results);

    
    await this.setState({
     selectedResult: results,
      show: true,
    });
    console.log(this.state.selectedResults);
  };

  ///////////////////////////////////////////

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    console.log(this.state.searchResults);

    return (
      <div>
        
          <Carso/>
        
          <Form onSubmit={this.getData}>                                                       
            <Form.Control
              size="lg"
              type="text"
              name="search"
              placeholder="Search Models"
            />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
          
          


          <div className="results">
            {this.state.showData &&
              this.state.searchResults.map((item, i) => {
                return <OneResult 
                key={i} 
                Thumbnail={item.thumbnail}
                title={item.modelName}
                showData={this.showModal}
                />;
              })}
          </div>





          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Title>{this.state.selectedResult.modelName}</Modal.Title>

            <iframe src={this.state.selectedResult.modelUrl} title="lol"></iframe>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal>
        
      </div>
    );
  }
}

export default mainPage;
