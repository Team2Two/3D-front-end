import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Login from "./components/login";
import MainPage from "./components/mainPage";
import Profile from "./components/profile";
import AboutUs from "./components/aboutus";
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Header/> */}
        <Switch>
          <Route exact path="/">
            {" "}
            <MainPage />{" "}
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>
         
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>


        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
    );
  }
}

export default withAuth0(App);
