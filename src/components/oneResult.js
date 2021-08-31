import React from "react";
import { Card, Button } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class OneResult extends React.Component {
  render() {
    // console.log(this.props.key);
    return (
      <>
        <Card style={{ width: "25rem" }}  >
          <Card.Img variant="top" src={this.props.Thumbnail}/>
          <Card.Text>
      {this.props.title}
    </Card.Text>
    <Button variant="primary" onClick={()=>{this.props.showData(this.props.title)}} >Show</Button>
        </Card>
      </>
    );
  }
}

export default OneResult;
