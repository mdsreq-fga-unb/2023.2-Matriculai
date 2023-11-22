import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
<form>
  <div>

  <label>
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
  </div>
</form>
  );
};

export default Signup;
