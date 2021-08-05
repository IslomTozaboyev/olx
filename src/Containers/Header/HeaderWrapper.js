import styled from "styled-components";
import colors from "../../data/colors";

const HeaderWrapper = styled.header`
  transition: 0.5s;

  background-color: ${(props) => props.colors.backgroundColor};
  color: ${(props) => props.colors.color};

  .logo {
    height: 30px !important;
  }
  .bars {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    .menu {
      position: absolute;
      top: 0px !important;
      right: -150%;
      width: 70%;
      padding: 20px;
      height: 10%;
      display: flex;
      justify-content: center !important;
      align-items: center !important;
      transition: 0.5s;
      background-color: #000;
      box-shadow: 0 0 5px ${(props) => props.colors.color};
    }
    .bars {
      display: block;
      border: none;
      outline: none;
      background-color: ${(props) => props.colors.body};
      color: ${(props) => props.colors.color};
      font-weight: bold;
      font-size: 20px;
    }
    .navlink {
      padding: 10px;
      font-size: 16px;
    }
    .hidenav {
      right: 0;
      transition: 0.3s;
    }
  }

  @media screen and (max-width: 900px) {
    .menu {
      position: fixed;
      top: 70px;
      right: -150%;
      width: 240px;
      padding: 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      transition: 0.5s;
      background: #000;
      background-color: ${(props) => props.colors.body};
      z-index: 1000;
    }

    .icon,
    .button {
      margin: 40px 25px;
      color: ${(props) => props.colors.color};
    }
    .bars {
      margin: 0 !important;
    }
    .subtitle {
      margin: 40px;
    }

    .navlink {
      padding: 10px;
      font-size: 16px;
    }
    .hidenav {
      right: 0;
      transition: 0.3s;
    }
  }
`;

export default HeaderWrapper;
