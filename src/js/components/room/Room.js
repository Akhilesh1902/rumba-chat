import React, { useContext } from "react";
import Navbar from "../Navbar";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { mediaContext } from "../../App";
/**
 * agora stuff
 */

/**
 * react stuff
 */

function Room() {
  const mobile = useContext(mediaContext);
  console.log(mobile);
  /**
   * message handeling
   */

  return (
    <>
      <Navbar loc="room" isMobile={mobile} />
      <div className="room-container">
        <LeftSection />

        <RightSection />
      </div>
    </>
  );
}

export default Room;
