import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-image: ${(props) => props.colors.footerBack} !important;

  a {
    color: ${(props) => props.colors.color} !important;
    display: block;
    font-weight: bold;
  }
`;
export default FooterWrapper;
