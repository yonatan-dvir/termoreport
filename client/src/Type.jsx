import { useState, useEffect } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ReportIcon from "@mui/icons-material/Report";

const Type = ({ setIsNextActive, selectedType, setSelectedType }) => {
  useEffect(() => {
    document.querySelector(".center-button").innerHTML = "Next";
  }, [setIsNextActive]);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    console.log("first is " + type);
    setIsNextActive(true);
  };
  return (
    <div>
      <div className="type-row">
        <div
          className={`type ${
            selectedType === "Medical Emergency" ? "selected" : ""
          }`}
          onClick={() => handleTypeClick("Medical Emergency")}
        >
          <MedicalServicesIcon />
          <div className="type-title">Medical Emergency</div>
        </div>
        <div
          className={`type ${
            selectedType === "Security Threat" ? "selected" : ""
          }`}
          onClick={() => handleTypeClick("Security Threat")}
        >
          <SecurityIcon />
          <div className="type-title">Security Threat</div>
        </div>
      </div>
      <div className="type-row">
        <div
          className={`type ${
            selectedType === "Road Accident" ? "selected" : ""
          }`}
          onClick={() => handleTypeClick("Road Accident")}
        >
          <DirectionsCarIcon />
          <div className="type-title">Road Accident</div>
        </div>
        <div
          className={`type ${
            selectedType === "Harassment/Assault" ? "selected" : ""
          }`}
          onClick={() => handleTypeClick("Harassment/Assault")}
        >
          <ReportIcon />
          <div className="type-title">Harassment/ Assault</div>
        </div>
      </div>
    </div>
  );
};

export default Type;
