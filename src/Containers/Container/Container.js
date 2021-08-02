import "./Container.css";
import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import InputGr from "../../Components/Input";

const Container = (props) => {
  return (
    <>
      <Header />
      <InputGr />
      <div className="content">{props.children}</div>
      <Footer />
    </>
  );
};

export default Container;
