import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Header/Banner";
import Tab from "./components/Header/Tab";
import Intro from "./components/main/Intro";
import Slider from "./components/main/Slider";
import Keyword from "./components/main/Keyword";
import Serial from "./components/main/Serial";
import Writer from "./components/main/Writer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {[
                Banner,
                Tab,
                Intro,
                Slider,
                Keyword,
                Serial,
                Writer,
                Footer,
              ].map((Component, index) => (
                <Component key={index} />
              ))}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
