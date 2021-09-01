import React from "react";
import { Card, Button } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCube  } from '@fortawesome/free-solid-svg-icons'
class OneResult extends React.Component {
  render() {
    
    return (
      <>
        <Card style={{ width: "22rem" }}  >
        <div className="cardImage" style={{backgroundImage: `url(${this.props.Thumbnail})`}}></div>
          {/* <Card.Img variant="top" src={this.props.Thumbnail}/> */}
          <Card.Text style={{marginTop: "1rem", }}>
      {this.props.title}
    </Card.Text>
    <Button variant="primary" className="showBtn" onClick={()=>{this.props.showData(this.props.title)}} > <FontAwesomeIcon icon={faCube } /> &nbsp; Render</Button>
        </Card> 
      </>
    );
  }
}

export default OneResult;
