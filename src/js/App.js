import React, { useEffect, useState } from "react";
import "../css/app.css";

import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Room from "./components/room/Room";

/**
 * react stuff
 */
export const mediaContext = React.createContext();
console.log(mediaContext);

function App() {
  const [mobile, setmobile] = useState(
    window.matchMedia("(max-width:780px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(max-width:780px)")
      .addEventListener("change", (e) => setmobile(e.matches));
  }, []);
  console.log("is mobile : " + mobile);

  document.querySelector("html");

  return (
    <>
      <mediaContext.Provider value={mobile}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/room" element={<Room />} />
          </Routes>
        </BrowserRouter>
      </mediaContext.Provider>
    </>
  );
}

export default App;
