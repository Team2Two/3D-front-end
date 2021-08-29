import { withAuth0 } from "@auth0/auth0-react";
import React from "react";
import Login from "./components/login";
import MainPage from "./components/mainPage";
import Profile from "./components/profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <BrowserRouter>
      <Header/>
      <Switch>
      <Route exact path="/">
                {" "}
                <MainPage />{" "}
              </Route>
              <Route exact path="/profile">
                <Profile />
              </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
    );
  }
}
export default withAuth0(App);