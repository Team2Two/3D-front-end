import React from "react";
import { Card } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class OneResult extends React.Component {
  render() {
    console.log(this.props.key);
    return (
      <>
        <Card style={{ width: "25rem" }}  onClick={()=>{this.props.showData(this.props.title)}}>
          <Card.Img variant="top" src={this.props.Thumbnail}/>
          <Card.Text>
      {this.props.title}
    </Card.Text>
        </Card>
      </>
    );
  }
}

export default OneResult;
