import React from "react";
import GetImages from "../GetImages";
import ThemeNavbar from "./ThemeNavbar";
import ThemeContent from "./ThemeContent";

function SingleTheme() {
  return (
    <div>
      <ThemeNavbar />
      <ThemeContent />
      <GetImages />
    </div>
  );
}

export default SingleTheme;
