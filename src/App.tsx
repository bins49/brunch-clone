import React from "react";
import Banner from "./components/Header/Banner";
import Tab from "./components/Header/Tab";
import Intro from "./components/main/Intro";
import Slider from "./components/main/Slider";
import Keyword from "./components/main/Keyword";

function App() {
  return (
    <>
      <Banner />
      <Tab />
      <Intro />
      <Slider />
      <Keyword />
    </>
  );
}

export default App;
