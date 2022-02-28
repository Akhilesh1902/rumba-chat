import React, { useState } from "react";
import Navbar from "../Navbar";
import JoinRoomModel from "./JoinRoomModel";

function Home() {
  const [showModal, setshowModal] = useState(false);
  const [modalProps, setmodalProps] = useState({});

  const handleButtonClick = (e) => {
    setshowModal(!showModal);
    const props = {};
    if (e.target.matches("#join-button")) {
      props.first = "Enter Your name";
      props.second = "Enter room Id";
      props.head = "Join Existing Room";
    } else if (e.target.matches("#create-button")) {
      props.first = "Enter Host name";
      props.head = "Host a Room";
    }
    setmodalProps(props);
    console.log("inside the functoion :" + modalProps);
  };
  console.log("outside the function : " + modalProps);
  return (
    <>
      <Navbar loc="home" />
      <div className="home-hero">
        <span className="home-text2">
          <span className="home-text3">Getting people together</span>
        </span>
        <h1 className="home-text4">
          <span>Connect with your Friends and</span>
          <br />
          <span>have Rumba Chat</span>
        </h1>
        <div className="home-hero-btn-container heroButtons">
          <button
            className="home-navlink4 button primary"
            onClick={handleButtonClick}
            id="join-button"
          >
            Join-room
          </button>
          <button
            className="home-navlink5 button secondary"
            onClick={handleButtonClick}
            id="create-button"
          >
            Create-room
          </button>
        </div>
        {showModal && (
          <div className="modal-overlay" onClick={handleButtonClick}>
            <JoinRoomModel
              first={modalProps.first}
              second={modalProps.second}
              head={modalProps.head}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
