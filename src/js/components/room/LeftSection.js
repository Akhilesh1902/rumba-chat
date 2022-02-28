import React from "react";

function LeftSection() {
  return (
    <div className="left-section">
      <h1 className="contacts-heading">
        <span>Contacts</span>
      </h1>
      <div className="room-contact-list">
        <div className="room-contact">
          <img
            alt="profile image for contact icon"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="room-image"
          />
          <div className="room-contactDetails">
            <h1 className="room-text07">Contact1</h1>
            <span className="room-text08">Online Status :</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
