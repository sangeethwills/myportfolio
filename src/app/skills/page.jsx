"use client";

import React, { useState } from "react";
import "./Skills.css";
import { motion, AnimatePresence } from "framer-motion";
import {
  AnimatedPage,
  FadeInUp,
} from "../../components/AnimatedComponents";

function Skills() {
  const [openCategory, setOpenCategory] = useState(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      description:
        "Technologies I use to build responsive and interactive user interfaces.",
      skills: [
        { name: "HTML5", percentage: 90 },
        { name: "CSS3", percentage: 85 },
        { name: "JavaScript", percentage: 80 },
        { name: "React.js", percentage: 85 },
        { name: "Next.js", percentage: 70 },
        { name: "Bootstrap", percentage: 80 },
      ],
    },
    {
      title: "Backend Development",
      description:
        "Technologies I use to develop server-side applications and APIs.",
      skills: [
        { name: "Java", percentage: 80 },
        { name: "Spring Boot", percentage: 70 },
        { name: "Python", percentage: 75 },
        { name: "Flask", percentage: 75 },
        { name: "Node.js", percentage: 65 },
        { name: "REST API", percentage: 80 },
      ],
    },
    {
      title: "Database",
      description:
        "Database technologies and concepts I use for application development.",
      skills: [
        { name: "MySQL", percentage: 80 },
        { name: "SQL", percentage: 85 },
        { name: "SQLite", percentage: 70 },
        { name: "Database Design", percentage: 75 },
        { name: "CRUD Operations", percentage: 90 },
      ],
    },
    {
      title: "Programming & Concepts",
      description: "Core programming concepts and problem-solving skills.",
      skills: [
        { name: "OOP", percentage: 80 },
        { name: "Data Structures", percentage: 70 },
        { name: "Algorithms", percentage: 65 },
        { name: "Exception Handling", percentage: 80 },
        { name: "Problem Solving", percentage: 75 },
      ],
    },
    {
      title: "Tools & Technologies",
      description: "Development tools and technologies I use in my projects.",
      skills: [
        { name: "Git", percentage: 80 },
        { name: "GitHub", percentage: 85 },
        { name: "VS Code", percentage: 95 },
        { name: "Postman", percentage: 80 },
        { name: "npm", percentage: 80 },
        { name: "Swagger", percentage: 65 },
      ],
    },
    {
      title: "Cloud & Deployment",
      description: "Cloud and deployment technologies I am familiar with.",
      skills: [
        { name: "AWS", percentage: 60 },
        { name: "Vercel", percentage: 75 },
        { name: "Render", percentage: 70 },
        { name: "CI/CD", percentage: 60 },
        { name: "GitHub Actions", percentage: 60 },
      ],
    },
  ];

  const handleCategoryClick = (index) => {
    if (openCategory === index) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };

  return (
    <AnimatedPage>
      <div className="page-shell">
        <section className="skills-section">
          <div className="skills-heading">
            <FadeInUp delay={0.1}>
              <motion.p
                className="skills-label"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                SKILLS
              </motion.p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                Technologies I work with.
              </motion.h1>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <motion.p
                className="skills-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A collection of technologies and tools I use to build modern,
                responsive and scalable applications.
              </motion.p>
            </FadeInUp>
          </div>

          <div className="skills-container">
            {skillCategories.map((category, index) => (
              <motion.div
                className={`skill-category ${
                  openCategory === index ? "active" : ""
                }`}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 15px 40px rgba(242, 140, 0, 0.1)",
                  borderColor: "rgba(242, 140, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="skill-category-header"
                  onClick={() => handleCategoryClick(index)}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                  whileTap={{ scale: 0.998 }}
                >
                  <div>
                    <motion.h2
                      whileHover={{ color: "#f28c00" }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.title}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.2 }}
                    >
                      {category.description}
                    </motion.p>
                  </div>

                  <motion.span
                    className={`expand-arrow ${
                      openCategory === index ? "rotate" : ""
                    }`}
                    animate={{
                      rotate: openCategory === index ? 90 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{
                      backgroundColor: "#f28c00",
                      color: "#0a0a0f",
                      borderRadius: "50%",
                      transition: { duration: 0.25 },
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    ›
                  </motion.span>
                </motion.div>

                <AnimatePresence>
                  {openCategory === index && (
                    <motion.div
                      className="skills-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        transition: {
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          className="technology"
                          key={skillIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                              delay: skillIndex * 0.08,
                              duration: 0.4,
                            },
                          }}
                          exit={{
                            opacity: 0,
                            x: -20,
                            transition: { delay: skillIndex * 0.03 },
                          }}
                        >
                          <div className="technology-header">
                            <motion.span
                              className="technology-name"
                              whileHover={{
                                color: "#f28c00",
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                            >
                              {skill.name}
                            </motion.span>

                            <motion.span
                              className="technology-percentage"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.08 + 0.2 }}
                            >
                              {skill.percentage}%
                            </motion.span>
                          </div>

                          <div className="progress-container">
                            <motion.div
                              className="progress-bar"
                              initial={{ width: 0 }}
                              animate={{
                                width: `${skill.percentage}%`,
                                transition: {
                                  delay: skillIndex * 0.1 + 0.15,
                                  duration: 1,
                                  ease: [0.22, 1, 0.36, 1],
                                },
                              }}
                              whileHover={{
                                filter: "brightness(1.3)",
                                boxShadow: "0 0 10px rgba(242, 140, 0, 0.5)",
                                transition: { duration: 0.2 },
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}

export default Skills;
