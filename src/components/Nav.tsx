import React from "react";
import styled from "styled-components";

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

const Logo = styled.a`
  font-size: 4.5rem;
  font-weight: bold;
  color: #23d997;
`;

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <h1>
        <Logo>Capture</Logo>
      </h1>
      <ul>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Work</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Nav;
