import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection: React.FC = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services.
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Amet rem nesciunt quo tenetur?</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="people" />
              <h3>Teamwork</h3>
            </div>
            <p>Amet rem nesciunt quo tenetur?</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="camera diaphragm" />
              <h3>Details</h3>
            </div>
            <p>Amet rem nesciunt quo tenetur?</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Amet rem nesciunt quo tenetur?</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="camera on a tripod" />
      </div>
    </div>
  );
};

export default ServicesSection;
