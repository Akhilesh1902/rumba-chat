import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function JoinRoomModel({ first, second, head, socket }) {
  let double = second ? true : false;
  let [firstInput, setfirstInput] = useState("");
  let [secondInput, setsecondInput] = useState("");
  const [roomPath, setRoomPath] = useState("");

  return (
    <div className="join-room-modal">
      <h1>{head}</h1>
      <div className="join-room-modal-form">
        <div>
          {!double && (
            <div>
              <label htmlFor="joining-use-name">
                <h5>{first}</h5>
              </label>
              <input
                value={firstInput}
                id="joining-user-name"
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => {
                  setfirstInput(e.target.value);
                  setRoomPath(
                    e.target.value + Math.floor(Math.random() * 100001)
                  );
                }}
              />
            </div>
          )}

          {double && (
            <>
              <div>
                <label htmlFor="joining-use-name">
                  <h5>{first}</h5>
                </label>
                <input
                  value={firstInput}
                  id="joining-user-name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => {
                    setfirstInput(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="joining-use-name">
                  <h5>{second}</h5>
                </label>
                <input
                  value={secondInput}
                  id="joining-user-name"
                  type="text"
                  placeholder="Enter room ID"
                  required
                  onChange={(e) => {
                    setsecondInput(e.target.value);
                    setRoomPath(e.target.value);
                  }}
                />
              </div>
            </>
          )}
          <Link
            to={{
              pathname: `/room/${roomPath}/${firstInput}`,
              state: { name: "hii" },
            }}
          >
            <button type="submit" className="button primary ">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default JoinRoomModel;
