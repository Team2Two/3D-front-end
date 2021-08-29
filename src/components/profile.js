import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
// import OneCollection from "./oneCollection";

class Profile extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: "",
  //     collections: [],
  //     showData: false,
  //     Alert: "",
  //   };
  // }

  // getData = async () => {


  //   // const { user, isAuthenticated } = this.props.auth0;

  //   // await this.setState({
  //   //   email: user.email,
  //   // });


  //   let requestURL = ``;

  //   let retrivedURL = await axios.get(requestURL);

  //   this.setState({
  //     collections: retrivedURL.data,
  //     showData: true,
  //   });
  // };

  render() {
    const { user, isAuthenticated  } = this.props.auth0;

    return (
     
      
      isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )
          
     
      
      // <div>
          //   {this.state.showData &&
          //     this.state.collections.map((item, i) => {
          //       return <OneCollection key={i} collName={item} />;
          //     })}
          // </div>
        
      
    );
  }
}

export default withAuth0(Profile);
