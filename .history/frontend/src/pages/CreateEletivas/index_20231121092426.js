import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <form>
  <div>
<form
  //<label>
    Nome:
    <input type="text" name="Nome da eletiva" />
    Descrição:
    <input type="text" name="Descrição" />
    Ano letivo:
    <select name="Ano letivo"/>
    Professor:
    <input type="text" name="Professor responsável" />
    Número de vagas:
    <input type="text" name="Número de vagas" />
    Horário da disciplina:
    <input type="text" name="Horário" />  
  </label>
  <input type="submit" value="Enviar" />
</form>
  </div>
  );
};

export default Signup;
