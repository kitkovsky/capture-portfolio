import React from "react";

const FaqSection: React.FC = () => {
  return (
    <div className="faq">
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Amet quam illum consequatur sed.</p>
          <p>Lorem labore at ratione id consequuntur. Tempora fugit odio quis.</p>
        </div>
      </div>
      <div className="question">
        <h4>Daily schedule</h4>
        <div className="answer">
          <p>Amet quam illum consequatur sed.</p>
          <p>Lorem labore at ratione id consequuntur. Tempora fugit odio quis.</p>
        </div>
      </div>
      <div className="question">
        <h4>Diferrent payment methods</h4>
        <div className="answer">
          <p>Amet quam illum consequatur sed.</p>
          <p>Lorem labore at ratione id consequuntur. Tempora fugit odio quis.</p>
        </div>
      </div>
      <div className="question">
        <h4>What products do you offer</h4>
        <div className="answer">
          <p>Amet quam illum consequatur sed.</p>
          <p>Lorem labore at ratione id consequuntur. Tempora fugit odio quis.</p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
