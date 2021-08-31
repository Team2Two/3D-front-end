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
import AddCollection from "./AddCollection";
import Login from './login';
import { withAuth0 } from '@auth0/auth0-react';


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
      collectionData: [],
      collectionnamearr: [],
      addnewwcollecction: [],
      showprofile:false
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
    let requestURL = `http://localhost:3001/models?title=${this.state.searchInput}`;

    let retrivedURL = await axios.get(requestURL);
    // console.log("here here, ", retrivedURL.data);

    this.setState({
      searchResults: retrivedURL.data,
      showData: true,
    });
    // console.log(this.state.searchResults);
  };
  /////////////////////////////////////////////////////////////////////////////////////////////

  // creatCollection = (email, collectionName) => {

  // };

  //////////////////////////////////////////////////////////////////////////////////////////////
  showModal = async (title) => {
    // let targetKey = event.target.
    let results = this.state.searchResults.find((result) => {
      if (result.modelName === title) {
        return result;
      }
      // console.log(key);
    });
    // console.log(results);

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

  //------------------------------------------------------------------------------------------------------
  addcollectiontoselect = async (event) => {
    event.preventDefault();

    const user = this.props.auth0;
    // console.log(user);
    // console.log('hello');

    let modelInfo = {
      // title: this.state.selectedResult.modelName,
      // modelUrl: this.state.selectedResult.modelUrl,
      email: user.user.email,
      // collectionName: event.target.collection.value

    }

    // console.log(event.target.collection.value);
    // console.log(modelInfo);
    // console.log(modelInfo);
    let collectionData = await axios.get(`http://localhost:3001/getcollection?email=${modelInfo.email}`)
    console.log('jhjkjhjh')
    this.setState({
      collectionData: collectionData.data,
    });
    console.log(this.state.collectionData)
    let nameofcolectiom = []
    let results = this.state.collectionData.map((result) => {

      if (!nameofcolectiom.includes(result.collectionOfModels)) { nameofcolectiom.push(result.collectionOfModels) }
      return (nameofcolectiom)
    });
    this.setState({
      collectionnamearr: nameofcolectiom,
    });
    console.log(nameofcolectiom);
    console.log(this.state.collectionnamearr)


    //  let modelData = await axios.post(`${process.env.REACT_APP_SERVER}/addmodels`,modelInfo);

    //   this.setState({
    //    books: bookData.data,
    //  });
  }

  //-------------------------------------------------------------------------------------------------
  createnewcollection = async (event) => {
    console.log('ffffffffffffffffffffffffffffffffffffffffffffff')
    event.preventDefault();
    const user = this.props.auth0;
    let modelInfo = {
      // title: this.state.selectedResult.modelName,
      // modelUrl: this.state.selectedResult.modelUrl,
      email: user.user.email,
      collectionName: event.target.collectionName.value

    }
    let modelData = await axios.post(`http://localhost:3001/addmodels`, modelInfo);

    this.setState({
      addnewwcollecction: modelData.data,
    });

    console.log(this.state.addnewwcollecction)
  }
    //------------------------------------------------------------------------------------------------------
    addmodels = async (event) => {
      console.log('ggggggggggggggggggggggggg')
      event.preventDefault();
      const user = this.props.auth0;
      let modelInfo = {
        title: this.state.selectedResult.modelName,
        modelUrl: this.state.selectedResult.modelUrl,
        email: user.user.email,
        collectionName: event.target.collection.value,
        thumbnail:this.state.selectedResult.thumbnail

      }
      console.log(modelInfo)
      let modelData = await axios.post(`http://localhost:3001/addmodels`, modelInfo);

      // this.setState({
      //   addnewwcollecction: modelData.data,


      // });

    }

    // getUserCollections = async () => {

    // }
    render() {
      // console.log(this.state.searchResults);
      const { user, isAuthenticated } = this.props.auth0;

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
            <Button variant="primary" onClick={this.addcollectiontoselect}>Add</Button>
            {isAuthenticated ? <AddCollection
              addmodels={this.addmodels} collectionnamearr={this.state.collectionnamearr} createnewcollection={this.createnewcollection} /> : <Login />}
            <Button variant="danger" onClick={this.handleClose}>
              Close
            </Button>
          </Modal>
         
       
        
        
        </div>
      );
    }
  }

  export default withAuth0(mainPage);
