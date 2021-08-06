import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../../theme.context";
import { Button } from "reactstrap";
import HeaderWrapper from "./HeaderWrapper";
import olxLight from "../../img/olxLight.jpg";
import olxDark from "../../img/olxDark.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [navshow, setnavshow] = useState(false);
  const { theme, setTheme, colors } = useContext(ThemeContext);
  console.log(colors);

  const toggle = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  let shownav = () => {
    setnavshow(!navshow);
  };

  return (
    <HeaderWrapper className="shadow header" colors={colors}>
      <div className="container py-3 d-flex justify-content-between align-items-center">
        <div>
          <div className="d-flex align-items-center">
            <Link to="/">
              <img
                src={theme == "light" ? olxLight : olxDark}
                className="logo h-25"
                alt="rasm"
              />
            </Link>
            <p className="m-0 ms-3">Olx.uz</p>
          </div>
        </div>
        <div
          className={`d-flex align-items-center menu ${
            (navshow && "hidenav") || ""
          }`}
        >
          <p className="me-5 mb-0 subtitle"> oz | ru</p>
          <FontAwesomeIcon className="me-5 mb-0 icon" icon={faHeart} />
          <FontAwesomeIcon className="me-5 mb-0 icon" icon={faUser} />
          <p className="me-5 mb-0 subtitle">Мой профиль</p>
          <Button color={theme} className="mb-0 me-2 p-2 button">
            Подать объявление
          </Button>
          <Button className="icon" color={theme} onClick={toggle}>
            <FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} />
          </Button>
          <Button color={theme} className="bars ms-4" onClick={shownav}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
        <Button color={theme} className="bars" onClick={shownav}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
