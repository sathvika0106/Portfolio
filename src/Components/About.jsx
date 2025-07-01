import React from "react";
import image from "../images/skillsbg.jpeg";

const imageAltText = "purple and blue abstract background";

const description =
  "Final year B.Tech CSE student at SR University, passionate about AI and web development, with a strong foundation in data structures, algorithms, and machine learning.";

const skillsList = [
  "HTML",
  "CSS",
  "React",
  "Java",
  "MySQL",
  "Python",
  "Bootsrap",
  "Git & Github",
  "Angular",
  "MongoDB",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation.I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <h2>Skills</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
