// src/components/HeroSection/HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import heroImage from "../../assets/Hero-main.png";
import Arrowimg from "../../assets/Group-9.svg";
import Circletriangle from "../../assets/Circle_triangle.svg";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const { scrollY } = useScroll();

  // Hero-left (arrows + image) - moves up and fades
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  // Social icons - slightly less movement for parallax
  const socialsY = useTransform(scrollY, [0, 500], [0, -70]);
  const socialsOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  // Name letters - slightly more subtle movement
  const nameY = useTransform(scrollY, [0, 500], [0, -100]);
  const nameOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section id="home">
      <section className="hero-section">
        <div className="hero-content">
          {/* Rotating Circles Background */}
          <section className="Circles_component">
            <img
              src={Circletriangle}
              alt="Circletriangle"
              className="Circletriangle"
            />
          </section>

          {/* LEFT SIDE — Hero Image + Arrows */}
          <motion.div
            className="hero-left"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="arrow-design">
              <svg className="arrow arrow1" viewBox="0 0 100 80">
                <polygon points="35,10 10,35 35,60 70,60 45,35 70,10" />
              </svg>
              <img src={heroImage} alt="Alan Roy" className="hero-image" />

              <svg className="arrow arrow2" viewBox="0 0 80 80">
                <polygon points="35,10 10,35 35,60 60,60 35,35 60,10" />
              </svg>

              <svg className="arrow arrow3" viewBox="0 0 80 80">
                <polygon points="35,10 10,35 35,60 60,60 35,35 60,10" />
              </svg>
            </div>
          </motion.div>

          {/* RIGHT SIDE — Name + Socials */}
          <div className="hero-right">
            <motion.img
              src={Arrowimg}
              alt="Arrow"
              className="Arrow-image"
              style={{ y: socialsY, opacity: socialsOpacity }}
            />

            <motion.div
              className="hero-socials"
              style={{ y: socialsY, opacity: socialsOpacity }}
            >
              <FaLinkedinIn />
              <FaInstagram />
              <FaFacebookF />
              <FaGithub />
              <FaEnvelope />
            </motion.div>

            <motion.h1
              className="hero-name"
              style={{ y: nameY, opacity: nameOpacity }}
            >
              <section className="hero-name-section">
                <div className="hero_Firstname">
                  {"Alan".split("").map((char, i) => (
                    <span key={i} className="char firstname">
                      {char}
                    </span>
                  ))}
                </div>
                <div className="hero_Lastname">
                  {"Roy".split("").map((char, i) => (
                    <span key={i} className="char lastname">
                      {char}
                    </span>
                  ))}
                </div>
              </section>
            </motion.h1>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="scroll-down"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </motion.div>
      </section>
    </section>
  );
};

export default HeroSection;
