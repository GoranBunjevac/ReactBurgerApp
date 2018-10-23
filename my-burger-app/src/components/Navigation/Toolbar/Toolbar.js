import React from "react";
import "./Toolbar.css";
import Logo from "../../../components/Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../Menu/Menu";

const toolbar = props => (
  <header className="Toolbar">
    <Menu clicked={props.openSideDrawer} />
    <Logo height="80%" />
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
