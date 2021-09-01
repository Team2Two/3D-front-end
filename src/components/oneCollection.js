import React from "react";
import { Image } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";



class oneCollection extends React.Component {
  render() {
    return (
      <>
 <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/OneDrive_Folder_Icon.svg/2048px-OneDrive_Folder_Icon.svg.png" rounded />
<p>{this.props.collName}</p>
      </>

    );
  }
}

export default oneCollection;