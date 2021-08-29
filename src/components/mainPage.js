import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap/";
import axios from "axios";
import OneResult from "./oneResult";
// import LoginButton from './loginButton'

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
    };
  }

  getLocation = async (e) => {
    e.preventDefault();

    const { user, isAuthenticated } = this.props.auth0;

    await this.setState({
      email: user.email,
    });

    await this.setState({
      searchInput: e.target.search.value,
    });

    let requestURL = ``;

    let retrivedURL = await axios.get(requestURL);

    this.setState({
      searchResults: retrivedURL.data,
      showData: true,
    });
  };

  showModal = async (id) => {
    let results = this.state.searchResults.find((result) => {
      if (result._id === id) {
        return result;
      }
    });

    await this.setState({
      searchResults: results,
      show: true,
    });
  };

  ///////////////////////////////////////////

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div>
          {/* <LoginButton/> */}
        <>
          <Form>
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
                return <OneResult key={i} Thumbnail={item.thumbnail} />;
              })}
          </div>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Title>{this.state.searchInput}</Modal.Title>
            <iframe src={this.state.searchResults.model} title="lol"></iframe>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal>
        </>
      </div>
    );
  }
}

export default mainPage;
