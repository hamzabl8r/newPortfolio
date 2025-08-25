"use client"

import React from "react";
import {
  FaExternalLinkAlt,
  FaCodeBranch,
  FaPalette,
  FaTools,
  FaLaptopCode,
  FaGithub,
} from "react-icons/fa";
import clsx from "clsx";
import styles from "./porjects.module.css";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className={clsx(styles.section, styles.projectsSection)}>
      <div className={styles.container}>
        <h2 className={styles.projectstitle}>My Projects</h2>
        <p className={styles.projectssubtitle}>
          Here are some of my recent projects. Click to view a live demo.
        </p>
        <div className={styles.projectscategories}>
          <div className={clsx(styles.card, styles.projectcategorycard)}>
            <FaLaptopCode />
            <h4>Frontend</h4>
            <p>React, JavaScript, HTML, CSS</p>
          </div>
          <div className={clsx(styles.card, styles.projectcategorycard)}>
            <FaCodeBranch />
            <h4>Backend</h4>
            <p>Node.js, Express.js, MongoDB</p>
          </div>
          <div className={clsx(styles.card, styles.projectcategorycard)}>
            <FaTools />
            <h4>Tools</h4>
            <p>Git, VS Code</p>
          </div>
        </div>
        <div className={styles.projectsgrid}>
          <div className={clsx(styles.card, styles.projectcard)}>
            <Image
              src="/caa.gif"
              alt="Calculator App"
              width={400}
              height={250}
              className={styles.projectcardimage}
            />
            <div className={styles.projectcardcontent}>
              <div className={styles.projectcardtags}>
                <span className={styles.projectcardtags}>JavaScript</span>
                <span className={styles.projectcardtags}>HTML</span>
                <span className={styles.projectcardtags}>CSS</span>
              </div>
              <h3>Calculator</h3>
              <p>
                A simple yet functional calculator web application. Built with
                vanilla JavaScript, HTML, and CSS.
              </p>
              <div className={styles.projectcardlinks}>
                <a
                  href="https://calculator-pi-virid-30.vercel.app/"
                  className={styles.projectcardlink}>
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/hamzabl8r/Calculator"
                  className={styles.projectcardlink}>
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className={clsx(styles.card, styles.projectcard)}>
            <Image
              src="/xo.gif"
              width={400}
              height={250}
              alt="X-O Game"
              className={styles.projectcardimage}
            />
            <div className={styles.projectcardcontent}>
              <div className={styles.projectcardtags}>
                <span className={styles.projectcardtags}>JavaScript</span>
                <span className={styles.projectcardtags}>HTML</span>
                <span className={styles.projectcardtags}>CSS</span>
              </div>
              <h3>X-O Game</h3>
              <p>
                An interactive Tic-Tac-Toe game created with JavaScript. Enjoy a
                classic game with a clean UI.
              </p>
              <div className={styles.projectcardlinks}>
                <a
                  href="https://x-o-game-three.vercel.app/"
                  className={styles.projectcardlink}>
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/hamzabl8r/X-O-Game"
                  className={styles.projectcardlink}>
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className={clsx(styles.card, styles.projectcard)}>
            <Image
              src="/weather.jpeg"
              alt="Weather App"
              width={400}
              height={250}
              className={styles.projectcardimage}
            />
            <div className={styles.projectcardcontent}>
              <div className={styles.projectcardtags}>
                <span className={styles.projectcardtags}>React.js</span>
                <span className={styles.projectcardtags}>Axios</span>
                <span className={styles.projectcardtags}>CSS</span>
              </div>
              <h3>Weather App</h3>
              <p>
                A simple yet effective weather application that allows users to
                search for a city and view its current weather details,
                including temperature, humidity, and wind speed. Built with
                React.js and Axios for seamless API integration.
              </p>
              <div className={styles.projectcardlinks}>
                <a
                  href="https://weather-app-navy-five-77.vercel.app/"
                  className={styles.projectcardlink}>
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/hamzabl8r/Weather-App"
                  className={styles.projectcardlink}>
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className={clsx(styles.card, styles.projectcard)}>
            <Image
              src="/todo.jpeg"
              alt="Redux Toolkit App"
              width={400}
              height={250}
              className={styles.projectcardimage}
            />
            <div className={styles.projectcardcontent}>
              <div className={styles.projectcardtags}>
                <span className={styles.projectcardtags}>React.js</span>
                <span className={styles.projectcardtags}>Redux Toolkit</span>
              </div>
              <h3>TODO App</h3>
              <p>
                An intuitive to-do list application built with React. It
                demonstrates core concepts like state management and
                component-based architecture to allow users to add, track, and
                manage their daily tasks efficiently.
              </p>
              <div className={styles.projectcardlinks}>
                <a
                  href="https://redux-bice-one.vercel.app/"
                  className={styles.projectcardlink}>
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/hamzabl8r/Redux"
                  className={styles.projectcardlink}>
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
          {/* <div className={clsx(styles.card , styles.projectcard)}>
            <img src="/A8.png" alt="Portfolio Website" className={styles.projectcardimage} />
            <div className={styles.projectcardcontent}>
              <div className={styles.projectcardtags}>
                <span className={styles.projectcardtags}>React</span>
                <span className={styles.projectcardtags}>Pure CSS</span>
              </div>
              <h3>Portfolio Website</h3>
              <p>My personal portfolio website, designed and built to showcase my skills and projects.</p>
              <div className={styles.projectcardlinks}>
                <a href="#" className={styles.projectcardlink}>
                  Live Demo <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div> */}
        </div>
        {/* <a href="#" className="btn btn-primary view-more-btn b">View More Projects</a> */}
      </div>
    </section>
  );
};

export default Projects;
