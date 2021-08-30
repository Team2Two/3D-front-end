import React from "react";
import { Card } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class OneResult extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "25rem" }} onClick>
          <div className="cardImage" style={{backgroundImage: `url(${this.props.Thumbnail})`}}></div>
          {/* <Card.Img variant="top" src={this.props.Thumbnail} /> */}
          <Card.Text>
      {this.props.title}
    </Card.Text>
        </Card>
      </>
    );
  }
}

export default OneResult;
