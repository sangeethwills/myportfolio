"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AnimatedPage,
  FadeInUp,
  AnimatedCard,
} from "../../components/AnimatedComponents";

const Aboutpage = () => {
  const skills = [
    {
      title: "Frontend Development",
      description:
        "Building responsive and user-friendly interfaces using React, JavaScript, HTML and CSS.",
    },
    {
      title: "Backend Development",
      description:
        "Designing and implementing server-side logic, APIs, and database interactions using Node.js, Express.js, and MongoDB.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Combining frontend and backend skills to create end-to-end web applications that deliver seamless user experiences.",
    },
    {
      title: "Problem Solving",
      description:
        "Applying analytical thinking and creative problem-solving techniques to overcome challenges and deliver effective solutions.",
    },
  ];

  return (
    <AnimatedPage>
      <div className="page-shell">

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FadeInUp delay={0.1}>
            <motion.p
              style={{
                color: "#f28c00",
                fontSize: "15px",
                fontFamily: "Arial, sans-serif",
                letterSpacing: "2px",
                textTransform: "uppercase",
                fontWeight: "bold",
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingBottom: "0px",
                marginBottom: "0px",
                textShadow: "0 0 10px rgba(242, 140, 0, 0.3)",
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              ABOUT ME
            </motion.p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <section>
              <motion.p
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  paddingBottom: "0px",
                  marginBottom: "0px",
                  color: "#ffffff",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                I AM AN MCA GRADUATE 🗞🎓👨🏻‍🎓
              </motion.p>
            </section>
          </FadeInUp>

          <motion.hr
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originX: 0, borderColor: "rgba(242, 140, 0, 0.2)" }}
          />

          <FadeInUp delay={0.3}>
            <section>
              <motion.p
                className="hero-section"
                style={{
                  fontSize: "50px",
                  fontWeight: "normal",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  paddingBottom: "0px",
                  gap: "24px",
                  color: "#ffffff",
                  textShadow: "0 0 30px rgba(255,255,255,0.05)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Software Engineer,
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  collaborator, relentless simplifier.
                </motion.span>
              </motion.p>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <section>
              <motion.p
                style={{
                  paddingLeft: "20px",
                  marginTop: "0px",
                  color: "#8a8aa0",
                  paddingTop: "30px",
                  fontSize: "15px",
                  fontFamily: "Arial, sans-serif",
                  letterSpacing: "1px",
                  lineHeight: "1.6",
                  wordSpacing: "2px",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ul>
                  <li>
                    I’m Sangeeth, an MCA graduate and aspiring Java Full Stack Developer focused on building reliable,<br /> responsive, and user-friendly web applications.
                    <br />
                  </li>
                  <li>
                    I work with Java, Spring Boot, React, JavaScript, and MySQL, and enjoy developing applications <br />that connect clean frontend experiences with robust backend services.
                    <br />
                  </li>
                  <li>
                    I believe in continuously improving my technical skills by building real-world projects, solving <br />programming problems, and learning modern development practices.
                    <br />
                  </li>
                  <li>
                    Currently, I'm looking for opportunities where I can contribute as a Java Full Stack Developer,<br /> learn from experienced teams, and grow as a software engineer.
                  </li>
                </ul>
              </motion.p>
            </section>
          </FadeInUp>
        </motion.header>

        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originX: 0, borderColor: "rgba(242, 140, 0, 0.2)" }}
        />

        <FadeInUp delay={0.2}>
          <section>
            <div>
              <motion.h4
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, color: "#f28c00" }}
                transition={{ duration: 0.3 }}
                style={{ cursor: "default", color: "#ffffff" }}
              >
                What I can Do👇🏻
              </motion.h4>
            </div>
            <div
              style={{
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingBottom: "0px",
                marginBottom: "0px",
                textAlign: "left",
              }}
            >
              <ol className="education-card">
                {skills.map((skill, index) => (
                  <motion.li
                    key={index}
                    style={{
                      marginBottom: "10px",
                      fontFamily: "Arial, sans-serif",
                      listStyle: "disc",
                      color: "#e0e0e8",
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      x: 15,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <motion.h3
                      style={{ color: "#f28c00" }}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill.title}
                    </motion.h3>
                    <motion.div
                      style={{
                        paddingLeft: "20px",
                        fontFamily: "Arial, sans-serif",
                        color: "#8a8aa0",
                        fontSize: "17px",
                      }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2 }}
                    >
                      {skill.description}
                    </motion.div>
                  </motion.li>
                ))}
              </ol>
            </div>
          </section>
        </FadeInUp>
      </div>
    </AnimatedPage>
  );
};

export default Aboutpage;
