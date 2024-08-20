import Routes from "./Routes/Routes"
import React, { useState, useEffect } from 'react';
import Store from "./Store/Store";
import { Provider } from "react-redux";
import Navbar from './Components/Navbar/Navbar';
import "./Components/Darkmode/Darkmode.css"
import Footer from "./Components/Footer/Footer";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);


  return(
    <>
        
     <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <Provider store={Store}>
    <Routes/>
    </Provider>
    <Footer />
    </>
    
  )
}
