import React from "react";

function LeftSection({ userName }) {
  return (
    <div className="left-section">
      <h1 className="contacts-heading">
        <span>Members Joined</span>
      </h1>
      <div className="room-contact-list">
        <div className="room-contact">
          {/* <img
            alt="contact profile icon"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="room-image"
          /> */}
          <div className="room-contactDetails">
            <h1 className="room-text07">{userName}</h1>
            {/* <span className="room-text08">Online Status :</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
