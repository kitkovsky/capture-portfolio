import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../global/animations";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  h2,
  a {
    color: white;
    font-size: 6rem;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    margin: auto;
  }

  @media screen and (max-width: 750px) {
    padding: 5rem 5rem;

    h2,
    a {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 550px) {
    padding: 5rem 3rem;

    a {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 350px) {
    a {
      font-size: 2.5rem;
    }
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
  margin: 2rem 0rem;

  h2,
  a {
    margin: 2rem;
  }

  svg {
    font-size: 5rem;
    color: white;
    padding: 0rem 2rem;
    cursor: pointer;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: palegreen;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
            <a href="mailto:contact@capture.com">contact@capture.com</a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle></Circle>
            <SocialMedia>
              <div>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </SocialMedia>
          </Social>
        </Hide>
      </div>
    </StyledContact>
  );
};

export default Contact;
