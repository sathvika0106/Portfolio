import React from "react";
import image from "../images/proj.jpg";
import image1 from "../images/proj1.jpg";

const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: "Inventory Management System",
    description:""
  },
  {
    title: "Weather Application",
    description:"",
    url: "",
  },
  {
    title: "Swift Refund System",
    description:"",
    url :"",
  },
  {
    title: "Line Following Robot",
    description:"",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="projects">
      <img className="background" src={image1} alt={imageAltText} />
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_self" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
