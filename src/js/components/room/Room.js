import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Room({ socket }) {
  let { id, name } = useParams();

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
