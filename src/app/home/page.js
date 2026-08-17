"use client";

import React from "react";
import "./homepage.css";
import { motion } from "framer-motion";
import {
  AnimatedPage,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  AnimatedButton,
  AnimatedCard,
  ScaleIn,
} from "../../components/AnimatedComponents";

function Home() {
  const technologies = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MySQL",
    "REST API",
    "Git",
    "GitHub",
  ];

  return (
    <AnimatedPage>
      <div className="home-page-shell">
        <main className="home-page">
          <section className="hero">
            <div className="hero-left">
              <FadeInUp delay={0.1}>
                <motion.p
                  className="hero-label"
                  initial={{ opacity: 0, letterSpacing: "4px" }}
                  animate={{ opacity: 1, letterSpacing: "2px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  JAVA FULL-STACK DEVELOPER
                </motion.p>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    Hi, I'm Sangeeth.
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    I build scalable,   
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    responsive, and 
                  </motion.span>
                  <br />
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    user-focused
                    <br></br>
                    web applications using Java, Spring Boot,
                    <br></br>
                    React, and MySQL.
                  </motion.span>
                </motion.h1>
              </FadeInUp>

              <FadeInUp delay={0.4}>
                <motion.p
                  className="hero-description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  MCA graduate and aspiring Java Full Stack Developer passionate about building modern web applications and solving real-world problems through clean, efficient code.                  
                </motion.p>
              </FadeInUp>

              <div className="hero-buttons">
                <AnimatedButton href="/projects" className="view-work-button">
                  View my work
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </AnimatedButton>

                <AnimatedButton href="/contact" className="contact-button">
                  Get in touch
                </AnimatedButton>
               

                 <AnimatedButton href="Sangeeth Resume.pdf" className="btn-download">
                  Download CV
                </AnimatedButton>
              </div>

              <div className="social-links">
                <motion.a
                  href="https://github.com/sangeethwills"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 20 }}
                  whileHover={{
                    scale: 1.2,
                    color: "#f28c00",
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >🤖</motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/sangeeth67/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 260, damping: 20 }}
                  whileHover={{
                    scale: 1.2,
                    color: "#f28c00",
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  in
                </motion.a>

                <motion.a
                  href="mailto:sangeethmca67@gmail.com"
                  aria-label="Email"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 20 }}
                  whileHover={{
                    scale: 1.2,
                    color: "#f28c00",
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✉
                </motion.a>

                
              </div>

              
            </div>
            
              <div className="image-adder-container">
                <img src="/me.png" className="profile-hero-img" style={{border:"10px",borderRadius:"200px"}}></img>
                <h3 style={{paddingTop:"25px",color:"#2596be",fontFamily:"fangsong"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sangeeth - Developer 모</h3>
              </div>
            


            <FadeInRight delay={0.3}>
              <AnimatedCard className="status-card-wrapper" delay={0.4}>
                <div className="status-card">
                  <motion.p
                    className="currently"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    CURRENTLY
                  </motion.p>

                  <motion.p
                    className="status-description"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    MCA graduate and aspiring Java Full-Stack Developer,
                    building modern applications using React, Java,
                    Spring Boot and MySQL.
                  </motion.p>

                  <motion.div
                    className="status-stat"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.h2
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      MCA
                    </motion.h2>
                    <p>Master of Computer Applications</p>
                  </motion.div>

                  <motion.div
                    className="status-stat"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.h2
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                    >
                      5+
                    </motion.h2>
                    <p>Projects completed</p>
                  </motion.div>

                  <motion.div
                    className="status-stat"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.h2
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6,
                      }}
                    >
                      10+
                    </motion.h2>
                    <p>Technologies explored</p>
                  </motion.div>
                </div>
              </AnimatedCard>
            </FadeInRight>
          </section>

          <section className="toolbox">
            <FadeInUp>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                Toolbox
              </motion.h2>
            </FadeInUp>

            <div className="toolbox-list">
              {technologies.map((technology, index) => (
                <motion.span
                  className="toolbox-item"
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    backgroundColor: "#f28c00",
                    color: "#ffffff",
                    borderColor: "#f28c00",
                    boxShadow: "0 10px 25px rgba(242, 140, 0, 0.3)",
                    transition: { duration: 0.25 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </AnimatedPage>
  );
}

export default Home;
