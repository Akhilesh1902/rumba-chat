import React, { useState, useEffect } from "react";

const messageArr = [];

function RightSection({ socket, roomId, userName }) {
  let [textValue, settextValue] = useState("");
  let [messages, setmessages] = useState(messageArr);

  useEffect(() => {
    socket.emit("join_user", { userName, roomId });
    socket.on("message", ({ text, userId, userName }) => {
      console.log(userId);
      console.log(userName);
      console.log(text);
      let temp = messages;
      temp.push({
        userId,
        userName,
        text,
      });
      setmessages([...temp]);
    });
  }, []);

  useEffect(() => {
    const element = document.querySelector(".room-message-container");
    element.scrollTo({
      top: element.scrollHeight - element.clientHeight,
      behavior: "smooth",
    });
  }, [textValue]);

  const sendClick = (e) => {
    e.preventDefault();
    if (/^\s*$/.test(textValue)) return;

    // const status = ["in-comming", "out-going"];
    // const rand = Math.floor(Math.random() + 0.5);
    // let key = Math.floor(Date.now() * Math.random());
    socket.emit("chat", textValue);
    // setmessages([...messages, { status: status[rand], textValue, key }]);
    settextValue("");
  };

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
        {/* <div ref={messageEndRef} /> */}
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
