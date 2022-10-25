import "./App.css";
// import Aboutpr from './Components/Aboutpr';
import Navbar from "./Components/Navbar";
import Forms from "./Components/Forms";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode is enabled", "success");
      document.title = "TextUtils : Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "success");
      document.title = "TextUtils : Light Mode";
    }
  };
  return (
    <>
      <div className="container">
        <Navbar
          mode={Mode}
          toggleMode={toggleMode}
          title="TextUtils"
          abouttext="AboutTextUtils"
        />
        <Alert alert={alert} />
        
        <Router>
        <Routes>
          <Route exact path="/About" element={<About />}>
          </Route>
          <Route exact path="/" element={<Forms
          showAlert={showAlert}
          mode={Mode}
          heading="Enter the text you want to analyze"
        />}>
         </Route>
        </Routes>
        </Router>

        
      </div>
      {/* <Aboutpr/> */}
    </>
  );
}

export default App;
