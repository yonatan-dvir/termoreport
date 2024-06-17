import React from "react";
import { useState, useEffect } from "react";

const Symptoms = ({ setIsNextActive }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  useEffect(() => {
    console.log("setting to true");
    setIsNextActive(true);
    document.querySelector(".center-button").innerHTML = "Skip";
  }, []);

  const handleSymptomClick = (symptom) => {
    setSelectedSymptoms((prevSelectedSymptoms) => {
      if (prevSelectedSymptoms.includes(symptom)) {
        return prevSelectedSymptoms.filter((s) => s !== symptom);
      } else {
        return [...prevSelectedSymptoms, symptom];
      }
    });
    setIsNextActive(true);
    document.querySelector(".center-button").innerHTML = "Next";
  };

  return (
    <div className="groups">
      <div className="group-row">
        <div
          className={`group ${
            selectedSymptoms.includes("Rapid heartbeat") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Rapid heartbeat")}
        >
          <div className="emergency-title">Rapid heartbeat</div>
        </div>
        <div
          className={`group ${
            selectedSymptoms.includes("Sweating") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Sweating")}
        >
          <div className="group-title">Sweating</div>
        </div>
      </div>
      <div className="group-row">
        <div
          className={`group ${
            selectedSymptoms.includes("Nausea") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Nausea")}
        >
          <div className="group-title">Nausea</div>
        </div>
        <div
          className={`group ${
            selectedSymptoms.includes("Breathless") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Breathless")}
        >
          <div className="group-title">Breathless</div>
        </div>
      </div>
      <div className="group-row">
        <div
          className={`group ${
            selectedSymptoms.includes("Other") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Other")}
        >
          <div className="group-title">Other</div>
        </div>
        <div
          className={`group ${
            selectedSymptoms.includes("None") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("None")}
        >
          <div className="group-title">None</div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
