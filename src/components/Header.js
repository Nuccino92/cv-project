import React from "react";

function Header() {
  return (
    <header style={headerStyles}>
      <div>Your CV</div>
    </header>
  );
}

const headerStyles = {
  boxShadow: "2px 2px 2px rgb(0 0 0 / 16%)",
  color: "#f54e42",
  fontSize: "36px",
  fontFamily: "Arimo",
  fontWeight: "bolder",
  padding: "15px 15px 15px 110px",
};

export default Header;
