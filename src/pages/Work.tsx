import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theRacer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
  sliderAnimation,
  sliderContainerAnimation,
} from "../global/animations";
import { UseScroll } from "../components/UseScroll";

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1.5re, 0rem;
    color: white;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

const Work: React.FC = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();
  return (
    <StyledWork
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      // style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainerAnimation}>
        <Frame1 variants={sliderAnimation}></Frame1>
        <Frame2 variants={sliderAnimation}></Frame2>
        <Frame3 variants={sliderAnimation}></Frame3>
        <Frame4 variants={sliderAnimation}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie ref={element} variants={fadeAnimation} animate={controls}>
        <h2>The Racer</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theRacer} alt="the racer" />
        </Link>
      </Movie>
      <Movie ref={element2} variants={fadeAnimation} animate={controls2}>
        <h2>Good Times</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodTimes} alt="good times" />
        </Link>
      </Movie>
    </StyledWork>
  );
};

export default Work;
