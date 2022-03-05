import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

const Toggle: React.FC<Props> = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
