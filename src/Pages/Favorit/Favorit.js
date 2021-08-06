import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Containers/Container";

import datas from "../../data";
import CategoryWrapper from "../Category/CategoryWrapper";

const Favorit = () => {
  const data = [];
  Object.entries(datas).map((v) => data.push(...v[1].filter((p) => p.like)));
  console.log(data);
  return (
    <Container>
      <CategoryWrapper className="container pb-5 pt-2">
        <h4 className=""> Selected products : {data.length} </h4>
        <div className="row">
          {data?.map((v, i) => (
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 mb-5 ">
              <div className="shadow rounded p-2 d-flex flex-column justify-content-between product h-100">
                <div>
                  <img className="w-100 mb-3 rounded" src={v.img} alt="rasm" />
                  <p className="fw-bold">{v.title}</p>
                  <span>{v.price}</span>
                  <br />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>{v.location}</span>
                  <FontAwesomeIcon
                    className={`hearthIcon ${v.like ? "text-danger" : ""}`}
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

export default Favorit;
