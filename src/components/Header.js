import React from "react";

function Header({ handleActive }) {
  function MouseOver(event) {
    event.target.style.color = "#68CFCF";
  }

  function MouseOut(event) {
    event.target.style.color = "#f54e42";
  }

  return (
    <header style={HeaderStyles}>
      <div>
        Your CV
        <div style={ButtonContainer}>
          <button
            onClick={handleActive}
            onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            style={ViewStyles}
          >
            View
          </button>
        </div>
      </div>
    </header>
  );
}

const HeaderStyles = {
  position: "fixed",
  top: 0,
  width: "100%",
  boxShadow: "2px 2px 2px rgb(0 0 0 / 16%)",
  backgroundColor: "#EEE6E7",
  color: "#f54e42",
  fontSize: "36px",
  fontFamily: "Arimo",
  fontWeight: "bolder",
  padding: "15px 15px 15px 110px",
  zIndex: 10,
};

const ButtonContainer = {
  float: "right",
  marginRight: "20px",
};

const ViewStyles = {
  cursor: "pointer",
  fontFamily: "Arimo",
  fontSize: "23px",
  border: "none",
  background: "none",
  fontWeight: "bolder",
  color: "#f54e42",
  marginRight: "40px",
};

export default Header;
