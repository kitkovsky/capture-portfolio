import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Image } from "../styles/Styles";
import styled from "styled-components";

const Services = styled(About)`
  h2 {
    padding-bottom: 6rem;
  }

  p {
    width: 70%;
    padding-top: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      margin-right: 3rem;
      padding: 1rem;
    }
  }
`;

const ServicesSection: React.FC = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services.
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Amet rem nesciunt quo tenetur?</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="people" />
              <h3>Teamwork</h3>
            </div>
            <p>Amet rem nesciunt quo tenetur?</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="camera diaphragm" />
              <h3>Details</h3>
            </div>
            <p>Amet rem nesciunt quo tenetur?</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Amet rem nesciunt quo tenetur?</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera on a tripod" />
      </Image>
    </Services>
  );
};

export default ServicesSection;
