import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
// import './Header.css';
import LoginButton from './login'
import LogoutButton from './logout'
import { withAuth0 } from '@auth0/auth0-react';
import  DropdownMenu from   "reactstrap"

class Header extends React.Component {

  render() {
    const {  isAuthenticated  } = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link to="/"> <img src="https://cdn.logo.com/hotlink-ok/logo-social.png"  width="100px"/></Link>

        <Navbar.Brand>3DATA</Navbar.Brand>


{/* 
        <UncontrolledDropdown nav>
                                        <DropdownToggle nav>
                                            <i className="ni ni-collection d-lg-none mr-1" />
                                            <span style={{ fontSize: "1.5pc" }} className="nav-link-inner--text">Menu</span>
                                        </DropdownToggle>
                                        <DropdownMenu>

                                            <DropdownItem to="/profile-page" tag={Link}>
                                                Profile
                                            </DropdownItem>
                                            <DropdownItem to="/landing-page" tag={Link}>
                                                Portfolio
                                            </DropdownItem>
                                            {/* <DropdownItem to="/login-page" tag={Link}>
                        Login
                      </DropdownItem> */}
                                            {/* <DropdownItem to="/register-page" tag={Link}>
                        Register
                      </DropdownItem> */}
                                        </DropdownMenu>
                                    </UncontrolledDropdown> */}


       
        


        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {(isAuthenticated) ? <LogoutButton/>:<LoginButton/>}
        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
