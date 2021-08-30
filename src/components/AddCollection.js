import React, { Component } from 'react';
import {
    Form,
    Modal,
    Button,
    Accordion,
    FloatingLabel,
  } from "react-bootstrap/";
  import axios from "axios";
  import { withAuth0 } from '@auth0/auth0-react';
  

export class AddCollection extends Component {
    // constructor(props){
    //     super (props);

    // }
       
    
      


    render() {
        return (
            <div>
                <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
               
              </Accordion.Header>
              <Accordion.Body>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Works with selects"
                >
                  <Form.Select aria-label="Choose Collection" name='collection'>
                   
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    
                  </Form.Select>
                  <Button onClick={this.props.addmodels}>Add model</Button>
                </FloatingLabel>

                <Form>
                  <Form.Control
                    type="text"
                    name="collectionName"
                    placeholder="Collection Name"
                  />
                </Form>
                <Button variant="secondary" type="submit">
                  Create
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            </div>
        )
    }
}

export default AddCollection
