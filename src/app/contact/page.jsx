"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { motion } from "framer-motion";
import "./contact.css"
import {
  AnimatedPage,
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  AnimatedButton,
  AnimatedCard,
} from "../../components/AnimatedComponents";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sangeethwills", size: 32, color: "#8a8aa0" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/sangeeth67/", size: 32, color: "#8a8aa0" },
    { icon: MdWhatsapp, href: "https://wa.me/7538823783", size: 34, color: "#8a8aa0" },
  ];

  const contactCards = [
    { icon: "📩", text: "sangeethmca67@gmail.com" },
    { icon: "📞", text: "+91 75388 23783" },
    { icon: "⟟", text: "Chennai, India" },
  ];

  return (
    <AnimatedPage>
      <div className="page-shell">
        <section className="contact-section">
          <div className="contact-heading">
            <FadeInUp delay={0.1}>
              <motion.p
                className="contact-label"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                CONTACT
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
                  Let's build something together.
                </motion.span>
              </motion.h1>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <motion.p
                className="contact-description"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm currently open to opportunities in Java Full Stack Development. 
                Whether you're a recruiter, hiring manager, developer, or potential collaborator, 
                I'd be happy to connect.
              </motion.p>
            </FadeInUp>
          </div>

          <div className="contact-container">
            <FadeInLeft delay={0.2}>
              <div className="contact-info">
                {contactCards.map((card, index) => (
                  <AnimatedCard
                    className="contact-card"
                    key={index}
                    delay={index * 0.12}
                  >
                    <motion.span
                      className="contact-icon"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.12 + 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                      whileHover={{
                        scale: 1.3,
                        rotate: 10,
                        color: "#f28c00",
                        textShadow: "0 0 15px rgba(242, 140, 0, 0.4)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {card.icon}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 + 0.2 }}
                      whileHover={{
                        x: 5,
                        color: "#f28c00",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {card.text}
                    </motion.span>
                  </AnimatedCard>
                ))}

                <motion.hr
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ originX: 0, borderColor: "rgba(242, 140, 0, 0.2)" }}
                />

                <section
                  style={{
                    paddingTop: "20px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    fontFamily: "Arial, sans-serif",
                    letterSpacing: "1px",
                    lineHeight: "1.6",
                    wordSpacing: "2px",
                  }}
                >
                  <div>
                    <motion.h2
                      style={{
                        color: "#f28c00",
                        fontSize: "20px",
                        paddingBottom: "10px",
                        textShadow: "0 0 10px rgba(242, 140, 0, 0.2)",
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      Connect with me 👇🏻
                    </motion.h2>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "25px",
                      alignItems: "center",
                    }}
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{
                          color: social.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          background: "var(--card-bg)",
                          border: "1px solid var(--card-border)",
                        }}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        whileHover={{
                          scale: 1.2,
                          y: -5,
                          color: "#f28c00",
                          borderColor: "#f28c00",
                          boxShadow: "0 10px 25px rgba(242, 140, 0, 0.25)",
                          rotate: 5,
                          transition: { duration: 0.25 },
                        }}
                        whileTap={{ scale: 0.9, rotate: 0 }}
                      >
                        <social.icon size={social.size} />
                      </motion.a>
                    ))}
                  </div>
                </section>
              </div>
            </FadeInLeft>

            <FadeInRight delay={0.3}>
              <motion.div
                className="contact-form-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  boxShadow: "0 20px 50px rgba(242, 140, 0, 0.1), 0 0 40px rgba(242, 140, 0, 0.05)",
                  borderColor: "rgba(242, 140, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.form
                  onSubmit={handleSubmit}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <div className="form-row">
                    <motion.div
                      className="form-group"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <motion.label
                        htmlFor="name"
                        whileHover={{ x: 3, color: "#f28c00" }}
                        transition={{ duration: 0.2 }}
                      >
                        Name
                      </motion.label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        whileFocus={{
                          scale: 1.01,
                          borderColor: "#f28c00",
                          boxShadow: "0 0 0 3px rgba(242, 140, 0, 0.1)",
                          transition: { duration: 0.2 },
                        }}
                      />
                    </motion.div>

                    <motion.div
                      className="form-group"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <motion.label
                        htmlFor="email"
                        whileHover={{ x: 3, color: "#f28c00" }}
                        transition={{ duration: 0.2 }}
                      >
                        Email
                      </motion.label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        whileFocus={{
                          scale: 1.01,
                          borderColor: "#f28c00",
                          boxShadow: "0 0 0 3px rgba(242, 140, 0, 0.1)",
                          transition: { duration: 0.2 },
                        }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="form-group message-group"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <motion.label
                      htmlFor="message"
                      whileHover={{ x: 3, color: "#f28c00" }}
                      transition={{ duration: 0.2 }}
                    >
                      Message
                    </motion.label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      whileFocus={{
                        scale: 1.005,
                        borderColor: "#f28c00",
                        boxShadow: "0 0 0 3px rgba(242, 140, 0, 0.1)",
                        transition: { duration: 0.2 },
                      }}
                    ></motion.textarea>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <motion.button
                      type="submit"
                      className="send-button"
                      whileHover={{
                        scale: 1.02,
                        y: -2,
                        backgroundColor: "#ffa726",
                        boxShadow: "0 10px 30px rgba(242, 140, 0, 0.4)",
                        transition: { duration: 0.25 },
                      }}
                      whileTap={{ scale: 0.98, y: 0 }}
                      animate={isSubmitting ? {
                        scale: [1, 1.05, 1],
                        transition: { duration: 0.5, repeat: Infinity },
                      } : {}}
                    >
                      <motion.span
                        animate={isSubmitting ? {
                          x: [0, 3, 0],
                          transition: { duration: 0.5, repeat: Infinity },
                        } : {}}
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </motion.form>
              </motion.div>
            </FadeInRight>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Contactpage;
