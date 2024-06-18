import React from "react";
import { useEffect } from "react";

const CalmDown = ({ setIsNextActive }) => {
  useEffect(() => {
    setIsNextActive(true);
    document.querySelector(".center-button").innerHTML = "Next";
  }, []);

  return (
    <div className="calmDown">
      <div className="calmDown-greeting">Hey George</div>
      <div className="calmDown-message">
        Take a deep breath
        <br />
        Calm down,
      </div>
    </div>
  );
};

export default CalmDown;
