import React from "react";
import "./assets/styles/main.css";
import Header from "./components/Header";
import First from "./components/First";
import Concept from "./components/Concept";
import Menu from "./components/Menu";
import Access from "./components/Access";
import Reserve from "./components/Reserve";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <First />
      <Concept />
      <Menu />
      <Access />
      <Reserve />
      <Footer />
    </>
  );
};

export default App;
