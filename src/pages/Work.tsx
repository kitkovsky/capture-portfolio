import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theRacer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1.5re, 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

h2 {
  color: white;
}
`;

const Work: React.FC = () => {
  return (
    <StyledWork>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theRacer} alt="the racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodTimes} alt="good times" />
        </Link>
      </Movie>
    </StyledWork>
  );
};

export default Work;
