import { useState, useEffect } from "react";

const UrgencyLevel = ({ setIsNextActive }) => {
  const [selectedStep, setSelectedStep] = useState(0);
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

  useEffect(() => {
    console.log("setting to true");
    setIsNextActive(true);
  }, []);

  const handleStepClick = (step) => {
    setSelectedStep(step);
  };

  const currentLevel = urgencyLevels[Math.floor(selectedStep / 2)];

  return (
    <>
      <h1>{currentLevel}</h1>
      <div className="urgency-level">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className={`urgency-step ${
              selectedStep === index ? "selected" : ""
            }`}
            onClick={() => handleStepClick(index)}
          >
            <div
              className={`line ${
                selectedStep === index
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
