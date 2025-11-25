"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import styles from "./about.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.pageWrapper}
    >
      <div className={styles.about}>
        {/* صندوق المعلومات (الكارد الأبيض) */}
        <div className={styles.infoBox}>
          <div className={styles.title}>
            <h1 className={styles.name}>
              Hello, I&apos;m <span> Hamza Beji</span>
            </h1>
            <h2 className={styles.typew}>
              <Typewriter
                words={[
                  "Full-Stack Web Developer",
                  "A Software Engineering",
                  "A Problem Solver",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </h2>
          </div>
          <div className={styles.description}>
            <h2>About Me</h2>
            <p>
              Passionate <strong>Software Engineering student</strong> at the{" "}
              
                <strong>Faculty of Sciences of Gabés (FSG)</strong>
              
              , where I&apos;m building strong foundations in algorithms, system
              design, and computer science theory. I am enthusiastic about
              solving complex problems through efficient code and innovative
              solutions.
            </p>
            <p>
              To complement my academic knowledge with practical, in-demand
              skills, I also completed a{" "}
              
                <strong>Software Development Bootcamp at GoMyCode</strong>
              
              . This intensive training sharpened my expertise in modern web
              technologies and full-stack development, preparing me for
              real-world challenges. I am now seeking opportunities to apply what
              I&apos;ve learned.
            </p>
          </div>
        </div>

        <div className={styles.imageBox}>
          <Image
            src="/Hamzabeji-dev.jpg"
            alt="Hamza Beji - Web Developer"
            width={500} 
            height={750} 
            className={styles.img}
            priority
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;