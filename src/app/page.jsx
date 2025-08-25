"use client"
import React from "react";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Contact from "./contact/page";

const page = () => {
  return <div>
    <About />
   <Skills />
   <Projects />
   <Contact />

  </div>;
};

export default page;
