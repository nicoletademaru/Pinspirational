import React from "react";
import Modal from './modals/modal'
import Navbar from "./navbar/splash_navbar";
// import SplashContainer from "./splash/splash_container";

const App = () => (
  <div>
    <Modal />
    <header>
      <Navbar />
    </header>
  </div>
);

export default App;