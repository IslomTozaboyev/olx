import styled from "styled-components";

const ContainerWrapper = styled.div`
  background-color: ${(props) => props.colors.body};
  color: ${(props) => props.colors.color};

  .form__bg {
    background-color: ${(props) => props.colors.input};
    color: ${(props) => props.colors.input};
  }
  a,
  p,
  span,
  .icon,
  input::placeholder {
    color: ${(props) => props.colors.color};
  }

  .content {
    min-height: 500px;
  }
`;
export default ContainerWrapper;
