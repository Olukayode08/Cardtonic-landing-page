import React, { useState } from "react";
import Dropdown from "./Components/Dropdown";
import Navbar from './Components/Navbar'
import Secfive from "./Components/Secfive";
import Secfour from "./Components/Secfour";
import Secone from "./Components/Secone";
import Secsix from "./Components/Secsix";
import Secthree from "./Components/Secthree";
import Sectwo from "./Components/Sectwo";
import Secseven from './Components/Secseven';
import Footer from "./Components/Footer";

import './website.css'

function App() {
  const [active, setActive] = useState(false)
  const toggle = ()=>{
    setActive(!active)
  }
  return (
    <>
            <Navbar toggle={toggle} />
            <Dropdown active={active} toggle={toggle} />
            <Secone />
            <Sectwo />
            <Secthree />
            <Secfour />
            <Secfive />
            <Secsix />
            <Secseven />
            <Footer />
    </>
  );
}

export default App;
