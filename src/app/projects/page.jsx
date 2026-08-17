"use client";

import React from "react";
import "./projects.css";
import { motion } from "framer-motion";
import {
  AnimatedPage,
  FadeInUp,
  AnimatedCard,
  AnimatedButton,
} from "../../components/AnimatedComponents";

const Projectpage = () => {
  const projects = [
    {
      title: "Public Grievance Portal",
      description:
        "A web application that allows users to submit complaints and track grievance information through an online portal.",
      technologies: ["Python", "Flask", "MySQL", "HTML", "CSS"],
      github: "https://github.com/sangeethwills/grievance-portal",
      demo: "https://grievance-portal-ten-chi.vercel.app/",
    },
    {
      title: "Real Time Bus Tracking System",
      description:
        "A real-time bus tracking application designed to display bus locations and provide useful transportation information.",
      technologies: ["React", "Python", "Flask", "API"],
      github: "https://github.com/sangeethwills/realtimebustrackingsystem-/tree/main/client",
      demo: "https://realtimebustrackingsystem.vercel.app",
    },
    {
      title: "Food Items Viewer",
      description:
        "A responsive food management application for viewing, adding, editing and deleting food items.",
      technologies: ["React", "Next.js", "Axios", "JSON Server"],
      github: "https://github.com/sangeethwills/Food-Items-viewer",
      demo: "https://food-items-viewer.onrender.com/",
    },
    {
      title: "Bus Reservation System",
      description:
        "A bus reservation application that allows users to search buses, select seats and manage reservations.",
      technologies: ["Java", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/sangeethwills/busreservationsystem/tree/main/frontend",
      demo: "https://busreservationsystem-mwzo.vercel.app/",
    },
    {
      title: "Movies Ratings Viewer",
      description:
        "A web application for viewing and managing movie details, ratings, genres and release information.",
      technologies: ["React", "JavaScript", "CSS", "JSON Server"],
      github: "https://github.com/sangeethwills/Movies-Ratings-Viewer",
      
    },
    
    
  ];

  return (
    <AnimatedPage>
      <div className="page-shell">
        <section className="projects-section">
          <div className="projects-heading">
            <FadeInUp delay={0.1}>
              <motion.p
                className="projects-label"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                PROJECTS
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
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Work I'm proud to put my name on.
                </motion.span>
              </motion.h1>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <motion.p
                className="projects-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A collection of projects I've built using modern web
                technologies. Each project helped me improve my development and
                problem-solving skills.
              </motion.p>
            </FadeInUp>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <AnimatedCard
                className="project-card"
                key={index}
                delay={index * 0.1}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    whileHover={{
                      color: "#f28c00",
                      x: 5,
                      transition: { duration: 0.25 },
                    }}
                  >
                    {project.title}
                  </motion.h2>

                  <motion.p
                    className="project-description"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <div className="technology-list">
                    {project.technologies.map((technology, techIndex) => (
                      <motion.span
                        className="technology-tag"
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.3 + techIndex * 0.05,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        whileHover={{
                          scale: 1.1,
                          y: -3,
                          backgroundColor: "#f28c00",
                          color: "#0a0a0f",
                          borderColor: "#f28c00",
                          boxShadow: "0 5px 15px rgba(242, 140, 0, 0.3)",
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{
                        x: 5,
                        color: "#f28c00",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ x: 0 }}
                    >
                      <motion.span
                        className="github-icon"
                        whileHover={{
                          rotate: 360,
                          scale: 1.3,
                          transition: { duration: 0.5 },
                        }}
                      >
                        ◉
                      </motion.span>
                      Code
                    </motion.a>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      whileHover={{
                        x: 5,
                        color: "#f28c00",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ x: 0 }}
                    >
                      <motion.span
                        className="demo-icon"
                        animate={{
                          y: [0, -3, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        ↗
                      </motion.span>
                      Live demo
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Projectpage;
