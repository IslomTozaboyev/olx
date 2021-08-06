import styled from "styled-components";

const HeaderWrapper = styled.header`
  transition: 0.5s;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;

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
      position: fixed;
      top: 0px;
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
    .bars {
      display: block;
      border: none;
      outline: none;
      background-color: ${(props) => props.colors.body};
      color: ${(props) => props.colors.color};
      font-weight: bold;
      font-size: 20px;
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

  @media screen and (max-width: 900px) {
    .menu {
      position: fixed;
      top: 0px;
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
