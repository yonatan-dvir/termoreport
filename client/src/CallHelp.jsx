import React from "react";
import { useEffect, useState } from "react";

const CallHelp = ({ setIsNextActive }) => {
  useEffect(() => {
    setIsNextActive(true);
    document.querySelector(".center-button").innerHTML = "Not now";
  }, []);

  const handleHelpClick = (help) => {
    setSelectedHelp(help);
    document.querySelector(".center-button").innerHTML = "Call";
    setIsNextActive(true);
  };

  const [selectedHelp, setSelectedHelp] = useState("");

  return (
    <div className="helps">
      <div className="help-row">
        <div
          className={`help ${selectedHelp === "Police" ? "selected" : ""}`}
          onClick={() => handleHelpClick("Police")}
        >
          <div className="help-title">Police</div>
        </div>
      </div>
      <div className="help-row">
        <div
          className={`help ${selectedHelp === "Ambulance" ? "selected" : ""}`}
          onClick={() => handleHelpClick("Ambulance")}
        >
          <div className="help-title">Ambulance</div>
        </div>
      </div>
      <div className="help-row">
        <div
          className={`help ${
            selectedHelp === "FireFighters" ? "selected" : ""
          }`}
          onClick={() => handleHelpClick("FireFighters")}
        >
          <div className="help-title">FireFighters</div>
        </div>
      </div>
    </div>
  );
};

export default CallHelp;
