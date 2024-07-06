import React from "react";
import "./about.css";
import uidesign from "../../assets/ui-design.png";
import webdesign from "../../assets/website-design.png";

const About = () => {
  return (
    <section id="about">
      <span className="title">What i do</span>
      <span className="titledesc">
        Hey! It's Amar I'm a Full Stack Developer living in Pune. I possess a
        natural aptitude for understanding web development and related concepts.
        Over time, I have successfully completed several noteworthy MERN Stack
        Web Development projects, which you can explore on my portfolio.
      </span>
      <div className="skillbars">
        <div className="skillbar">
          <img src={uidesign} alt="uidesign" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Web Design</h2>
            <p>
              Web design meets cutting-edge technology with my expertise in
              crafting captivating interfaces using React. As a web designer
              specializing in React, I combine the art of design with the power
              of this versatile JavaScript library to create dynamic and
              responsive websites. also do UI/UX
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img src={webdesign} alt="webdesign" className="skillbarimg" />
          <div className="skillbartext">
            <h2>Web Developement</h2>

            <p>
              Welcome to the world of MERN stack web development, where I
              harness the power of MongoDB, Express.js, React.js, and Node.js to
              build dynamic and scalable web applications. As a MERN stack
              developer, I specialize in crafting end-to-end solutions that
              seamlessly integrate front-end and back-end technologies to
              deliver immersive digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
