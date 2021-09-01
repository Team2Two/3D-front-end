import React, { Component } from "react";
import { Form, Button, Accordion, FloatingLabel } from "react-bootstrap/";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
export class AddCollection extends Component {
  
  render() {
    return (
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header  onClick={this.props.addCollections}>
             <span className="omg" style={{fontSize: "1.5pc", }}> Add</span>
            </Accordion.Header>
            <Accordion.Body>
              <div className="acoElm">
                <Form className="form1" onSubmit={this.props.addmodels}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Choose a Collection from your profile"
                    className="mb-3"
                  >
                    <Form.Select
                      onClick={this.props.addCollections}
                      aria-label="Choose Collection"
                      name="collection"
                    >
                      {this.props.collectionnamearr.map((item) => {
                        return <option value={item}>{item}</option>;
                      })}
                    </Form.Select>
                  </FloatingLabel>
                  <Button type="submit">Add</Button>
                </Form>
                <p style={{width: "20rem", position: "absolute", left: "25rem", top: "2rem"}}>Or you can create a new collection</p>
                <Form
                  className="form3"
                  onSubmit={this.props.createnewcollection}
                  
                >
                 
                  
                  <Form.Control
                    type="text"
                    name="NAME"
                    placeholder="Create a new collection"
                    required
                  />
                  <Button variant="primary"  type="submit">
                    Create
                  </Button>
                </Form>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default AddCollection;
