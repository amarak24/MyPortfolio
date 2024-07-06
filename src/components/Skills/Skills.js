import React from "react";
import "./skills.css";
import tick from "../../assets/tick.png";

const Skills = () => {
  return (
    <section id="skillssection">
      <h2 className="skillssectiontitle">What Skills I Have</h2>
      <p className="skillssectiondesc">Let me show my experties to you</p>
      <div className="skillboxes">
        <div className="skillbox">
          <h3 className="skillboxtitle">Frontend Developement</h3>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">HTML</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">CSS</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">BOOTSTRAP</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">REACT JS</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>

          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">JAVASCRIPT</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
        </div>
        <div className="skillbox">
          <h3 className="skillboxtitle">Backend Developement</h3>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">NODE JS</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">EXPRESS JS</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">SQL</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">MYSQL</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>

          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">MONGODB</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
        </div>
        <div className="skillbox">
          <h3 className="skillboxtitle">Other Languages</h3>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">JAVA</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">PYTHON</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">RESTful API</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">CLOUD</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>

          <div className="skillelement">
            <img src={tick} alt="" className="skillelementimg" />
            <div className="element">
              <p className="elementtitle">ORACLE</p>
              <p className="elementdesc">Experienced</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
