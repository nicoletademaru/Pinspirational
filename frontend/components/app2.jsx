import React from "react";
import { Route } from "react-router";
import Modal from './modals/modal'
import Navbar from "./navbar/splash_navbar";
import PinIndexContainer from "./pins/pin_index_container";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';


const App = () => (
  <div>
    <Modal />
    <header>
      <Navbar />
    </header>
      <ProtectedRoute path='/feed' component={PinIndexContainer} />
  </div>
);

export default App;