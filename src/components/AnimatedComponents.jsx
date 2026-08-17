"use client";

import { motion } from "framer-motion";

export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInLeft = {
  initial: {
    opacity: 0,
    x: -50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInRight = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const textVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const staggerTextContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const hoverScale = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  whileTap: {
    scale: 0.98,
  },
};

export const hoverLift = {
  whileHover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  whileTap: {
    y: 0,
  },
};

export const navItemVariants = {
  initial: { opacity: 0, y: -10 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export const FadeInUp = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInLeft = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FadeInRight = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      variants={fadeInRight}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedButton = ({ children, className = "", onClick, href, type = "button" }) => {
  const ButtonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      className={className}
      whileHover={{
        scale: 1.03,
        y: -2,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      whileTap={{
        scale: 0.98,
        y: 0,
      }}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        whileHover={{
          scale: 1.03,
          y: -2,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
        whileTap={{
          scale: 0.98,
          y: 0,
        }}
        style={{ position: "relative", overflow: "hidden", display: "inline-flex" }}
      >
        {children}
      </motion.a>
    );
  }

  return ButtonContent;
};

export const AnimatedCard = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedText = ({ text, className = "" }) => {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={staggerTextContainer}
      initial="initial"
      animate="animate"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={textVariant}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const AnimatedNavLink = ({ href, children, className = "", index = 0, isActive = false }) => {
  return (
    <motion.li
      className="nav-item professional-nav-item"
      custom={index}
      variants={navItemVariants}
      initial="initial"
      animate="animate"
    >
      <motion.a
        href={href}
        className={`professional-nav-link ${className} ${isActive ? "active-link" : ""}`}
        whileHover={{
          y: -2,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        whileTap={{ y: 0 }}
      >
        <motion.span
          className="nav-link-text"
          animate={isActive ? { scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.span>
        {!isActive && (
          <motion.span
            className="nav-link-underline"
            initial={{ width: 0, opacity: 0 }}
            whileHover={{ width: "100%", opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        )}
      </motion.a>
    </motion.li>
  );
};
