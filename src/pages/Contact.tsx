import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../global/animations";

const Contact: React.FC = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>contact</h1>
    </motion.div>
  );
};

export default Contact;
