import React from "react";
import Background from "../images/background.jpg";

function Header() {
  return (
    <div className="h-52 w-full relative">
      <img
        src={Background}
        alt="teste"
        className="w-full h-full object-cover absolute"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-secondary"></div>
    </div>
  );
}

export default Header;
