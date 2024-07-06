import React from "react";
import "./works.css";
import worksimg1 from "../../assets/worksimg1.jpg";
import worksimg2 from "../../assets/portfolio2.jpg";
import worksimg3 from "../../assets/portfolio3.jpg";
import worksimg4 from "../../assets/portfolio4.jpg";
import worksimg5 from "../../assets/portfolio5.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>

      <span className="worksdesk">
        Explore a collection of my diligently crafted Android projects,
        showcasing my proficiency in modern Android development technologies.
        Welcome to my digital playground, where creativity meets innovation and
        passion fuels every pixel. As a web developer/designer, I invite you to
        explore my portfolio—a curated collection of projects that showcase my
        expertise, creativity, and dedication to crafting exceptional digital
        experiences.
      </span>
      <div className="workprojects">
        <article className="portfolioitem">
          <img src={worksimg1} alt="" className="worksimg" />
          <h3>Portfolio Website</h3>
          <div className="portfolioitemlinks">
            <a href="">Github</a>
            <a href="https://meek-lollipop-f97804.netlify.app" target="blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolioitem">
          <img src={worksimg2} alt="" className="worksimg" />
          <h3>title</h3>
          <div className="portfolioitemlinks">
            <a href="">Github</a>
            <a href="">Live Demo</a>
          </div>
        </article>
        <article className="portfolioitem">
          <img src={worksimg3} alt="" className="worksimg" />
          <h3>To Do List</h3>
          <div className="portfolioitemlinks">
            <a href="https://github.com/amarak24/TO-DO-LIST" target="blank">
              Github
            </a>
            <a href="https://amarak24.github.io/TO-DO-LIST" target="blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolioitem">
          <img src={worksimg4} alt="" className="worksimg" />

          <h3>title</h3>
          <div className="portfolioitemlinks">
            <a href="">Github</a>
            <a href="">Live Demo</a>
          </div>
        </article>
        <article className="portfolioitem">
          <img src={worksimg5} alt="" className="worksimg" />
          <h3>title</h3>
          <div className="portfolioitemlinks">
            <a href="">Github</a>
            <a href="">Live Demo</a>
          </div>
        </article>
      </div>
      <button className="worksbtn">see more</button>
    </section>
  );
};

export default Works;
