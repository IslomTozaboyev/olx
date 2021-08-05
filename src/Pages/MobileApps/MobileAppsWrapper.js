import styled from "styled-components";

const MobileAppsWrapper = styled.div`
  .mobile__footer {
    background-color: ${(props) => props.colors.body};
    overflow: hidden;
    margin-bottom: 56px;
  }
  .mobile__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .mobile__contact h1 {
    font-size: 72px;
    line-height: 68px;
    font-weight: 500;
    margin: 0 0 26px;
  }
  .mobile__img {
    width: 610px !important;
    height: 610px !important;
    flex: 0 0 auto !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    position: relative !important;
  }
  .mobile__img::after {
    display: block !important;
    content: "" !important;
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 50% !important;
    background: #001a53 !important;
    transform: scale(0.6) !important;
    opacity: 0 !important;
    animation: circleReveal 0.5s ease-in-out 1s 1 !important;
    animation-fill-mode: both !important;
  }
`;
export default MobileAppsWrapper;
