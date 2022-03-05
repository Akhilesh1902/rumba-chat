import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Room({ socket }) {
  // console.log(match);
  // console.log(useParams());
  let { id, name } = useParams();
  // let loc = useLocation();

  console.log(name);
  console.log(id);
  return (
    <>
      <Navbar loc="room" socket={socket} />
      <div className="room-container">
        <LeftSection />

        <RightSection socket={socket} roomId={id} userName={name} />
      </div>
    </>
  );
}

export default Room;
