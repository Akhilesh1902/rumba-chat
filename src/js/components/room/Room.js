import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Room({ socket }) {
  let { id, name } = useParams();

  return (
    <>
      <Navbar loc="room" socket={socket} roomId={id} />
      <div className="room-container">
        <LeftSection userName={name} />

        <RightSection socket={socket} roomId={id} userName={name} />
      </div>
    </>
  );
}

export default Room;
