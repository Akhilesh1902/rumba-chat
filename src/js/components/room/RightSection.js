import React, { useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/utils";
import MessageBlock from "./MessageBlock";

const LOCAL_STORAGE_KEY = "1100011";

const storedData = getLocalStorage(LOCAL_STORAGE_KEY);

const messageArr = [];
if (storedData) messageArr.push(...storedData);

function RightSection() {
  let [textValue, settextValue] = useState("");
  let [messages, setmessages] = useState(messageArr);

  useEffect(() => {
    const element = document.querySelector(".room-message-container");
    element.scrollTo({
      top: element.scrollHeight - element.clientHeight,
      behavior: "smooth",
    });
  }, [textValue]);

  const readText = (e) => {
    settextValue(e.target.value);
  };
  const clearText = () => {
    document.querySelector("textarea").value = "";
  };

  const checkEmpty = (str) => {
    return /^\s*$/.test(str);
  };

  const sendClick = (e) => {
    e.preventDefault();
    if (checkEmpty(textValue)) return;

    const status = ["in-comming", "out-going"];
    const rand = Math.floor(Math.random() + 0.5);
    let key = Math.floor(Date.now() * Math.random());
    messageArr.push({ status: status[rand], textValue, key });
    setmessages((messages = messageArr));
    settextValue("");
    clearText();
    console.log(messageArr);
    setLocalStorage(LOCAL_STORAGE_KEY, messageArr);
  };

  return (
    <div className="right-section">
      <div className="room-message-container">
        {messages.map((message) => {
          return (
            <MessageBlock
              status={message.status}
              textValue={message.textValue}
              key={message.key}
            />
          );
        })}
        {/* <MessageBlock status="out-going" textValue="test" id="00001" />
        <MessageBlock status="in-comming" textValue="test" id="020202" /> */}
      </div>
      <div className="room-message-form-container">
        <form onSubmit={sendClick} className="form room-message-form">
          <textarea
            rows="1"
            placeholder="Enter message here"
            className="textarea custom-textarea room-textarea"
            onChange={readText}
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
