import React from "react";
import logo from "../images/logo.png";
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={logo} />
        <h1 className="header__title"> Найди свое аниме</h1>
      </header>
    );
  }
}
export default Header;
