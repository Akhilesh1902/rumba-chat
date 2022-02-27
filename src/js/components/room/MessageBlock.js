import React from "react";

function MessageBlock({ textValue, status, id }) {
  const messageClass = `room-message-block ${status}`;

  return (
    <>
      <div className={messageClass} key={id}>
        <span className="message-text">{textValue}</span>
      </div>
    </>
  );
}

export default MessageBlock;
