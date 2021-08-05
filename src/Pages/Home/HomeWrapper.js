import styled from "styled-components";

const HomeWrapper = styled.div`
  .product img {
    height: 250px;
  }
  .category .circle {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .category .circle img {
    border-radius: 50%;
  }
  .category:hover .subtitle {
    background-color: black;
    color: white !important;
  }
  .btnn {
    background-color: white;
    color: black;
    padding: 5px 40px;
    border: 3px solid black;
    font-weight: bold;
    transition: 0.3s;
    height: 60px;
  }
  .btnn:hover {
    border: 7px solid black;
    background-color: white;
    color: black;
  }
  .bizness {
    background-color: #002f34;
  }
  @media screen and (max-width: 800px) {
    .bizness .container {
      display: grid !important;
    }
    .biznes__btn {
      margin: 20px 0 !important;
      padding: 0 !important;
    }
  }
  .biznes__btn {
    padding: 8px 40px !important;
    border: none;
    outline: none;
  }
  .biznes__btn:hover span {
    background-color: black;
    color: white;
  }
  .olx {
    background-color: #cbf7ee;
    padding: 100px;
  }
`;

export default HomeWrapper;
