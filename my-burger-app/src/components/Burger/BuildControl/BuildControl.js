import React from "react";
import "./BuildControl.css";

const buildControl = props => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Less">More</button>
    <button className="More">Less</button>
  </div>
);

export default buildControl;
