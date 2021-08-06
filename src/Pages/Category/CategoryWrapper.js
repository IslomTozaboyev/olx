import styled from "styled-components";

const CategoryWrapper = styled.div`
  .product img {
    height: 200px;
    object-fit: cover;
  }
  .links {
    position: relative;
  }
  .links .hearthIcon {
    position: absolute;
    bottom: 30px;
    right: 10px;
  }
`;

export default CategoryWrapper;
