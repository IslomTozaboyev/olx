import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../Containers/Container";
import datas from "./../../data";
import CategoryWrapper from "./CategoryWrapper";

const Category = () => {
  const { category } = useParams();

  const [data, setData] = useState(datas[category]);

  const heart = (i) => {
    let array = [...data];
    array[i].like = !array[i].like;
    console.log(array[i]);
    setData(array);
  };

  return (
    <Container>
      <CategoryWrapper className="container py-5">
        <h1 className="mb-5">Category: {category}</h1>
        <div className="row justify-content-center">
          {data?.map((v, i) => (
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-5 ">
              <div className="shadow rounded p-2 d-flex flex-column justify-content-between product h-100">
                <Link to={`${category}/${v.id}`}>
                  <img className="w-100 mb-3 rounded" src={v.img} alt="rasm" />
                  <p className="fw-bold">{v.title}</p>
                  <span>{v.price}</span>
                  <br />
                </Link>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{v.location}</span>
                  <FontAwesomeIcon
                    className={`hearthIcon ${v.like ? "text-danger" : ""}`}
                    onClick={() => heart(i)}
                    icon={v.like ? heartSolid : faHeart}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CategoryWrapper>
    </Container>
  );
};

export default Category;
