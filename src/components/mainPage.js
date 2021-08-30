import React, { Component } from "react";
import {
  Form,
  Modal,
  Button,
  Accordion,
  FloatingLabel,
} from "react-bootstrap/";
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
      key: "",
    };
  }
  /////////////////////////////////////////////////////////////////////////////////
  getData = async (e) => {
    e.preventDefault();

    // this.setState({
    //   searchResults: [],

    // });

    await this.setState({
      searchInput: e.target.search.value,
    });
    // http://localhost:4000/models?title=car
    let requestURL = `http://localhost:4000/models?title=${this.state.searchInput}`;

    let retrivedURL = await axios.get(requestURL);
    console.log("here here, ", retrivedURL.data);

    this.setState({
      searchResults: retrivedURL.data,
      showData: true,
    });
    console.log(this.state.searchResults);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////

  creatCollection = (email, collectionName) => {};

  //////////////////////////////////////////////////////////////////////////////////////////////
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

  //////////////////////////////////////////////////////////////////////////////////////

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    console.log(this.state.searchResults);

    return (
      <div>
        <Carso />

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
              return (
                <OneResult
                  key={i}
                  Thumbnail={item.thumbnail}
                  title={item.modelName}
                  showData={this.showModal}
                />
              );
            })}
        </div>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Title>{this.state.selectedResult.modelName}</Modal.Title>

          <iframe src={this.state.selectedResult.modelUrl} title="lol"></iframe>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Button variant="primary">Add</Button>
              </Accordion.Header>
              <Accordion.Body>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Works with selects"
                >
                  <Form.Select aria-label="Choose Collection">
                   
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>

                <Form>
                  <Form.Control
                    type="text"
                    name="collectionName"
                    placeholder="Collection Name"
                  />
                </Form>
                <Button variant="secondary" type="submit">
                  Create
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Button variant="danger" onClick={this.handleClose}>
            Close
          </Button>
        </Modal>
      </div>
    );
  }
}

export default mainPage;
