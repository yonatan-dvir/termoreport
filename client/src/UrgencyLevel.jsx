import React, { useState, useEffect, useRef } from "react";

const UrgencyLevel = ({ setIsNextActive, selectedStep, setSelectedStep }) => {
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

  const [isDragging, setIsDragging] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(selectedStep);
  const sliderRef = useRef(null);

  useEffect(() => {
    setIsNextActive(true);
    if (
      document.querySelector(".center-button").innerHTML !== "Back to summary"
    ) {
      document.querySelector(".center-button").innerHTML = "Next";
    }
  }, []);

  useEffect(() => {
    setSliderIndex(selectedStep);
  }, [selectedStep]);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const rect = sliderRef.current.getBoundingClientRect();
    handleSliderMove(event.clientX - rect.left, rect);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const rect = sliderRef.current.getBoundingClientRect();
      handleSliderMove(event.clientX - rect.left, rect);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setSelectedStep(sliderIndex);
    }
  };

  const handleSliderMove = (offsetX, rect) => {
    const newIndex = Math.floor((offsetX / rect.width) * 20);
    if (newIndex !== sliderIndex && newIndex >= 0 && newIndex < 20) {
      setSliderIndex(newIndex);
    }
  };

  const handleTouchStart = (event) => {
    setIsDragging(true);
    const touch = event.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    handleSliderMove(touch.clientX - rect.left, rect);
  };

  const handleTouchMove = (event) => {
    if (isDragging) {
      const touch = event.touches[0];
      const rect = sliderRef.current.getBoundingClientRect();
      handleSliderMove(touch.clientX - rect.left, rect);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      setSelectedStep(sliderIndex);
    }
  };

  const currentLevel = urgencyLevels[Math.floor(sliderIndex / 2)];

  return (
    <>
      <h1>{currentLevel}</h1>
      <div
        className="urgency-level"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
      >
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className={`urgency-step ${
              sliderIndex === index ? "selected" : ""
            }`}
            style={{
              left: `calc(${(index / 20) * 100}% - 2px)`,
            }}
          >
            <div
              className={`line ${
                sliderIndex === index
                  ? index <= 7
                    ? "green"
                    : index <= 15
                    ? "yellow"
                    : "red"
                  : ""
              }`}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UrgencyLevel;
