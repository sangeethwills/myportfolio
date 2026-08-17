"use client";
import React, { useState } from "react";
import "./education.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  AnimatedPage,
  FadeInUp,
  AnimatedCard,
} from "../../components/AnimatedComponents";

function Education() {
  const [openCertificate, setOpenCertificate] = useState(null);

  const educationData = [
    {
      icon: "🎓",
      degree: "MCA, Computer Applications",
      college: "Hindustan College Of Engineering Technology, Coimbatore",
      year: "2024 — 2026",
      description:
        "Completed my Master of Computer Applications with a focus on software development, Java, Spring Boot, React and databases.",
    },
    {
      icon: "🎓",
      degree: "B.Sc, Information Technology",
      college: "Hindustan College Of Arts And Science, Coimbatore",
      year: "2021 — 2024",
      description:
        "Developed a strong foundation in programming, web development, databases and software engineering.",
    },
    {
      icon: "🎓",
      degree: "HSC, Higher Secondary Education",
      college: "Swamy Vivekananda Matriculation Higher Secondary School",
      year: "2020 — 2021",
      description:
        "Choosing an Arts and Science group in school gives you a well-rounded, interdisciplinary education that bridges creative critical thinking with logical, empirical inquiry.",
    },
    {
      icon: "🎓",
      degree: "SSLC, Secondary School Certificate",
      college: "Model Matriculation Higher Secondary School",
      year: "2018 — 2019",
      description:
        "Path to find a carrer to next level in the field of computer science and software development.",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Java Full Stack Development",
      year: "2026",
      organization: "Accord Info Matrix",
      description:
        "Completed a Java Full Stack Development certification covering Core Java, Spring Boot, REST APIs, React, MySQL and full-stack application development.",
      image: "/certificates/java.jpeg",
    },
    {
      id: 2,
      name: "WebDesiging + Development ",
      year: "2026",
      organization: "Accord Info Matrix",
      description:
        "Completed advanced training in web designing and web application development, covering HTML, CSS, JavaScript, DOM, and React JS.",
      image: "/certificates/web.jpeg",
    },
    {
      id: 3,
      name: "Python Programming",
      year: "2026",
      organization: "Accord Info Matrix",
      description:
        "Completed advanced training in Python Programming, building a strong foundation in Python programming concepts and application development.",
      image: "/certificates/python.jpeg",
    },
    {
      id: 4,
      name: "Ai tools ",
      year: "2026",
      organization: "Accord Info Matrix",
      description:
        "Completed advanced training in AI tools, including ChatGPT, Framer, Midjourney, GitHub Copilot, and Writesonic, with a focus on using modern AI tools for productivity and development.",
      image: "/certificates/aitools.jpeg",
    },
    {
      id: 5,
      name: "Communication",
      year: "2026",
      organization: "Accord Info Matrix",
      description:
        "Completed training in fundamental communication skills, covering verbal and non-verbal communication, the 7 C's of communication, active listening, feedback, conflict resolution, and interpersonal skills..",
      image: "/certificates/com.jpeg",
    },
  ];

  const handleCertificateClick = (id) => {
    if (openCertificate === id) {
      setOpenCertificate(null);
    } else {
      setOpenCertificate(id);
    }
  };

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
              EDUCATION
            </motion.p>
          </FadeInUp>

          <motion.hr
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originX: 0, borderColor: "rgba(242, 140, 0, 0.2)" }}
          />

          <FadeInUp delay={0.2}>
            <section>
              <motion.p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  paddingBottom: "0px",
                  marginBottom: "0px",
                  color: "#ffffff",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                Foundations and continued learning.
              </motion.p>
            </section>
          </FadeInUp>

          <FadeInUp delay={0.3}>
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
                A computer science background paired with certifications I keep
                current so the work stays modern.
              </motion.p>
            </section>
          </FadeInUp>
        </motion.header>

        <div className="education-container">
          <section className="education-section">
            {educationData.map((edu, index) => (
              <AnimatedCard
                className="education-card"
                key={index}
                delay={index * 0.12}
              >
                <motion.div
                  className="education-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  {edu.icon}
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  whileHover={{ color: "#f28c00" }}
                >
                  {edu.degree}
                </motion.h2>

                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {edu.college}
                </motion.h3>

                <motion.p
                  className="education-year"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {edu.year}
                </motion.p>

                <motion.p
                  className="education-description"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {edu.description}
                </motion.p>
              </AnimatedCard>
            ))}
          </section>

          <section className="certifications-section">
            <FadeInUp>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                whileHover={{ x: 10, color: "#f28c00" }}
                style={{ cursor: "default", color: "#ffffff" }}
              >
                Certifications
              </motion.h1>
            </FadeInUp>

            <div className="certifications-list">
              {certifications.map((certificate, index) => (
                <motion.div
                  className={`certificate ${
                    openCertificate === certificate.id ? "certificate-open" : ""
                  }`}
                  key={certificate.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="certificate-header"
                    onClick={() => handleCertificateClick(certificate.id)}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                    whileTap={{ scale: 0.995 }}
                  >
                    <div className="certificate-left">
                      <motion.span
                        className="certificate-icon"
                        whileHover={{
                          scale: 1.2,
                          rotate: 10,
                          transition: { duration: 0.2 },
                        }}
                      >
                        🏅
                      </motion.span>

                      <span className="certificate-name">
                        {certificate.name}
                      </span>
                    </div>

                    <div className="certificate-right">
                      <span className="certificate-year">
                        {certificate.year}
                      </span>

                      <motion.span
                        className="expand-icon"
                        animate={{
                          rotate: openCertificate === certificate.id ? -90 : 90,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        ‹
                      </motion.span>
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {openCertificate === certificate.id && (
                      <motion.div
                        className="certificate-details"
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                          transition: {
                            duration: 0.4,
                            ease: [0.04, 0.62, 0.23, 0.98],
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          y: -10,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <motion.div
                          className="certificate-image-container"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <img
                            src={certificate.image}
                            alt={certificate.name}
                            className="certificate-image"
                          />
                        </motion.div>

                        <div className="certificate-info">
                          <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                          >
                            {certificate.name}
                          </motion.h2>

                          <motion.p
                            className="certificate-organization"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25 }}
                          >
                            <strong>Issued by:</strong>{" "}
                            {certificate.organization}
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.35 }}
                          >
                            {certificate.description}
                          </motion.p>

                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                          >
                            <strong>Year:</strong> {certificate.year}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Education;
