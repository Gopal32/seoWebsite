// import logo from './logo.svg';
import NavBuy from "./component/navBuy/NavBuy.jsx";
import Slider from "./component/slider/slider.jsx";
import React from "react";
import "./index.css";
import CopywirteFooter from "./component/footer/copywriteFooter.jsx";
import MainFooter from "./component/footer/MainFooter.jsx";
// import "./App.css";

function App() {
  return (
    // <div className="app">
    <>
      <NavBuy></NavBuy>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <MainFooter></MainFooter>
        <div className="div-copywrite">
          <CopywirteFooter></CopywirteFooter>
        </div>
      </div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <NavBuy></NavBuy> */}
    </>
    // </div>
  );
}

export default App;
