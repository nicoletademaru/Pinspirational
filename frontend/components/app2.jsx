import React from "react";
import { Route } from "react-router";
import Modal from './modals/modal'
import NavbarContainer from "./navbar/splash_navbar";
import PinIndexContainer from "./pins/pin_index_container";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import PinShowContainer from "./pins/pin_show_container";


const App = () => (
  <div>
    <Modal />
    <header>
      <NavbarContainer />
    </header>
      <ProtectedRoute path='/feed' component={PinIndexContainer} />
      <ProtectedRoute exact path='/pins/:pinId' component={PinShowContainer}/>
  </div>
);

export default App;