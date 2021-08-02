import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex flex-column">
              <Link to={"/mobileapps"}> Мобильные приложения </Link>
              <Link className="my-4" to={"/Помощь"}>
                Помощь
              </Link>
              <Link className="mb-4" to={"Платные-услуги"}>
                Платные-услуги
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div></div>
          </div>
          <div className="col-md-4">
            <div>
              <a
                className="me-3"
                href="https://play.google.com/store/apps/details?id=com.torg.torg&hl=ru&referrer=utm_source%3Dolx.uz%26utm_medium%3Dcpc%26utm_campaign%3Dandroid-app-footer"
              >
                <img
                  className="mb-3"
                  src="https://static.olx.uz/static/olxuz/packed/font/2fc9f37e6707acfc0e1255cec57c49a986.svg"
                  alt=""
                />
              </a>
              <a
                className="me-3"
                href="https://itunes.apple.com/uz/app/torg.uz/id665094472?mt=8&ign-mpt=uo%3D4"
              >
                <img
                  className="mb-3"
                  src="https://static.olx.uz/static/olxuz/packed/font/2fccd2faa9395d5faed1011516c64dc929.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
