import React, { useRef, useEffect } from "react";
import logo from "../images/2.png";
import gsap from "gsap";

const Header = () => {
  let headerItem = useRef(null);
  useEffect(() => {
    console.log(headerItem);
    gsap.fromTo(
      headerItem,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.3 }
    );
  }, []);
  return (
    <header
      ref={(el) => {
        headerItem = el;
      }}
      className="header"
    >
      <img className="header__logo" src={logo} />
      <h1 className="header__title"> Найди свое аниме</h1>
    </header>
  );
};

export default Header;
