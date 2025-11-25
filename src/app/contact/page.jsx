"use client"

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import styles from './contact.module.css';
import clsx from 'clsx';
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
    <section id="contact" className={styles.section}>
      <div className={clsx(styles.container , styles.contactsection)}>
        <div className={styles.contactinfo}>
          <h2>Get In Touch</h2>
          <p>
Seeking new opportunities. Let's connect and see how we can work together.          </p>
          <div className={styles.contactdetails}>
            <div className={styles.contactdetail}>
              <div className={styles.contactdetailicon}>
                <FaEnvelope />
              </div>
              <div className={styles.contactdetailtext}>
                <h4>Email</h4>
                <p>hamzabeji001@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactdetail}>
              <div className={styles.contactdetailicon}>
                <FaPhone />
              </div>
              <div className={styles.contactdetailtext}>
                <h4>Phone</h4>
                <p>+216 29 647 250</p>
              </div>
            </div>
            <div className={styles.contactdetail}>
              <div className={styles.contactdetailicon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.contactdetailtext}>
                <h4>Location</h4>
                <p>Ghannouch, Gabès, Tunisia</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactformcontainer}>
          <h3>Send a Message</h3>
          <form className={styles.contactform} action="https://formsubmit.co/hamzabeji001@gmail.com" method='POST'>
            <div className={clsx(styles.formgroup ,  styles.namerow)}>
              <div className={styles.formgroup}>
                <label htmlFor="firstName" > Name</label>
                <input type="text" id="firstName" name="firstName" placeholder='Name :' />
              </div>
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder='Mail : ' />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder='Subject :' />
            </div>
            <div className={styles.formgroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder='Your Message :'></textarea>
            </div>
            <button type="submit" className={clsx(styles.btn ,styles.btnprimary)}>
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default Contact;
