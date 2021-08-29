import React from "react";
import { Card } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class OneResult extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }} onClick>
          <Card.Img variant="top" src={this.props.Thumbnail} />
        </Card>
      </>
    );
  }
}

export default OneResult;
