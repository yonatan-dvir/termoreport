import React from "react";
import { useEffect } from "react";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";

const Summary = ({
  setPage,
  selectedType,
  selectedStep,
  selectedGroups,
  selectedPlace,
  selectedSymptoms,
  selectedActivityAffect,
  setEditMode,
  mapSrc,
  locationName,
}) => {
  useEffect(() => {
    document.querySelector(".center-button").innerHTML = "Send Alert";
    document.querySelector(".center-button").style.backgroundColor = "#0653d7";
    console.log(locationName);
  }, [locationName]);

  const handleEditClick = (step) => {
    setEditMode(true);
    setPage(step);
  };

  const urgencyLevels = [
    "Calm 😌",
    "Mild 🙂",
    "Concern 😐",
    "Worried 😟",
    "Anxious 😦",
    "Distressed 😧",
    "Fearful 😨",
    "Panicked 😰",
    "Critical 😱",
    "Alert 🚨",
  ];

  const currentLevel = urgencyLevels[Math.floor(selectedStep / 2)];

  return (
    <div className="summary-container">
      <div className="summary-block-location">
        <div className="description">
          <div className="summary-title">Location</div>
          <div className="summary-content">{locationName}</div>
        </div>
        <div className="edit">
          <iframe
            className="responsive-iframe"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={mapSrc}
          >
            {" "}
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
      </div>
      <div className="summary-block">
        <div className="description">
          <div className="summary-title">Type</div>
          <div className="summary-content">{selectedType}</div>
        </div>
        <button className="edit" onClick={() => handleEditClick("type")}>
          <ModeOutlinedIcon style={{ fontSize: 30, color: "black" }} />
        </button>
      </div>
      <div className="summary-block">
        <div className="description">
          <div className="summary-title">Urgency</div>
          <div className="summary-content">{currentLevel}</div>
        </div>
        <button
          className="edit"
          onClick={() => handleEditClick("urgencyLevel")}
        >
          <ModeOutlinedIcon style={{ fontSize: 30, color: "black" }} />
        </button>
      </div>
      <div className="summary-block">
        <div className="description">
          <div className="summary-title">Groups Involved</div>
          <div className="summary-content">
            {selectedGroups.length > 0 ? (
              selectedGroups.map((group, index) => (
                <span key={index}>
                  {group}
                  {index + 1 === selectedGroups.length ? "" : ","}{" "}
                </span>
              ))
            ) : (
              <span>None</span>
            )}
          </div>
        </div>
        <button className="edit" onClick={() => handleEditClick("groups")}>
          <ModeOutlinedIcon style={{ fontSize: 30, color: "black" }} />
        </button>
      </div>
      <div className="summary-block">
        <div className="description">
          <div className="summary-title">Place</div>
          <div className="summary-content">{selectedPlace}</div>
        </div>
        <button className="edit" onClick={() => handleEditClick("place")}>
          <ModeOutlinedIcon style={{ fontSize: 30, color: "black" }} />
        </button>
      </div>
      <div className="summary-block">
        <div className="description">
          <div className="summary-title">Symptoms</div>
          <div className="summary-content">
            {selectedSymptoms.length > 0 ? (
              selectedSymptoms.map((symptom, index) => (
                <span key={index}>
                  {symptom}
                  {index + 1 === selectedSymptoms.length ? "" : ","}{" "}
                </span>
              ))
            ) : (
              <span>None</span>
            )}
          </div>
        </div>
        <button className="edit" onClick={() => handleEditClick("symptoms")}>
          <ModeOutlinedIcon style={{ fontSize: 30, color: "black" }} />
        </button>
      </div>
      <div className="summary-block">
        <div className="description">
          <div className="summary-title">Activity Affect</div>
          <div className="summary-content">{selectedActivityAffect}</div>
        </div>
        <button
          className="edit"
          onClick={() => handleEditClick("activityAffect")}
        >
          <ModeOutlinedIcon style={{ fontSize: 30, color: "black" }} />
        </button>
      </div>
    </div>
  );
};

export default Summary;
