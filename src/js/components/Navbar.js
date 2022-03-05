import React from "react";
import { Link } from "react-router-dom";

function Navbar({ loc, handleButtonClick, socket }) {
  let tohome = false;
  if (loc === "home") {
    loc = "room";
    tohome = false;
  } else {
    tohome = true;
    loc = "home";
  }

  const burgerClick = () => {
    const menu = document.querySelector(`.home-mobile-menu`);
    menu.style.setProperty(
      "clip-path",
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
    );
    menu.style.setProperty("z-index", "2");
  };
  const crossClicked = () => {
    const menu = document.querySelector(`.home-mobile-menu`);

    menu.style.setProperty("clip-path", "polygon(0 0, 100% 0, 100% 0, 0 0)");
  };

  return (
    <header data-role="Header" className="home-header">
      <Link to={"/home"}>
        <h1>
          <span>Rumba-Chat</span>
        </h1>
      </Link>
      <div className="home-btn-group">
        {tohome ? (
          <Link to={"/home"}>
            <p
              className="home-navlink button danger"
              onClick={() => {
                socket.disconnect();
              }}
            >
              Exit-room
            </p>
          </Link>
        ) : (
          <>
            <button
              className="home-navlink4 button primary"
              onClick={handleButtonClick}
              id="join-button"
            >
              Join-room
            </button>
            <button
              className="home-navlink5 button secondary"
              onClick={handleButtonClick}
              id="create-button"
            >
              Create-room
            </button>
          </>
        )}
      </div>
      <div
        data-type="BurgerMenu"
        className="home-burger-menu"
        onClick={burgerClick}
      >
        <svg viewBox="0 0 1024 1024" className="home-icon">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>
      <div data-type="MobileMenu" className="home-mobile-menu">
        <div className="home-nav">
          <div className="home-container1">
            <div data-type="CloseMobileMenu" className="home-menu-close">
              <svg
                viewBox="0 0 1024 1024"
                className="home-icon2"
                onClick={crossClicked}
              >
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
            <div className="home-btn-group1">
              {tohome ? (
                <>
                  <Link to={"/home"}>
                    <p className="home-navlink button danger">Exit-room</p>
                  </Link>
                </>
              ) : (
                <>
                  <button
                    className="home-navlink4 button primary"
                    onClick={handleButtonClick}
                    id="join-button"
                  >
                    Join-room
                  </button>
                  <button
                    className="home-navlink5 button secondary"
                    onClick={handleButtonClick}
                    id="create-button"
                  >
                    Create-room
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
