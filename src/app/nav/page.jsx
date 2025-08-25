"use client"

import React from "react";
import style from "./nav.module.css";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";


const Nav = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
    <div>
      <div className={style.Container}>
        <div className={style.nav}>
          <li className={style.li1}>
            <Link href="/">
              <FaHome size={35} color="white" />
            </Link>
          </li>
          <li className={style.li2}>
            <Link href="/about">
              <FaUser size={35} color="white" />
            </Link>
          </li>
          <li className={style.li3}>
            <Link href="/contact">
              <IoMdMail size={35} color="white" />
            </Link>
          </li>
          <li className={style.li4}>
            <Link href="/projects">
              <Image
                src="/project-management.png"
                alt="Logo"
                width={35}
                height={35}
                />
            </Link>
          </li>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Nav;
