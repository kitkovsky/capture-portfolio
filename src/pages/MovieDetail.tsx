import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import getMovies from "../global/getMovies";
import athlete from "../img/athlete-small.png";

const MovieDetail: React.FC = () => {
  const navigate = useNavigate();
  const url = useLocation();
  console.log(athlete);
  const [movies, setMovies] = useState(getMovies);
  return (
    <div>
      <h1>movie detail</h1>
    </div>
  );
};

export default MovieDetail;
