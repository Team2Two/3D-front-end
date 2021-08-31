import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
// import LogoutButton from './logout';
import { Link } from "react-router-dom";
import "./CSS/Footer.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <div className="TV FTV">
            
        <Link to="/">
          {" "}
          <img
            src="https://www.thecube.net/images/cube_logo.png"
            alt="logo"
            width="100px"
          />
        </Link>

        <Navbar.Brand><span style={{color: "white", fontSize: "2pc", fontWeight: "bolder"}}>Cube</span></Navbar.Brand>
        
          <span style={{ zIndex: "2", color: "white", marginTop: "0.7rem", marginLeft: "5rem" }}>
            &copy; All Rights Reserved
          </span>

          <ul style={{ color: "white", listStyle: "none" }}>
            <li>
              <Link className="hvrEfct" style={{ color: "white", textDecoration: "none" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
              className="hvrEfct"
                style={{ color: "white", textDecoration: "none" }}
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
              className="hvrEfct"
                style={{ color: "white", textDecoration: "none" }}
                to="/aboutus"
              >
                About Us
              </Link>
            </li>
          </ul>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
