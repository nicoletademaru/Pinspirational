import React from "react";
import Modal from './modals/modal'
import SplashContainer from "./splash/splash_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <h1>Pinspiration</h1>
      <SplashContainer />
    </header>
  </div>
);

export default App;