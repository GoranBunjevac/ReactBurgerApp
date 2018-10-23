import React from "react";
import "./Menu.css";

const menu = props => (
  <div onClick={props.clicked} className="Menu">
    Menu
  </div>
);

export default menu;
