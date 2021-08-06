import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InputWrapper from "./InputWrapper";
import styled from "styled-components";
import ThemeContext from "../../theme.context";
import { useState } from "react";

const InputGr = (props) => {
  const { colors } = styled(ThemeContext);
  const [value, setValue] = useState("");

  const typing = (event) => {
    setValue(event.target.value);
  };
  const deleteValue = () => {
    setValue("");
  };

  return (
    <InputWrapper className="search my-5" colors={colors}>
      <div className="container pt-5">
        <form className="form__bg p-4 w-100" action="">
          <div className="row">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="position-relative">
                <FontAwesomeIcon className="icon" icon={faSearch} />
                <input
                  onChange={typing}
                  value={value}
                  className="input ms-3 w-75"
                  type="text"
                  placeholder="753 335 объявлени  "
                />
                <span
                  onClick={deleteValue}
                  className={`times ${value == "" ? "" : "d-block"}`}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-6 col-lg-7">
                  <div className="d-flex align-items-center location">
                    <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                    <p className="mb-0 ms-3">Вес Узбекистан</p>
                  </div>
                </div>
                <div className="col-6 col-lg-5">
                  <div className="d-flex align-items-center ms-5 location">
                    <p className="mb-0 ms-1 me-3">Найти</p>
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </InputWrapper>
  );
};

export default InputGr;
