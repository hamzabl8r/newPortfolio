"use client"

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
     <a  href="https://github.com/hamzabl8r" target="_blank" ><FaGithub color='black' size={35} /></a>
     <a  href="https://instagram.com/x_bl8r" target="_blank"> <FaSquareInstagram color='black' size={35}/></a>
     <a  href="https://www.linkedin.com/in/hamza-beji-b92602227/?_l=fr_FR" target="_blank"><FaLinkedin color='black' size={35}/></a>
      
    </div>
  )
}

export default Footer
