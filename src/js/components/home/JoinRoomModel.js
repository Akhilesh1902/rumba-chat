import React, { useState } from "react";

function JoinRoomModel({ first, second, head }) {
  let double = second ? true : false;

  console.log(first, second);
  return (
    <div className="join-room-modal">
      <h1>{head}</h1>
      <form className="join-room-modal-form">
        <div>
          <div>
            <label htmlFor="joining-use-name">
              <h5>{first}</h5>
            </label>
            <input
              id="joining-user-name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          {double && (
            <div>
              <label htmlFor="joining-use-name">
                <h5>{second}</h5>
              </label>
              <input
                id="joining-user-name"
                type="text"
                placeholder="Enter room ID"
                required
              />
            </div>
          )}

          <button type="submit" className="button primary ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default JoinRoomModel;
