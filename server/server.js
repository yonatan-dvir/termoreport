const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001; // Choose a port for your server

app.use(express.json());
app.use(cors()); // This enables CORS for all routes

app.get("/api/location", async (req, res) => {
  const { latitude, longitude } = req.query;
  const apiKey =
    "pk.eyJ1IjoieW9uYXRhbmR2aXIiLCJhIjoiY2xwbmF4a3NkMGo5dDJtdDN1dzVuaDY1OSJ9.yD9BaMV_sDYa1C-PtrVTmw";

  const apiUrl = `https://api.mapbox.com/search/geocode/v6/reverse?longitude=${longitude}&latitude=${latitude}&access_token=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Mapbox API request failed");
    }
    const data = await response.json();

    // Extracting the location name from Mapbox API response
    const locationName = data.features[0].properties.full_address;
    console.log(locationName);
    // Sending the location name as JSON response
    res.json({ locationName });
  } catch (error) {
    console.error("Error fetching location name:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Example route handler
app.get("/api/test", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
