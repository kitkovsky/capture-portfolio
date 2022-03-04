import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10rem;

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
`;

const Logo = styled(Link)`
  font-size: 4.5rem;
  font-weight: bold;
  color: #23d997;
  cursor: pointer;
`;

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <Logo to="/about">Capture</Logo>
      <ul>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
