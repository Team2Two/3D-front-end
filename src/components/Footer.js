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
          <Link to="/">
            {" "}
            <img
            alt= "img"
              src="https://cubecontrols.com/wp-content/uploads/2019/01/Cube-Controls-Favicon_new.png"
              width="100px"
            />
          </Link>

          <Navbar.Brand>
            <span
              style={{
                color: "#911F27",
                fontSize: "2pc",
                fontWeight: "bolder",
              }}
            >
              3D
            </span>
            ata
          </Navbar.Brand>
          <span style={{ zIndex: "2", color: "white" }}>
            &copy; All Rights Reserved
          </span>

          <ul style={{ color: "white", listStyle: "none" }}>
            <li>
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/aboutus"
              >
                AbouT Us
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
