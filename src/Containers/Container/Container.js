import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import InputGr from "../../Components/Input";
import { useContext } from "react";
import ContainerWrapper from "./ContainerWrapper";
import ThemeContext from "../../theme.context";

const Container = (props) => {
  const { colors } = useContext(ThemeContext);
  return (
    <ContainerWrapper colors={colors}>
      <Header />
      <InputGr />
      <div className="content">{props.children}</div>
      <Footer />
    </ContainerWrapper>
  );
};

export default Container;
