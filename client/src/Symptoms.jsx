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
    <div className="symptoms">
      <div className="symptom-row">
        <div
          className={`symptom ${
            selectedSymptoms.includes("Rapid heartbeat") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Rapid heartbeat")}
        >
          <div className="symptom-title">Rapid heartbeat</div>
        </div>
        <div
          className={`symptom ${
            selectedSymptoms.includes("Sweating") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Sweating")}
        >
          <div className="symptom-title">Sweating</div>
        </div>
      </div>
      <div className="symptom-row">
        <div
          className={`symptom ${
            selectedSymptoms.includes("Nausea") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Nausea")}
        >
          <div className="symptom-title">Nausea</div>
        </div>
        <div
          className={`symptom ${
            selectedSymptoms.includes("Breathless") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Breathless")}
        >
          <div className="symptom-title">Breathless</div>
        </div>
      </div>
      <div className="symptom-row">
        <div
          className={`symptom ${
            selectedSymptoms.includes("Other") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("Other")}
        >
          <div className="symptom-title">Other</div>
        </div>
        <div
          className={`symptom ${
            selectedSymptoms.includes("None") ? "selected" : ""
          }`}
          onClick={() => handleSymptomClick("None")}
        >
          <div className="symptom-title">None</div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
