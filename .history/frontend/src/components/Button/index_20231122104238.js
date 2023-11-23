import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};

export default Button;

const ButtonCadastrar = ({ Text, onClick, Type = "button", PaddingBottom='20' }) => {
  return (
    <C.Button type={Type} onClick={onClick} >
      {Text}
    </C.Button>
  );
};
