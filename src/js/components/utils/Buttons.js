import React from "react";

function Buttons({ href, state, content }) {
  const classLists = `home-navlink button ${state}`;
  return (
    <a href={href} className={classLists}>
      {content}
    </a>
  );
}

export default Buttons;
