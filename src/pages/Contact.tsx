import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../global/animations";
import styled from "styled-components";

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  h2 {
    color: white;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;

  h2 {
    margin: 2rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: palegreen;
`;

const Contact: React.FC = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Send us a message.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Send an email.</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <h2>Our social media.</h2>
          </Social>
        </Hide>
      </div>
    </StyledContact>
  );
};

export default Contact;
