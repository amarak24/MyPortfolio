import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactimg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopmenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          className="desktopmenuitem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          smooth={true}
          spy={true}
          offset={-45}
          className="desktopmenuitem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="skillssection"
          spy={true}
          smooth={true}
          offset={-60}
          className="desktopmenuitem"
        >
          Skills
        </Link>

        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          className="desktopmenuitem"
        >
          Portfolio
        </Link>
      </div>
      <Link
        className="desktopmenubtn"
        to="contactpage"
        smooth={true}
        offset={-50}
      >
        <img src={contactimg} alt="" className="desktopmenubtnimg" /> Let's Talk
      </Link>

      <img
        src={menu}
        alt="logo"
        className="mobmenu"
        onClick={() => setshowmenu(!showmenu)}
      />
      <div
        className="navmobmenu"
        style={{ display: showmenu ? "flex" : "none" }}
      >
        <Link
          activeClass="active"
          to="intro"
          smooth={true}
          spy={true}
          offset={-100}
          className="mobmenuitem"
          onClick={() => setshowmenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          smooth={true}
          spy={true}
          offset={-40}
          className="mobmenuitem"
          onClick={() => setshowmenu(false)}
        >
          About
        </Link>

        <Link
          activeClass="active"
          to="skillssection"
          spy={true}
          smooth={true}
          offset={-50}
          className="mobmenuitem"
          onClick={() => setshowmenu(false)}
        >
          Skills
        </Link>

        <Link
          activeClass="active"
          to="works"
          smooth={true}
          offset={-50}
          spy={true}
          className="mobmenuitem"
          onClick={() => setshowmenu(false)}
        >
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
