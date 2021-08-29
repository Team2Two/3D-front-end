import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from './logout';
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Link to="/"> <img src="https://cdn.logo.com/hotlink-ok/logo-social.png"  width="100px"/></Link>

        <Navbar.Brand>&copy;3DATA</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
