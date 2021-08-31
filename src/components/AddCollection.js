import React, { Component } from "react";
import { Form, Button, Accordion, FloatingLabel } from "react-bootstrap/";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";

export class AddCollection extends Component {
  // constructor(props){
  //     super (props);

  // }

  render() {
    return (
      <div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header  onClick={this.props.addCollections}>Add</Accordion.Header>
            <Accordion.Body>
              <div className="acoElm">
              <Form className="form1" onSubmit={this.props.addmodels}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Choose a Collection"
                  className="mb-3"
                >
                  <Form.Select aria-label="Choose Collection" name="collection">
                    {this.props.collectionnamearr.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </Form.Select>
                </FloatingLabel>
                <Button type="submit">Add</Button>
              </Form>

              <Form className="form2" onSubmit={this.props.createnewcollection}>
              <span>Or you can create a new collection:</span>
                <Form.Control
                  type="text"
                  name="collectionName"
                  placeholder='"Collection Name"'
                />
                <Button variant="primary"  type="submit">
                  Create
                </Button>
                {/* <Button variant="primary" onClick={this.props.addCollections} type="submit">
                  Save
                </Button> */}
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