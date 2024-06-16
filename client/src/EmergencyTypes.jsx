import { useState } from "react";
import SecurityIcon from "@mui/icons-material/Security";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ReportIcon from "@mui/icons-material/Report";

function EmergencyTypes({ setIsNextActive }) {
  const [emergencyType, setEmergencyType] = useState("");

  const handleEmergencyClick = (type) => {
    setEmergencyType(type); // Update the selected emergency type in state
    setIsNextActive(true);
  };
  return (
    <div>
      <div className="emergency-type-row">
        <div
          className={`emergency-type ${
            emergencyType === "medical" ? "selected" : ""
          }`}
          onClick={() => handleEmergencyClick("medical")}
        >
          <MedicalServicesIcon />
          <div className="emergency-title">Medical Emergency</div>
        </div>
        <div
          className={`emergency-type ${
            emergencyType === "security" ? "selected" : ""
          }`}
          onClick={() => handleEmergencyClick("security")}
        >
          <SecurityIcon />
          <div className="emergency-title">Security Threat</div>
        </div>
      </div>
      <div className="emergency-type-row">
        <div
          className={`emergency-type ${
            emergencyType === "road" ? "selected" : ""
          }`}
          onClick={() => handleEmergencyClick("road")}
        >
          <DirectionsCarIcon />
          <div className="emergency-title">Road Accident</div>
        </div>
        <div
          className={`emergency-type ${
            emergencyType === "harassment" ? "selected" : ""
          }`}
          onClick={() => handleEmergencyClick("harassment")}
        >
          <ReportIcon />
          <div className="emergency-title">Harassment/ Assault</div>
        </div>
      </div>
    </div>
  );
}

export default EmergencyTypes;
