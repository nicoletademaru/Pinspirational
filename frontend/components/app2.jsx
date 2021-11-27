import React from "react";
import { Route } from "react-router";
import Modal from './modals/modal'
import Navbar from "./navbar/splash_navbar";
import PinIndexContainer from "./pins/pin_index_container";
import LoginContainer from "./sessions/login_container";
// import SplashContainer from "./splash/splash_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <Navbar />
    </header>
    <Route exact path='/feed' component={PinIndexContainer}/>
  </div>
);

export default App;