import React from "react";
import home1 from "../img/home1.jpg";
import { About, Description, Hide, Image } from "../styles/Styles";

const AboutSection: React.FC = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography of videography ideas that you have. We
          have professionals ready to tackle your project.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="man holding a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
