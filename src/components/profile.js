import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import OneCollection from "./oneCollection";
import "./CSS/profile.css";
import { Card, Button, Modal, Form } from "react-bootstrap/";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      collections: [],
      showData: false,
      Alert: "",
      collectionnamearr: [],
      collectionData: [],
      resultforeverycollectin: [],
      show: false,
      passpramstate: {},
      addnewwcollecction: [],
      msg: "",
      nameofselectcoolectin:'',
    };
  }

  componentDidMount = async () => {
    const { user, isAuthenticated } = this.props.auth0;

    isAuthenticated
      ? await this.setState({
          email: user.email,
        })
      : await this.setState({
          email: "",
        });

    let collectionData = await axios.get(
      `${process.env.REACT_APP_SERVER1}/getcollection?email=${this.state.email}`
    );
    console.log("jhjkjhjh");
    this.setState({
      collectionData: collectionData.data,
    });
    console.log(this.state.collectionData);
    let nameofcolectiom = [];
    let results = this.state.collectionData.map((result) => {
      if (!nameofcolectiom.includes(result.collectionOfModels)) {
        nameofcolectiom.push(result.collectionOfModels);
      } else {
        //// here

        this.setState({
          msg: "Empty",
        });
      }
      return nameofcolectiom;
    });
    this.setState({
      collectionnamearr: nameofcolectiom,
    });
    console.log(nameofcolectiom);
    console.log(this.state.collectionnamearr);
  };
  readcollection = (event) => {
    event.preventDefault();
    let arrfordata = [];
    let collectinselect = event.target.collectin.value;
    console.log(collectinselect);
    let results = this.state.collectionData.map((value) => {
      if (collectinselect == value.collectionOfModels) {
        arrfordata.push(value);
      }
      return value;
    });
    this.setState({
      resultforeverycollectin: arrfordata,
    });
    console.log(this.state.resultforeverycollectin.thumbnail);
  };

  readcollection = async (event) => {
    console.log("hello");
    event.preventDefault();
    let arrfordata = [];
    let arrfordata2 = [{ title: "" }];
    let collectinselect = event.target.collectin.value;
    let modelData = await axios.get(
      `${process.env.REACT_APP_SERVER1}/getcollection?email=${this.state.email}`
    );
    await this.setState({
      collectionData: modelData.data,
    });
    console.log(collectinselect);
    let results = this.state.collectionData.map((value) => {
      if (collectinselect == value.collectionOfModels) {
        arrfordata.push(value);
      }
      return value;
    });
    console.log(arrfordata);
    console.log(this.state.collectionData);
    await this.setState({
      nameofselectcoolectin:collectinselect,
      resultforeverycollectin: arrfordata,
    });
  };

  handleshow = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  passpram = (item) => {
    this.setState({
      passpramstate: item,
    });
    this.handleshow();

    console.log(this.state.passpramstate);
  };

  deletemodel = async (modelID2, collection) => {
    axios
      .delete(
        `${process.env.REACT_APP_SERVER1}/deletemodels/${modelID2}?email=${this.state.email}&collection=${collection}`
      )
      .then((data) => {
        console.log(data);
      });
    let modelData = await axios.get(
      `${process.env.REACT_APP_SERVER1}/usercollection?email=${this.state.email}&collection=${collection}`
    );
    this.setState({
      resultforeverycollectin: modelData.data,
    });
  };

  createnewcollection = async (event) => {
    console.log("ffffffffffffffffffffffffffffffffffffffffffffff");
    event.preventDefault();
    const user = this.props.auth0;
    let modelInfo = {
      // title: this.state.selectedResult.modelName,
      // modelUrl: this.state.selectedResult.modelUrl,
      email: this.state.email,
      collectionName: event.target.collectionName.value,
    };
    let modelData = await axios.post(
      `${process.env.REACT_APP_SERVER1}/addmodels`,
      modelInfo
    );

    let nameofcolectiom = [];
    let results = modelData.data.map((result) => {
      if (!nameofcolectiom.includes(result.collectionOfModels)) {
        nameofcolectiom.push(result.collectionOfModels);
      }
      return nameofcolectiom;
    });
    this.setState({
      collectionnamearr: nameofcolectiom,
    });
  };

  ///////////////////////////////////////////////////////////////////////////
  deletecollection = async (collection) => {
    console.log("hi");
    let deletedcollection = await axios.delete(
      `${process.env.REACT_APP_SERVER1}/deletecollections/${collection}?email=${this.state.email}`
    );
    console.log("hello");
    console.log(deletedcollection.data);
    let nameofcolectiom = [];
    let results = deletedcollection.data.map((result) => {
      if (!nameofcolectiom.includes(result.collectionOfModels)) {
        nameofcolectiom.push(result.collectionOfModels);
      }
      return nameofcolectiom;
    });
    this.setState({
      collectionnamearr: nameofcolectiom,
    });
  };

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <div className="gene">
        {isAuthenticated ? (
          <>
          <div className="info-cont">
            <div className="info">
              <img
                className="userProfileImg"
                src={user.picture}
                alt={user.name}
              />

              <h2>{user.name}</h2>
            </div>
            </div>
            
            <div className="form-container">
              <Form className="form2" onSubmit={this.createnewcollection}>
                <Form.Control
                  type="text"
                  name="collectionName"
                  placeholder="Create new collection"
                  required
                />
                <Button variant="primary" type="submit">
                  Create
                </Button>
                {/* <Button variant="primary" onClick={this.props.addCollections} type="submit">
                  Save
                </Button> */}
              </Form>
              
            </div>
            <div className="folders">
              {this.state.collectionnamearr.map((item) => {
                return (
                  <form onSubmit={this.readcollection}>
                    <input
                      width="105px"
                      type="image"
                      src="https://www.iconpacks.net/icons/2/free-folder-icon-1484-thumb.png"
                      alt="Submit"
                    />
                    {/* <Button className="circlestuff" variant="danger" onClick={()=>{this.deletecollection(`${item}`)}} >X</Button> */}
                    <img
                      className="circlestuff"
                      onClick={() => {
                        this.deletecollection(`${item}`);
                      }}
                      src="https://img.icons8.com/flat-round/452/delete-sign.png"
                      alt="delete"
                    ></img>
                    <input type="submit" value={item} name="collectin" />
                  </form>
                );
              })}
            </div>
            <hr style={{ width: "70%", margin: "2rem auto" }}></hr>
            <div style={{margin: "2rem auto",  width: "fit-content", fontSize: "1.5pc", fontWeight: "bolder"}}>{this.state.nameofselectcoolectin}</div>
            <div className="folder-models">
              <div className="one-model">
                <div></div>
                {/* {this.state.resultforeverycollectin.map((item) => { */}
                {this.state.resultforeverycollectin.length !== 1 ? (
                  this.state.resultforeverycollectin.map((item) => {
                    if (!item.title == "") {
                      return (
                        <Card>
                          <div
                            onClick={() => {
                              this.passpram(item);
                            }}
                            className="cardImage"
                            style={{
                              backgroundImage: `url(${item.thumbnail})`,
                            }}
                          ></div>
                          {/* <Card.Img
                      
                      variant="top"
                      src={item.thumbnail}
                    /> */}
                          <Card.Text style={{ marginTop: "1rem" }}>
                          {item.title}

                          </Card.Text>

                          <img
                            className="circlestuff2"
                            onClick={() => {
                              this.deletemodel(
                                item._id,
                                item.collectionOfModels
                              );
                            }}
                            src="https://img.icons8.com/flat-round/452/delete-sign.png"
                            alt="delete"
                          ></img>
                          {/* <Button
                          variant="danger"
                          onClick={() => {
                            this.deletemodel(item._id, item.collectionOfModels);
                          }}
                        >
                          Delete
                        </Button> */}
                        </Card>
                      );
                    }
                  })
                ) : (
                  <div>
                    <p>this folder is empty</p>
                  </div>
                )}
              </div>
            </div>

            <Modal
              dialogClassName="my-modal"
              show={this.state.show}
              onHide={this.handleClose}
            >
              <Modal.Title>{this.state.passpramstate.title}</Modal.Title>
              <iframe
                src={this.state.passpramstate.modelCollection}
                title="lol"
              ></iframe>
              <Button variant="danger" onClick={this.handleClose}>
                Close
              </Button>
            </Modal>

            <div className="rndrcoll">
              {this.state.collections.map((item, i) => {
                return (
                  <>
                    <OneCollection key={i} collName={item.collectionType} />;
                  </>
                );
              })}
            </div>
          </>
        ) : (
          <div className="err">
            <img
              src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
              alt="img"
            ></img>
            <p>Please log in to show data</p>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth0(Profile);
