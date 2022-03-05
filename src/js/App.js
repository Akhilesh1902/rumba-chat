import React from "react";
import "../css/app.css";

import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Room from "./components/room/Room";
import { io } from "socket.io-client";

/**
 * Agora Stuff
 */

/**
 * react stuff
 */
const socket = io.connect("https://rumba-chat-server.herokuapp.com/");

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home socket={socket} />} />
        {/* <Route path="/room" element={<Room roomid={roomId} />} /> */}
        {/* <Route path={roomPath} element={<Room roomid={roomId} />} /> */}
        <Route
          path={`/room/:id/:name`}
          state={`hi`}
          element={<Room socket={socket} />}
        />
      </Routes>
    </>
  );
}

export default App;
