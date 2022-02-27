import React, { useEffect, useState } from "react";
import AgoraRTM from "agora-rtm-sdk";
import { APP_ID } from "./agora/env";
import "../css/app.css";

import Home from "./components/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Room from "./components/room/Room";

/*
 * agora stuff
 */

// async function initiate(appid, token, uid, room) {
//   let rtmClient = await AgoraRTM.createInstance(appid, {
//     enableLogUpload: false,
//   });
//   console.log(rtmClient);
//   await rtmClient.login({ uid, token });

//   createChannel(rtmClient, room);
//   // const channel = await rtmClient.createChannel(room);
//   // await channel.join();
// }

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

  useEffect(async () => {
    console.log("App id is : " + APP_ID);
    const appid = APP_ID;
    const token = null;
    const uid = String(Math.floor(Math.random() * 11000001));
    // console.log(uid);
    let room = "default";

    // initiate(appid, token, uid, room);
  }, []);

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
