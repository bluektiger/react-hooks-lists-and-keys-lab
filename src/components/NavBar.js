import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchors = links.map( (navTools) => (
    <a key={navTools} href={"#" + navTools}>{navTools}</a>
  ))
  return <nav>{/* display an <a> tag for each link here */}{anchors}</nav>
}

export default NavBar;
