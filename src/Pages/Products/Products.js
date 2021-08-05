import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../Containers/Container";
import datas from "./../../data";
import ProductsWrapper from "./ProductsWrapper";

const Products = () => {
  const { category, id } = useParams();

  const data = datas[category];
  const details = data.filter((v) => v.id == id)[0].details;
  console.log(details);

  return (
    <Container>
      <ProductsWrapper className="container py-5">
        {details ? (
          <div className="products">
            <h1 className="mb-5">
              Category: {category}, productId: {id}
            </h1>
            <div className="row">
              <div className="col-md-8">
                <img className="img" src={details.img} alt="" />
              </div>
              <div className="col-md-4">
                <h4 className="mb-5 fw-bold">{details.title}</h4>
                <h4>{details.owner}</h4>
              </div>
              <h4 className="mt-4">{details.desc}</h4>
            </div>
          </div>
        ) : (
          <h1>No Product</h1>
        )}
      </ProductsWrapper>
    </Container>
  );
};

export default Products;
