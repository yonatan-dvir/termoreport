import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <>
        <div className="container">
          <div className="welcome-message">
            <h1>Welcome</h1>
          </div>
          <iframe
            className="responsive-iframe"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=1000&amp;hl=en&amp;q=tel%20aviv%20hashalom+(%D7%AA%D7%97%D7%A0%D7%AA%20%D7%A8%D7%9B%D7%91%D7%AA)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps systems</a>
          </iframe>
        </div>
      </>
    </>
  );
}

export default App;
