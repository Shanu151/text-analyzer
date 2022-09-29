import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import States from "./Components/States";

function App() {
  const [mode, setMode] = useState("light");
  

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor="rgb(52 58 64 / 93%)";
  
    } else {
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  };
  return (
    <>
      <Navbar
        title="Text Analyzer"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
      <States heading="Enter the text to analyze below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
