import React from "react";
import { Card, Button } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

class OneResult extends React.Component {
  render() {
    
    return (
      <>
        <Card style={{ width: "22rem" }}  >
        <div className="cardImage" style={{backgroundImage: `url(${this.props.Thumbnail})`}}></div>
          {/* <Card.Img variant="top" src={this.props.Thumbnail}/> */}
          <Card.Text style={{marginTop: "1rem"}}>
      {this.props.title}
    </Card.Text>
    <Button variant="primary" className="showBtn" onClick={()=>{this.props.showData(this.props.title)}} >Render</Button>
        </Card> 
      </>
    );
  }
}

export default OneResult;
