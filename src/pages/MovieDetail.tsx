import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import getMovies from "../global/getMovies";
import IMovie from "../global/movie.interface";
import { motion } from "framer-motion";
import { pageAnimation } from "../global/animations";

interface AwardProps {
  title: string;
  description: string;
}

const Details = styled(motion.div)`
  color: white;

  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    margin: auto;
  }
`;

const Headline = styled.div`
  min-height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    position: absolute;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    min-height: 50vh;

    img {
      height: 50vh;
    }
  }

  @media screen and (max-width: 750px) {
    min-height: 30vh;

    img {
      height: 30vh;
    }
  }

  @media screen and (max-width: 450px) {
    min-height: 15vh;

    img {
      height: 15vh;
    }
  }
`;

const Awards = styled.div`
  min-height: 30vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 750px) {
    margin: 5rem 5rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media screen and (max-width: 550px) {
    margin: 5rem 3rem;
  }
`;

const AwardStyle = styled.div`
  padding: 2.5rem;

  h3 {
    font-size: 2.5rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
  }

  @media screen and (max-width: 550px) {
    padding: 2.5rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    min-height: 40vh;
  }

  @media screen and (max-width: 650px) {
    min-height: 30vh;
  }

  @media screen and (max-width: 450px) {
    min-height: 20vh;
  }
`;

const Award: React.FC<AwardProps> = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

const MovieDetail: React.FC = () => {
  const url = useLocation().pathname;
  const [movies, setMovies] = useState(getMovies());
  const [movie, setMovie] = useState<IMovie | null>(null);

  useEffect(() => {
    const currentMovie = movies.filter((m) => m.url === url)[0];
    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          variants={pageAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Headline>
            <h2>{movie?.title}</h2>
            <img src={movie?.mainImgUrl} alt="movie" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImgUrl} alt="" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

export default MovieDetail;
