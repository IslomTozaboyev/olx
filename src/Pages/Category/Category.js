import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../Containers/Container";
import datas from "./../../data";
import CategoryWrapper from "./CategoryWrapper";

const Category = () => {
  const { category } = useParams();

  const data = datas[category];

  return (
    <Container>
      <CategoryWrapper className="container py-5">
        <h1 className="mb-5">Category: {category}</h1>
        <div className="row justify-content-center">
          {data?.map((v) => (
            <Link
              to={`${category}/${v.id}`}
              className="col-10 col-sm-6 col-md-4 col-lg-3 mb-5"
            >
              <div className="shadow rounded p-2 product h-100">
                <img className="w-100 mb-3 rounded" src={v.img} alt="rasm" />
                <p className="fw-bold">{v.title}</p>
                <span>{v.price}</span>
                <br />
                <span>{v.location}</span>
              </div>
            </Link>
          ))}
        </div>
      </CategoryWrapper>
    </Container>
  );
};

export default Category;
