import React, { useRef } from "react";
import "./contact.css";
import facebook from "../../assets/facebook-icon.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_dlbg1wb", "template_39lbokz", form.current, {
        publicKey: "Dqna9TKamjlV9j5FO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contactpage" id="contactpage">
      <h1 className="contacttitle">Contact Me</h1>
      <span className="contacttitledesc">Plese fill the form</span>
      <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="your name"
          className="name"
          name="name"
        />
        <input
          type="email"
          placeholder="your email"
          className="email"
          name="email"
        />
        <textarea
          name="message"
          id=""
          cols="10"
          rows="5"
          placeholder="your message"
          className="message"
        ></textarea>
        <button type="submit" value="send" className="formbtn">
          submit
        </button>
        <div className="links">
          <a href="https://www.facebook.com/amar.kalukhe.5" target="_blank">
            <img src={facebook} alt="facebook" className="link" />
          </a>
          <a href="https://www.instagram.com/____17._.7____" target="_blank">
            <img src={instagram} alt="instagram" className="link" />
          </a>
          <a href="https://github.com/amarak24" target="_blank">
            <img src={github} alt="github" className="linkgithub" />
          </a>
          <a href="https://www.linkedin.com/in/amar-kalukhe" target="_blank">
            <img src={linkedin} alt="linkedin" className="linklinkedin" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
