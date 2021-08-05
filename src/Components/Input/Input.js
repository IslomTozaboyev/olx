import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InputWrapper from "./InputWrapper";
import styled from "styled-components";
import ThemeContext from "../../theme.context";

const InputGr = (props) => {
  const { colors } = styled(ThemeContext);
  return (
    <InputWrapper className="search my-5" colors={colors}>
      <div className="container">
        <div className="d-flex">
          <form className="form__bg p-4 w-100 form" action="">
            <div>
              <FontAwesomeIcon className="icon" icon={faSearch} />
              <input
                className="input ms-3 w-75"
                type="text"
                placeholder="753 335 объявлени  "
              />
            </div>
            <div className="d-flex align-items-center location">
              <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
              <p className="mb-0 ms-3">Вес Узбекистан</p>
            </div>
            <div className="d-flex align-items-center ms-5 location">
              <p className="mb-0 ms-1 me-3">Найти</p>
              <FontAwesomeIcon className="icon" icon={faSearch} />
            </div>
          </form>
        </div>
      </div>
    </InputWrapper>
  );
};

export default InputGr;
