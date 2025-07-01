import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

const siteProps = {
  name: "Sathvika Taduru",
  title: "Passionate Web Developer & Seeking Real-World Project Experience.",
  email: "sathvika.taduru@gmail.com",
  gitHub: "sathvika0106",
  instagram: "sathvika_taduru",
  linkedIn: "sathvika-taduru",
  leetcode: "Taduru_Sathvika",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
