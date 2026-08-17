"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { AnimatedNavLink } from "../components/AnimatedComponents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/home") return pathname === "/" || pathname === "/home";
    return pathname?.startsWith(href);
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <div className="ferrofluid-bg">
          <div className="ferrofluid-grid"></div>
          <div className="ferrofluid-particles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <motion.header
          className={`professional-header ${scrolled ? "header-scrolled" : ""}`}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="header-container">
            <motion.a
              href="/home"
              className="logo-container"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.span
                className="logo-bracket"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {"<"}
              </motion.span>
              <motion.span
                className="logo-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{
                  color: "#f28c00",
                  textShadow: "0 0 30px rgba(242, 140, 0, 0.6)",
                  transition: { duration: 0.2 },
                }}
              >
                Sangeeth
              </motion.span>
              <motion.span
                className="logo-bracket logo-slash"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {"/>"}
              </motion.span>
              <motion.span
                className="logo-emoji"
                initial={{ opacity: 0, rotate: -180, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35, type: "spring", stiffness: 200 }}
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                🧑🏻‍💻
              </motion.span>
            </motion.a>

            <nav className="professional-nav" style={{color:"#FAF6E3"}}>
              <ul className="nav-list">
                <AnimatedNavLink href="/home" className="nav-link" index={0} isActive={isActive("/home")}>
                  Home
                </AnimatedNavLink>
                <AnimatedNavLink href="/about" className="nav-link" index={1} isActive={isActive("/about")}>
                  About
                </AnimatedNavLink>
                <AnimatedNavLink href="/education" className="nav-link" index={2} isActive={isActive("/education")}>
                  Education
                </AnimatedNavLink>
                <AnimatedNavLink href="/projects" className="nav-link" index={3} isActive={isActive("/projects")}>
                  Projects
                </AnimatedNavLink>
                <AnimatedNavLink href="/skills" className="nav-link" index={4} isActive={isActive("/skills")}>
                  Skills
                </AnimatedNavLink>
                <AnimatedNavLink href="/contact" className="nav-link" index={5} isActive={isActive("/contact")}>
                  Contact
                </AnimatedNavLink>
              </ul>
            </nav>
          </div>
          <motion.div
            className="header-bottom-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.header>

        <main className="flex-1">{children}</main>

        <motion.div
          style={{
            background: "linear-gradient(0deg, rgba(15,15,25,0.98) 0%, rgba(15,15,25,0.85) 100%)",
            borderTop: "1px solid rgba(242, 140, 0, 0.15)",
            backdropFilter: "blur(10px)",
            position: "relative",
            zIndex: 3,
          }}
          className="text-center py-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <footer>
            <motion.p
              style={{ color: "#8a8aa0", margin: 0 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ color: "#f28c00", transition: { duration: 0.2 } }}
            >
              &copy; 2026 Sangeeth Portfolio.Made With React & ❤️
            </motion.p>
          </footer>
        </motion.div>
      </body>
    </html>
  );
}
