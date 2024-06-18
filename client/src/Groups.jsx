import React from "react";
import { useState, useEffect } from "react";

const Groups = ({ setIsNextActive, selectedGroups, setSelectedGroups }) => {
  const handleGroupClick = (group) => {
    setSelectedGroups((prevSelectedGroups) => {
      if (prevSelectedGroups.includes(group)) {
        return prevSelectedGroups.filter((g) => g !== group);
      } else {
        return [...prevSelectedGroups, group];
      }
    });
    setIsNextActive(true);
    if (
      document.querySelector(".center-button").innerHTML !== "Back to summary"
    ) {
      document.querySelector(".center-button").innerHTML = "Next";
    }
  };

  return (
    <div className="groups">
      <div className="group-row">
        <div
          className={`group ${
            selectedGroups.includes("children") ? "selected" : ""
          }`}
          onClick={() => handleGroupClick("children")}
        >
          <div className="group-title">Children</div>
        </div>
        <div
          className={`group ${
            selectedGroups.includes("eldery") ? "selected" : ""
          }`}
          onClick={() => handleGroupClick("eldery")}
        >
          <div className="group-title">Eldery</div>
        </div>
      </div>
      <div className="group-row">
        <div
          className={`group ${
            selectedGroups.includes("LGBTQ+") ? "selected" : ""
          }`}
          onClick={() => handleGroupClick("LGBTQ+")}
        >
          <div className="group-title">LGBTQ+</div>
        </div>
        <div
          className={`group ${
            selectedGroups.includes("disabled people") ? "selected" : ""
          }`}
          onClick={() => handleGroupClick("disabled people")}
        >
          <div className="group-title">Disabled people</div>
        </div>
      </div>
      <div className="group-row">
        <div
          className={`group ${
            selectedGroups.includes("homeless") ? "selected" : ""
          }`}
          onClick={() => handleGroupClick("homeless")}
        >
          <div className="group-title">Homeless</div>
        </div>
        <div
          className={`group ${
            selectedGroups.includes("family") ? "selected" : ""
          }`}
          onClick={() => handleGroupClick("family")}
        >
          <div className="group-title">Family</div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
