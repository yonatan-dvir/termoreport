import { useState } from "react";
import EmergencyTypes from "./EmergencyTypes";
import CancelIcon from "@mui/icons-material/Cancel";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";

function EmergencyWindow() {
  const [page, setPage] = useState("emergencyType");
  const [isNextActive, setIsNextActive] = useState(false);

  const handleNextClick = () => {
    if (!isNextActive) {
      return;
    }
    if (page === "emergencyType") {
      setPage("urgencyLevel");
    } else if (page === "urgencyLevel") {
      setPage("summary");
    }
    setIsNextActive(false);
  };

  return (
    <div className="emergency-window">
      <button className="cancel-button">
        <CancelIcon style={{ fontSize: 40 }} />
      </button>
      {page === "emergencyType" && (
        <>
          <h1>Type of emergency</h1>{" "}
          <EmergencyTypes
            isNextActive={isNextActive}
            setIsNextActive={setIsNextActive}
          />
        </>
      )}
      {page === "urgencyLevel" && <h1>Level of Urgency</h1>}
      {page === "summary" && <h1>Summary</h1>}
      <div className="nav-buttons">
        <button className="side-button">
          <CameraAltOutlinedIcon />
        </button>
        <button
          className={`center-button ${isNextActive === true ? "" : "disabled"}`}
          onClick={handleNextClick}
        >
          Next
        </button>

        <button className="side-button">
          <PhoneOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default EmergencyWindow;
