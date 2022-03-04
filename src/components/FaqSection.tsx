import React from "react";
import styled from "styled-components";
import { About } from "../styles/Styles";

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  h4 {
    font-size: 3rem;
  }

  .faq-line {
    background: #cccccc;
    height: 0.4rem;
    margin: 2rem 0rem;
    width: 100%;
  }

  .question {
    padding: 4rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2.5rem 0rem;

    p {
      padding: 1.3rem 0rem;
    }
  }
`;

const FaqSection: React.FC = () => {
  return (
    <Faq>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Amet quam illum consequatur sed.</p>
          <p>
            Lorem labore at ratione id consequuntur. Tempora fugit odio quis.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What's your daily schedule?</h4>
        <div className="answer">
          <p>Amet quam illum consequatur sed.</p>
          <p>
            Lorem labore at ratione id consequuntur. Tempora fugit odio quis.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What products do you offer?</h4>
        <div className="answer">
          <p>Amet quam illum consequatur sed.</p>
          <p>
            Lorem labore at ratione id consequuntur. Tempora fugit odio quis.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

export default FaqSection;
