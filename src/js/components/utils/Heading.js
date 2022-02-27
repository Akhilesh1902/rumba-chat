import React from "react";

function Heading({ fs, color, content }) {
  const HStyle = { color: color, fontSize: fs, textAlign: "center" };
  return (
    <div
      className="grid"
      style={{ display: "grid", placeItems: "center", height: "100%" }}
    >
      <h1 style={HStyle}>{content}</h1>
    </div>
  );
}

export default Heading;
