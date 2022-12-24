import React from "react";
import DownTop from "./downTop";
import MiddleTop from "./middleTop";
import UpTop from "./uptop";

function NavBar() {
  return (
    <div>
      <UpTop />
      <MiddleTop />
      <DownTop />
    </div>
  );
}

export default NavBar;
