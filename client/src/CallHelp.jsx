import React from "react";
import { useEffect } from "react";

const CallHelp = ({ setIsNextActive, selectedHelp, setSelectedHelp }) => {
  useEffect(() => {
    setIsNextActive(true);
    document.querySelector(".center-button").innerHTML = "Not now";
  }, []);

  const handleHelpClick = (help) => {
    if (selectedHelp === help) {
      setSelectedHelp(null);
      document.querySelector(".center-button").innerHTML = "Not now";
      document.querySelector(`.help.${help}`).classList.remove("selected");
    }
    setSelectedHelp(help);
    document.querySelector(".center-button").innerHTML = "Call";
    setIsNextActive(true);
  };

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
