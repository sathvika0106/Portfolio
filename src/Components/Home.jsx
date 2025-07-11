import React from "react";
import PropTypes from "prop-types";
// import image from "../images/sath1.jpeg";

const image = "https://raw.githubusercontent.com/sathvika0106/Portfolio/refs/heads/main/sath1.jpeg";
const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h3 className="h3">{title}</h3>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
