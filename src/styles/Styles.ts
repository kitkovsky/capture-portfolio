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
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
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
  }

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
