import "./Input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";

export default class InputGr extends Component {
  render() {
    return (
      <div className="search">
        <div className="container">
          <div className="d-flex">
            <form className="bg-white p-4 w-100 form" action="">
              <div>
                <FontAwesomeIcon icon={faSearch} />
                <input
                  className="input ms-3 w-75"
                  type="text"
                  placeholder="753 335 объявлений рядом"
                />
              </div>
              <div className="d-flex align-items-center location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <p className="mb-0 ms-3">Вес Узбекистан</p>
              </div>
              <div className="d-flex align-items-center ms-5 location">
                <p className="mb-0 ms-1 me-3">Найти</p>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
