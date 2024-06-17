import { useState } from "react";
import Type from "./Type";
import UrgencyLevel from "./UrgencyLevel";
import CancelIcon from "@mui/icons-material/Cancel";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import Groups from "./Groups";
import Place from "./Place";
import Symptoms from "./Symptoms";
import ActivityAffect from "./ActivityAffect";

function EmergencyWindow() {
  const [page, setPage] = useState("type");
  const [isNextActive, setIsNextActive] = useState(false);

  const handleNextClick = () => {
    if (!isNextActive) {
      return;
    }

    switch (page) {
      case "type":
        setPage("urgencyLevel");
        break;
      case "urgencyLevel":
        setPage("groups");
        break;
      case "groups":
        setPage("place");
        break;
      case "place":
        setPage("symptoms");
        break;
      case "symptoms":
        setPage("activityAffect");
        break;
      case "activityAffect":
        setPage("summary");
        break;
      default:
        break;
    }
    setIsNextActive(false);
  };

  return (
    <div className="emergency-window">
      <button className="cancel-button">
        <CancelIcon style={{ fontSize: 40 }} />
      </button>
      {page === "type" && (
        <>
          <h2>Type of emergency</h2>
          <Type setIsNextActive={setIsNextActive} />
        </>
      )}
      {page === "urgencyLevel" && (
        <>
          <h2>Level of Urgency</h2>
          <UrgencyLevel setIsNextActive={setIsNextActive} />
        </>
      )}
      {page === "groups" && (
        <>
          <h2>Any specific groups?</h2>
          <Groups setIsNextActive={setIsNextActive} />
        </>
      )}
      {page === "place" && (
        <>
          <h2>Place of the incident</h2>
          <Place setIsNextActive={setIsNextActive} />
        </>
      )}
      {page === "symptoms" && (
        <>
          <h2>Are you experiencing any phusical symptoms?</h2>
          <Symptoms setIsNextActive={setIsNextActive} />
        </>
      )}
      {page === "activityAffect" && (
        <>
          <h2>Is the incident affecting your daily activities?</h2>
          <ActivityAffect setIsNextActive={setIsNextActive} />
        </>
      )}
      {page === "summary" && <h2>Summary</h2>}
      <div className="nav-buttons">
        <button className="side-button">
          <CameraAltOutlinedIcon />
        </button>
        <button
          className={`center-button ${isNextActive ? "" : "disabled"}`}
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
