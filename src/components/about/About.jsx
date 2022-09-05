import React from "react";
import "./About.css";
import ME from "../../assets/me1-about.jpg";
import { TbAward } from "react-icons/tb";
import { FcFolder } from "react-icons/fc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FcFolder className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>
          </div>
          <p>
            An effective communicator having excellent interpersonal & problem
            solving skills to achieve objectives through teamwork.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default about;
