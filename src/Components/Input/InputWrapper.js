import styled from "styled-components";

const InputWrapper = styled.div`
  .form__bg {
    margin-top: 70px !important;
  }
  .input {
    border: none;
    outline: none;
    box-shadow: none;
    background: transparent;
  }

  .times {
    position: absolute;
    top: 50%;
    right: 5%;
    display: none;
    transform: translateY(-50%);
  }

  .input::placeholder {
    font-weight: bold;
  }
`;
export default InputWrapper;
