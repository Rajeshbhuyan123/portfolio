import React from "react";
import "./nav.css";
import { FcHome } from "react-icons/fc";
import { BiUserPin } from "react-icons/bi";
import { GiBookshelf } from "react-icons/gi";
import { GiCentaurHeart } from "react-icons/gi";
import { FcContacts } from "react-icons/fc";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} href="#">
        <FcHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <BiUserPin />
      </a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>
        <GiBookshelf />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}>
        <GiCentaurHeart />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <FcContacts />
      </a>
    </nav>
  );
};

export default Nav;
