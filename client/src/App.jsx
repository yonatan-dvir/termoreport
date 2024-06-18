import React, { useState, useEffect } from "react";
import EmergencyWindow from "./EmergencyWindow";
import WelcomeButton from "./WelcomeButton";

import "./App.css";

function App() {
  const [userCoordinates, setUserCoordinates] = useState(null);
  const [locationName, setLocationName] = useState(
    "סמטת האירוסים, Gannot Hadar, Israel"
  );
  const [showEmergencyWindow, setShowEmergencyWindow] = useState(true);

  useEffect(() => {
    const getUserLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = await position.coords.latitude;
            const longitude = await position.coords.longitude;
            setUserCoordinates({ latitude, longitude });
            console.log(latitude, longitude);
            await getLocationName(latitude, longitude);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    const getLocationName = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `http://10.0.0.19:5001/api/location?latitude=${latitude}&longitude=${longitude}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch location from server");
        }
        const data = await response.json();
        const fetchedLocationName = data.locationName;
        console.log(fetchedLocationName);
        setLocationName(fetchedLocationName);
      } catch (error) {
        console.error("Error fetching location from server:", error);
      }
    };
    // Call the function to get user's location
    getUserLocation();
  }, []);

  // Constructing the Google Maps URL with user's coordinates
  let mapSrc = `https://maps.google.com/maps?q=${userCoordinates?.latitude},${userCoordinates?.longitude}&output=embed`;

  const closeEmergencyWindow = () => {
    setShowEmergencyWindow(false);
  };

  return (
    <div className="map-container">
      {showEmergencyWindow && (
        <>
          <div
            className="overlay"
            onClick={() => {
              closeEmergencyWindow();
            }}
          ></div>
          <EmergencyWindow
            onClose={closeEmergencyWindow}
            mapSrc={mapSrc}
            locationName={locationName}
          />
        </>
      )}
      {!showEmergencyWindow && <WelcomeButton />}
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
  );
}

export default App;
