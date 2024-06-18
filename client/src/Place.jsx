import { useState, useEffect } from "react";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import RvHookupOutlinedIcon from "@mui/icons-material/RvHookupOutlined";
import DirectionsBusFilledOutlinedIcon from "@mui/icons-material/DirectionsBusFilledOutlined";

const Place = ({ setIsNextActive, selectedPlace, setSelectedPlace }) => {

  const handlePlaceClick = (place) => {
    setSelectedPlace(place); // Update the selected place in state
    setIsNextActive(true);
    if (
      document.querySelector(".center-button").innerHTML !== "Back to summary"
    ) {
      document.querySelector(".center-button").innerHTML = "Next";
    }
  };
  return (
    <div>
      <div className="place-row">
        <div
          className={`place ${
            selectedPlace === "Public place" ? "selected" : ""
          }`}
          onClick={() => handlePlaceClick("Public place")}
        >
          <LocationCityOutlinedIcon />
          <div className="place-title">
            Public <br /> place
          </div>
        </div>
        <div
          className={`place ${
            selectedPlace === "Residential area" ? "selected" : ""
          }`}
          onClick={() => handlePlaceClick("Residential area")}
        >
          <HouseOutlinedIcon />
          <div className="place-title">Residential area</div>
        </div>
      </div>
      <div className="place-row">
        <div
          className={`place ${
            selectedPlace === "High traffic area" ? "selected" : ""
          }`}
          onClick={() => handlePlaceClick("High traffic area")}
        >
          <RvHookupOutlinedIcon />
          <div className="place-title">
            High
            <br /> traffic area
          </div>
        </div>
        <div
          className={`place ${
            selectedPlace === "Public transportation" ? "selected" : ""
          }`}
          onClick={() => handlePlaceClick("Public transportation")}
        >
          <DirectionsBusFilledOutlinedIcon />
          <div className="place-title">Public transportation</div>
        </div>
      </div>
    </div>
  );
};

export default Place;
