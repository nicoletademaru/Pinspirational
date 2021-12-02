import React from "react";
import { Switch } from "react-router";
import Modal from './modals/modal'
import NavbarContainer from "./navbar/navbar";
import PinIndexContainer from "./pins/pin_index_container";
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import PinShowContainer from "./pins/pin_show_container";
import PinboardShowContainer from "./pinboards/pinboard_show_container";
import SplashContainer from "./splash/splash_container";
import UserShowContainer from './users/users_show_container';
import PinCreateContainer from "./pins/pin_create_container";


const App = () => (
  <div>
    <Modal />
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <ProtectedRoute path='/feed' component={PinIndexContainer} />
      <ProtectedRoute exact path='/pins/:pinId' component={PinShowContainer} />
      <ProtectedRoute exact path='/pinboards/:pinboardId' component={PinboardShowContainer} />
      <ProtectedRoute exact path='/pins' component={PinCreateContainer} />
      <ProtectedRoute exact path='/users/:userId' component={UserShowContainer} />
      <AuthRoute exact path='/' component={SplashContainer} />
    </Switch>
  </div>
);

export default App;