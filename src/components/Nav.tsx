import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10rem;
  position: sticky;
  backdrop-filter: blur(20px);
  top: 0;
  z-index: 3;

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;

    li {
      padding-left: 10rem;
      position: relative;
    }

    a {
      color: white;
      text-decoration: none;
    }
  }

  @media screen and (max-width: 750px) {
    padding: 0rem 5rem;
  }

  @media screen and (max-width: 550px) {
    padding: 0rem 3rem;
  }

  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    padding: 0 auto;
  }
`;

const Logo = styled(Link)`
  font-size: 4.5rem;
  font-weight: bold;
  color: #23d997;
  cursor: pointer;
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -20%;
`;

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Logo to="/about">Capture</Logo>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "40%" : "" }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "40%" : "" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "40%" : "" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
