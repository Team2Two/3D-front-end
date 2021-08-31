import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import OneCollection from "./oneCollection";
import "./CSS/profile.css";
import { Card, Button,Modal,Form } from "react-bootstrap/";

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
      resultforeverycollectin:[],
      show:false,
      passpramstate:{},
      addnewwcollecction: [],


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
    let collectionData = await axios.get(`${process.env.REACT_APP_SERVER1}/getcollection?email=${this.state.email}`)
    console.log('jhjkjhjh')
    this.setState({
      collectionData: collectionData.data,
    });
    console.log(this.state.collectionData);
    let nameofcolectiom = [];
    let results = this.state.collectionData.map((result) => {
      if (!nameofcolectiom.includes(result.collectionOfModels)) {
        nameofcolectiom.push(result.collectionOfModels);
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
  readcollection=(event)=>{
   event.preventDefault()
   let arrfordata=[]
   let collectinselect=event.target.collectin.value
   console.log(collectinselect)
   let results = this.state.collectionData.map((value) => {
    if (collectinselect==value.collectionOfModels) {arrfordata.push(value)}
    return (arrfordata)
  });
  this.setState({
    resultforeverycollectin: arrfordata,
  });
console.log(results);
console.log(arrfordata);
  }

  handleshow= () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
passpram=(item)=>{
  this.setState({
    passpramstate: item,
  });
 this.handleshow()


 console.log(this.state.passpramstate);
}
deletemodel = (modelID2,collection) =>{

  // http://localhost:3001/deletemodels/612e39f5ebe18560634d139e?email=maiada.ibrahim.27@gmail.com&collection=hhhhhhhhhhh
   axios.delete(`${process.env.REACT_APP_SERVER1}/deletemodels/${modelID2}?email=${this.state.email}&collection=${collection}`).then((data)=>{
 console.log(data);

  this.setState({
   resultforeverycollectin: data.data
  })

     
   });
  


}

createnewcollection = async (event) => {
  console.log('ffffffffffffffffffffffffffffffffffffffffffffff')
  event.preventDefault();
  const user = this.props.auth0;
  let modelInfo = {
    // title: this.state.selectedResult.modelName,
    // modelUrl: this.state.selectedResult.modelUrl,
    email:this.state.email,
    collectionName: event.target.collectionName.value

  }
  let modelData = await axios.post(`${process.env.REACT_APP_SERVER1}/addmodels`, modelInfo);

  // this.setState({
  //   addnewwcollecction: modelData.data,
  // });

  // console.log(this.state.addnewwcollecction)
  // this.setState({
  //   collectionnamearr: nameofcolectiom,
  // });
  // console.log(this.state.collectionnamearr);
  let nameofcolectiom =[];
  let results = modelData.data.map((result) => {

    if (!nameofcolectiom.includes(result.collectionOfModels)) { nameofcolectiom.push(result.collectionOfModels) }
    return (nameofcolectiom)
  });
  this.setState({
    collectionnamearr: nameofcolectiom,
  });

}

deletecollection = async (collection) =>{

console.log('hi');
  let deletedcollection= await axios.delete(`${process.env.REACT_APP_SERVER1}/deletecollections/${collection}?email=${this.state.email}`)
    console.log('hello');
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


    
 
 


}




  render() {
    const { user, isAuthenticated } = this.props.auth0;

    return (
     
      <div className="gene">
        {isAuthenticated ? (
          <>
            <div className="info">
              <img
                className="userProfileImg"
                src={user.picture}
                alt={user.name}
              />

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
           <Button onClick={()=>{this.deletecollection(`${item}`)}} >Delete</Button>
          {/* < label  value={item}>{item}</label> */}
          <input type="submit"  value={item}  name='collectin'/>
  
          </form>


          )
        })}
         <Form className="form2" onSubmit={this.createnewcollection}>
              <span>Or you can create a new collection:</span>
                <Form.Control
                  type="text"
                  name="collectionName"
                  placeholder='"Collection Name"'
                />
                <Button variant="primary"  type="submit">
                  Create
                </Button>
                {/* <Button variant="primary" onClick={this.props.addCollections} type="submit">
                  Save
                </Button> */}
              </Form>

         {this.state.resultforeverycollectin.map(item => {
           if (!item.title==""){
           return (
            <Card              style={{ width: "25rem" }}  >
            <Card.Img          onClick={()=>{this.passpram(item)} }              variant="top" src={item.thumbnail}/>
            <Card.Text>
             {item.title}
             </Card.Text>
            <Button variant="primary" onClick={()=>{this.deletemodel(item._id,item.collectionOfModels)}} >Delete</Button>
            </Card>
            


          )}
        })}
          
            <Modal show={this.state.show} onHide={this.handleClose}>

            <Modal.Title>{this.state.passpramstate.title}</Modal.Title>
            <iframe src={this.state.passpramstate.modelCollection} title="lol"></iframe>
            <Button variant="danger" onClick={this.handleClose}>
              Close
            </Button>
          </Modal>
         
</div>




      
    );
  }
}

export default withAuth0(Profile);