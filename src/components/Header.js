import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap/";
import { Link } from "react-router-dom";
// import './Header.css';
import LoginButton from "./loginButton";
import LogoutButton from "./logout";
import { withAuth0 } from "@auth0/auth0-react";
import "./CSS/Header.css"
// import  DropdownMenu from   "reactstrap"

class Header extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className="TV">
        <Link to="/">
          {" "}
          <img
            src="https://cubecontrols.com/wp-content/uploads/2019/01/Cube-Controls-Favicon_new.png"
            alt="logo"
            width="100px"
          />
        </Link>

        <Navbar.Brand><span style={{color: "#0086FF", fontSize: "2pc", fontWeight: "bolder"}}>3</span>Data</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Link style={{textDecoration: "none", color: "white", marginTop: "0.5rem"}} to="/">Home</Link>

            <NavDropdown   title="Menu" id="collasible-nav-dropdown">
            <Link style={{textDecoration: "none", color: "black", marginLeft: "1rem"}} to="/profile">Profile</Link><br></br>
            <Link style={{textDecoration: "none", color: "black", marginLeft: "1rem"}} to="/aboutus">About Us</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>




        {isAuthenticated ? <LogoutButton /> : <LoginButton/>}
        {isAuthenticated ?  
        <img
        className= "userImg"
            src= {user.picture}
            alt="logo"
            width="49px"
          />


          : <img
          className= "userImg"
          src= "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
          alt="logo"
          width="50px"
        />}

</div>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
