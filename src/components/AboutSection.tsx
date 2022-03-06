import React from "react";
import home1 from "../img/home1.jpg";
import { About, Description, Hide, Image } from "../styles/Styles";
import { motion } from "framer-motion";
import {
  titleAnimation,
  fadeAnimation,
  photoAnimation,
} from "../global/animations";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography of videography ideas that you have. We
          have professionals ready to tackle your project.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fadeAnimation}>Contact us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          className="main-img"
          variants={photoAnimation}
          src={home1}
          alt="man holding a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
