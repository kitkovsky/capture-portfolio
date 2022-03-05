import React from "react";
import styled from "styled-components";
import { About } from "../styles/Styles";
import ToggleFaq from "./ToggleFaq";
import { AnimateSharedLayout } from "framer-motion";
import { UseScroll } from "./UseScroll";
import { fadeAnimation } from "../global/animations";

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
  const [element, controls] = UseScroll();
  return (
    <Faq variants={fadeAnimation} ref={element} animate={controls}>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <ToggleFaq title="How do I start?">
          <div className="answer">
            <p>Amet quam illum consequatur sed.</p>
            <p>
              Lorem labore at ratione id consequuntur. Tempora fugit odio quis.
            </p>
          </div>
        </ToggleFaq>
        <ToggleFaq title="What's your daily schedule?">
          <div className="answer">
            <p>Amet quam illum consequatur sed.</p>
            <p>
              Lorem labore at ratione id consequuntur. Tempora fugit odio quis.
            </p>
          </div>
        </ToggleFaq>
        <ToggleFaq title="What products do you offer?">
          <div className="answer">
            <p>Amet quam illum consequatur sed.</p>
            <p>
              Lorem labore at ratione id consequuntur. Tempora fugit odio quis.
            </p>
          </div>
        </ToggleFaq>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;
