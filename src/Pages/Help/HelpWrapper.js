import styled from "styled-components";

const HelpWrapper = styled.div`
  .hero {
    position: relative;
    overflow: hidden;
    z-index: 1;
    background-color: #cbf7ee;
    padding: 0 20px;
    text-align: center;
    width: 100%;
    height: 300px !important;
  }
  .hero::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 420px;
    height: 420px;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 70px solid #23e5db;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: -1;
  }
  @media screen and (min-width: 1024px) {
    .hero::before {
      width: 1066px;
      height: 1066px;
      border: 130px solid #23e5db;
    }
  }
  .hero__inner {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 610px;
    margin: 0 auto;
  }
  .hero__title {
    font-size: calc(34px + 6 * ((100vw - 320px) / 680));
    line-height: 1.05;
    letter-spacing: 0.5px;
    margin: inherit;
  }
  .visitibly__hidden {
    border: 0;
    clip: rect(0 0 0 0);
    -webkit-clip-path: inset(50%);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
    font-family: "Geomanist Medium", Roboto, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Helvetica, Arial, sans-serif;
  }
  .hero__inner input {
    outline: none;
  }
  .help_bg {
    background-color: #ffd6c9;
    font-weight: 500;
    padding: 20px;
  }
  .help_bg2 {
    background-color: #c7dcff;
    font-weight: 500;
    padding: 20px;
  }
  .icons {
    background-color: #c8f8f6;
    border-radius: 50%;
  }

  .content__box {
    height: 200px !important;
  }
  .img__bg {
    border-radius: 50%;
    padding: 20px;
  }
  .icon {
    background-color: ${(props) => props.colors.icon};
  }
  .texts {
    color: ${(props) => props.colors.text};
  }
`;

export default HelpWrapper;
