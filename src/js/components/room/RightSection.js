import React, { useState, useEffect, useRef } from "react";

const messageArr = [];

function RightSection({ socket, roomId, userName }) {
  let [textValue, settextValue] = useState("");
  let [messages, setmessages] = useState(messageArr);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    socket.emit("join_user", { userName, roomId });
    socket.on("message", ({ text, userId, userName }) => {
      let temp = messages;
      temp.push({
        userId,
        userName,
        text,
      });
      setmessages([...temp]);
    });
  }, [socket]);

  const sendClick = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(textValue)) return;
    setScroll(!scroll);

    socket.emit("chat", textValue);
    settextValue("");
  };

  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <div className="right-section">
      <div className="room-message-container">
        {messages.map((i) => {
          if (i.userName === userName) {
            return (
              <div className="room-message-block out-going">
                <p>{i.text}</p>
                <span>{i.userName}</span>
              </div>
            );
          } else {
            return (
              <div className="room-message-block in-comming">
                <p>{i.text}</p>
                <span>{i.userName}</span>
              </div>
            );
          }
        })}
        <div ref={messageEndRef}></div>
      </div>
      <div className="room-message-form-container">
        <form onSubmit={sendClick} className="form room-message-form">
          <textarea
            rows="1"
            value={textValue}
            placeholder="Enter message here"
            className="textarea custom-textarea room-textarea"
            onChange={(e) => {
              settextValue(e.target.value);
            }}
          ></textarea>
          <button type="submit" className="room-button primary button">
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default RightSection;
