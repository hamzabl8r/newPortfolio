import React from "react";
import styles from './skills.module.css'
import skillsData from "./SkillsData";
import { motion } from "framer-motion";


const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
    <div  className={styles.section}>
      <h2 className={styles.skillstitle}>Skills</h2>
      <div className={styles.skillcontainer}>
        {skillsData.map((categoryData, categoryIndex) => (
          <div key={categoryIndex} className={styles.skillscard}>
            <h3 className={styles.categorytitle}>{categoryData.category}</h3>
            <div className={styles.skillsgrid}>
              {categoryData.skills.map((skill, skillIndex) => (
                <div className={styles.skillitemcircle} key={skillIndex}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.skillicon}
                  />
                  <p className={styles.skillname}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
};

export default Skills;
