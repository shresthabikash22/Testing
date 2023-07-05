import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); // handles darkmode/lightmode of the screen
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("dark mode has been enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("white mode has been enabled","success");

    }
  };

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        homeText="Home"
        aboutText=" About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-4">
        <TextForm heading = "Enter the text to analyze"mode ={mode} showAlert={showAlert}/>
        {/* <About mode={mode} /> */}
      </div>
    </>
  );
}

export default App;
