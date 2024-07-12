import React from "react";
import "./intro.css";
import bg from "../../assets/imagee.png";
import btnimg from "../../assets/hireme.png";
import cv from "../../assets/Amar kalukhe resume(2) (2).pdf";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">hello,</span>
        <span className="introtext">
          I'm
          <span className="intoname">
            Amar <br />
          </span>
          Full stack Developer
        </span>
        <p className="intropara">
          Harnessing the power of React.js, I breathe life into these
          interfaces, <br />
          crafting experiences that leave users spellbound. And when it comes to
          the backend, <br />
          I'm the architect of dreams, conjuring robust
          <br />
          server-side solutions with Node.js.
        </p>
        <div className="buttons">
          <a className="introbtn" href="#contactpage">
            <img src={btnimg} alt="Hire me" className="introbtnimg" /> Hire me
          </a>
          <a href={cv} download={cv} className="introbtn2">
            Download CV
          </a>
        </div>
      </div>
      <img src={bg} alt="profilephoto" className="introimg" />
    </section>
  );
};

export default Intro;
