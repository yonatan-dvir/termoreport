import React from "react";
import { useState, useEffect } from "react";

const ActivityAffect = ({ setIsNextActive }) => {
  const [selectedActivityAffect, setSelectedActivityAffect] = useState("");

  useEffect(() => {
    console.log("setting to true");
    setIsNextActive(true);
    document.querySelector(".center-button").innerHTML = "Skip";
  }, []);

  const handleActivityAffectClick = (activityAffect) => {
    setSelectedActivityAffect(activityAffect);
    setIsNextActive(true);
    document.querySelector(".center-button").innerHTML = "Next";
  };

  return (
    <div className="activityAffects">
      <div className="activityAffect-row">
        <div
          className={`activityAffect ${
            selectedActivityAffect === "Not at all" ? "selected" : ""
          }`}
          onClick={() => handleActivityAffectClick("Not at all")}
        >
          <div className="activityAffect-title">Not at all</div>
        </div>
      </div>
      <div className="activityAffect-row">
        <div
          className={`activityAffect ${
            selectedActivityAffect === "Slightly" ? "selected" : ""
          }`}
          onClick={() => handleActivityAffectClick("Slightly")}
        >
          <div className="activityAffect-title">Slightly</div>
        </div>
      </div>
      <div className="activityAffect-row">
        <div
          className={`activityAffect ${
            selectedActivityAffect === "Completely" ? "selected" : ""
          }`}
          onClick={() => handleActivityAffectClick("Completely")}
        >
          <div className="activityAffect-title">Completely</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityAffect;
