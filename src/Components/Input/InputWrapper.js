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
  .input::placeholder {
    font-weight: bold;
  }
  .form {
    display: flex !important;
    align-items: center;
    justify-content: space-between;
  }
  @media screen and (max-width: 800px) {
    .form {
      display: grid !important;
      justify-content: space-between !important;
    }
    .location {
      margin-top: 20px;
    }
  }
`;
export default InputWrapper;
