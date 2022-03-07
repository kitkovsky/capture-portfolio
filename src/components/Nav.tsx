import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

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

  ul.show {
    transform: translateX(0%);
  }

  button.show {
    z-index: 4;
  }

  @media screen and (max-width: 850px) {
    ul {
      transition: all 0.7s cubic-bezier(0.33, 1, 0.68, 1);
      transform: translateX(100%);
      background: rgb(20, 20, 20);
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 10rem 0rem;

      li {
        padding-left: 0;

        a {
          font-size: 5rem;
        }

        div {
          height: 0.5rem;
        }
      }
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

const HamburgerButton = styled.button`
  display: none;
  background-color: transparent;
  border: 0;

  &:hover {
    background-color: transparent;
  }

  @media screen and (max-width: 850px) {
    display: block;
  }
`;

const Nav: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useLocation();
  const body = document.querySelector("body") as HTMLBodyElement;
  const html = document.querySelector("html") as HTMLElement;

  const handleMobileNav = () => {
    setIsNavOpen(!isNavOpen);
    body.classList.toggle("no-scroll");
    html.classList.toggle("no-scroll");
  };

  const handleClosingMobileNav = () => {
    body.classList.remove("no-scroll");
    html.classList.remove("no-scroll");
    setIsNavOpen(false);
  };

  return (
    <StyledNav>
      <Logo to="/about">Capture</Logo>
      <HamburgerButton
        onClick={handleMobileNav}
        id="hamburger-button"
        className={isNavOpen ? "show" : ""}
      >
        <FontAwesomeIcon icon={isNavOpen ? faX : faBars} size="lg" />
      </HamburgerButton>
      <ul className={isNavOpen ? "show" : ""}>
        <li>
          <Link to="/about" onClick={handleClosingMobileNav}>
            About Us
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "40%" : "" }}
          />
        </li>
        <li>
          <Link to="/work" onClick={handleClosingMobileNav}>
            Our Work
          </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{
              width: pathname.includes("/work") ? "40%" : "",
            }}
          />
        </li>
        <li>
          <Link to="/contact" onClick={handleClosingMobileNav}>
            Contact Us
          </Link>
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
