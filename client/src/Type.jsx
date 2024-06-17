import { useState } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ReportIcon from "@mui/icons-material/Report";

const Type = ({ setIsNextActive }) => {
  const [type, setType] = useState("");

  const handleTypeClick = (type) => {
    setType(type); // Update the selected emergency type in state
    setIsNextActive(true);
  };
  return (
    <div>
      <div className="type-row">
        <div
          className={`type ${type === "medical" ? "selected" : ""}`}
          onClick={() => handleTypeClick("medical")}
        >
          <MedicalServicesIcon />
          <div className="type-title">Medical Emergency</div>
        </div>
        <div
          className={`type ${type === "security" ? "selected" : ""}`}
          onClick={() => handleTypeClick("security")}
        >
          <SecurityIcon />
          <div className="type-title">Security Threat</div>
        </div>
      </div>
      <div className="type-row">
        <div
          className={`type ${type === "road" ? "selected" : ""}`}
          onClick={() => handleTypeClick("road")}
        >
          <DirectionsCarIcon />
          <div className="type-title">Road Accident</div>
        </div>
        <div
          className={`type ${type === "harassment" ? "selected" : ""}`}
          onClick={() => handleTypeClick("harassment")}
        >
          <ReportIcon />
          <div className="type-title">Harassment/ Assault</div>
        </div>
      </div>
    </div>
  );
};

export default Type;
