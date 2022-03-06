import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  background: rgb(20, 20, 20);

  @media screen and (max-width: 890px) {
    flex-direction: column;
  }

  @media screen and (max-width: 750px) {
    padding: 4rem 5rem;
  }

  @media screen and (max-width: 550px) {
    min-height: 50vh;
    padding: 4rem 3rem;

    .main-img {
      display: none;
    }
  }

  @media screen and (max-width: 460px) {
    h2 {
      font-size: 5rem;
    }
  }

  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    margin: auto;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }

  @media screen and (max-width: 890px) {
    padding-right: 0rem;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;

    @media screen and (max-width: 890px) {
      margin-top: 4rem;
      width: 100%;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
