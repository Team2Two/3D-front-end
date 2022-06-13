import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap/";
import Carso from "./carso";
import axios from "axios";
import OneResult from "./oneResult";
import AddCollection from "./AddCollection";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from "./loginButton";
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
      collectionData: [],
      collectionnamearr: [],
      addnewwcollecction: [],
      showprofile: false,
    };
  }

  componentDidMount = async () => {
    let requestURL = `${process.env.REACT_APP_SERVER}/models?title=game`;

    let retrivedURL = await axios.get(requestURL);

    this.setState({
      searchResults: retrivedURL.data,
      showData: true,
    });
  };

  /////////////////////////////////////////////////////////////////////////////////
  getData = async (e) => {
    e.preventDefault();


    await this.setState({
      searchInput: e.target.search.value,
    });
    
    let requestURL = `${process.env.REACT_APP_SERVER1}/models?title=${this.state.searchInput}`;

    let retrivedURL = await axios.get(requestURL);
    
    this.setState({
      searchResults: retrivedURL.data,
      showData: true,
    });
    
  };
  /////////////////////////////////////////////////////////////////////////////////////////////

  showModal = async (title) => {
    // let targetKey = event.target.
    let results = this.state.searchResults.find((result) => {
      if (result.modelName === title) {
        return result;
      }
      
    });
    

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
    

    let modelInfo = {
      
      email: user.user.email,
      
    };

   
    let collectionData = await axios.get(
      `${process.env.REACT_APP_SERVER1}/getcollection?email=${modelInfo.email}`
    );
    console.log("jhjkjhjh");
    this.setState({
      collectionData: collectionData.data,
    });
    console.dir(this.state.collectionData);
    let nameofcolectiom = [];
    let results = this.state.collectionData.map((result) => {
      if (!nameofcolectiom.includes(result.collectionOfModels)) {
        nameofcolectiom.push(result.collectionOfModels);
      }
      return nameofcolectiom;
    });
    this.setState({
      collectionnamearr: nameofcolectiom   // nameofcolectiom  (I changed this)
    });
    // console.dir(results);
    // console.log(this.state.collectionnamearr); (I commented this)

  };

  //-------------------------------------------------------------------------------------------------
  createnewcollection = async (event) => {
    console.log("ffffffffffffffffffffffffffffffffffffffffffffff");
    event.preventDefault();
    const user = this.props.auth0;
    let modelInfo = {
      title:"",
      // modelUrl: this.state.selectedResult.modelUrl,
      email: user.user.email,
      collectionName: event.target.collectionName.value,
      // thumbnail:this.state.selectedResult.thumbnail

    }
    let modelInfo2 = {
      title: this.state.selectedResult.modelName,
      modelUrl: this.state.selectedResult.modelUrl,
      email: user.user.email,
      collectionName: event.target.collectionName.value,
      thumbnail:this.state.selectedResult.thumbnail

    }
    let modelData = await axios.post(`${process.env.REACT_APP_SERVER1}/addmodels`, modelInfo);

    // this.setState({
    //   addnewwcollecction: modelData.data,
    //   show: false,
    // });

    let modelData2 = await axios.post(`${process.env.REACT_APP_SERVER1}/addmodels`, modelInfo2);
    
   
  }
    //------------------------------------------------------------------------------------------------------
    
  addmodels = async (event) => {
    console.log("ggggggggggggggggggggggggg");
    event.preventDefault();
    const user = this.props.auth0;
    let modelInfo = {
      title: this.state.selectedResult.modelName,
      modelUrl: this.state.selectedResult.modelUrl,
      email: user.user.email,
      collectionName: event.target.collection.value,
      thumbnail: this.state.selectedResult.thumbnail,
    };
    console.log(modelInfo);
    let modelData = await axios.post(
      `${process.env.REACT_APP_SERVER1}/addmodels`,
      modelInfo
    );

    

    this.setState({
    
      show: false,
    });



  };

  
  render() {
    // console.log(this.state.searchResults);
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <div>
        ]
        <div className="cover">
          <Carso />

          <Form className="form0" onSubmit={this.getData}>
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
        </div>
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
        <Modal
          dialogClassName="my-modal"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Modal.Title>{this.state.selectedResult.modelName}</Modal.Title>

          <iframe src={this.state.selectedResult.modelUrl} title="lol"></iframe>
         
          {isAuthenticated ? (
            <AddCollection
              addCollections={this.addcollectiontoselect}
              addmodels={this.addmodels}
              collectionnamearr={this.state.collectionnamearr}
              createnewcollection={this.createnewcollection}
              
            />
          ) : (
            <div className="warn">
              <span>
                Please log in so you can save models to your collections <LoginButton />
              </span>
              
            </div>
          )}
          <Button className="close" variant="danger" onClick={this.handleClose}>
            Close
          </Button>
        </Modal>
        

      </div>
    );
  }
}

export default withAuth0(mainPage);
