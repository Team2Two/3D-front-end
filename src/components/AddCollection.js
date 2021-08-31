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
                  // label="Works with selects"
                  controlId="floatingSelect"
                  >

                   <Form  onSubmit={this.props.addmodels}>

                  <Form.Select aria-label="Choose Collection" name='collection'  >
                  
                  {this.props.collectionnamearr.map(item => {
                   return (
                     <option value={item }>{item }</option>
              
                        )
                     })}
                  
                  
                    
                    
                  </Form.Select>
                  <Button type='submit'>Add</Button>
                  </Form   >
                  {/* <Button type='submit'>Add model</Button> */}
                  
                </FloatingLabel>

                <Form  className="form2" onSubmit={this.props.createnewcollection}>
                  <Form.Control
                    type="text"
                    name="collectionName"
                    placeholder="Collection Name"
                  />
                <Button variant="secondary" type="submit">
                  Create
                </Button>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
            </div>
        )
    }
}

export default AddCollection
