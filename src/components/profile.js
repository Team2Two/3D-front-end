import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import OneCollection from "./oneCollection";
import "./CSS/profile.css";
import { Card } from "react-bootstrap/";

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
      resultforeverycollectin:[]

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


    // let modelInfo = {
    //   // title: this.state.selectedResult.modelName,
    //   // modelUrl: this.state.selectedResult.modelUrl,
    //   email: user.email,
    //   // collectionName: event.target.collection.value

    // }

    // console.log(event.target.collection.value);
    // console.log(modelInfo);
    // console.log(modelInfo);
    let collectionData = await axios.get(`${process.env.REACT_APP_SERVER}/getcollection?email=${this.state.email}`)
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

  };
  readcollection=(event)=>{
   event.preventDefault()
   let arrfordata=[]
   let collectinselect=event.target.collectin.value
   console.log(collectinselect)
   let results = this.state.collectionData.map((value) => {
    if (collectinselect==value.collectionOfModels) {arrfordata.push(value)}
    return (value)
  });
  this.setState({
    resultforeverycollectin: arrfordata,
  });
console.log(this.state.resultforeverycollectin.thumbnail)
  }

  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
      <>
        {isAuthenticated ? (
          <>
            <div className="info">
              <img className="userProfileImg" src={user.picture} alt={user.name} />
              
              <h2>{user.name}</h2>
              
             
            </div>

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
        {this.state.collectionnamearr.map(item => {
          return (
         <form onSubmit={this.readcollection} >
       
           <input type="image"  src="https://www.computerhope.com/jargon/f/folder.png" alt="Submit"/>
          {/* < label  value={item}>{item}</label> */}
          <input type="submit"  value={item}  name='collectin'/>
  
          </form>


          )
        })}


{this.state.resultforeverycollectin.map(item => {
          return (
            <Card style={{ width: "25rem" }}  >
            <Card.Img variant="top" src={item.thumbnail}/>
            <Card.Text>
             {item.title}
             </Card.Text>
            {/* <Button variant="primary" onClick={()=>{this.props.showData(this.props.title)}} >Show</Button> */}
            </Card>


          )
        })}


      </>
    );
  }
}

export default withAuth0(Profile);
