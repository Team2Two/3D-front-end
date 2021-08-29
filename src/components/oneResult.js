import React from "react";
import { Card } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class OneResult extends React.Component {
  render() {
    
    return (
      <>
        <Card style={{ width: "25rem" }} onClick>
          <Card.Img variant="top" src={this.props.Thumbnail} onClick={this.props.showData}/>
          <Card.Text>
      {this.props.title}
    </Card.Text>
        </Card>
      </>
    );
  }
}

export default OneResult;
