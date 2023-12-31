import React from "react";
import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import Images from "./components/images";
import { gsap, Power3 } from "gsap";

function App() {
  let t1 = new gsap.timeline();
  let ease = Power3.easeOut();
  return (
    <div className="hero">
      <Header timeline={t1} ease={ease} />
      <div className="container">
        <Content timeline={t1} />
        <Images timeline={t1} ease={ease} />
      </div>
    </div>
  );
}

export default App;
