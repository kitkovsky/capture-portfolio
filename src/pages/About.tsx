import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { fastPageAnimation } from "../global/animations";
import ScrollTop from "../components/ScrollTop";

const AboutUs: React.FC = () => {
  return (
    <motion.div
      variants={fastPageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
