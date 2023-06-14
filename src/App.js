import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState("Enable Dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyclasses = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }
  const toggleMode1 = (cls) => {
    removeBodyclasses();
    document.body.classList.add('bg-'+cls)
  }
  const toggleMode = ()=>{
    removeBodyclasses();
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#444856';
      setBtnText("Enable Light mode");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnText("Enable dark mode");
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <BrowserRouter>
      <>
        <Navbar title='TextUtils1' aboutText='About TextUtils' btnText={btnText} mode={mode} toggleMode1={toggleMode1} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform showAlert={showAlert} heading='Enter the text to Capitalize' mode={mode} />} />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
