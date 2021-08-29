import React from "react";
import { Image } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";



class oneCollection extends React.Component {
  render() {
    return (
      <>
 <Image src="holder.js/171x180" rounded />
<p>{this.props.collName}</p>
      </>

    );
  }
}

export default oneCollection;