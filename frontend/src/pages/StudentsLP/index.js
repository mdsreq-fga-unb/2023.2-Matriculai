import React from "react";
import { useParams } from "react-router-dom";

const DetalhesParticipantes = () => {
  const { trilhaId } = useParams();

  // Lógica para buscar os participantes da trilha usando o ID da trilha
  // Substitua esta lógica pela lógica real de obtenção de dados do banco de dados

  return (
    <div>
      <h1>Detalhes dos Participantes da Trilha {trilhaId}</h1>
      {/* Renderize os detalhes dos participantes aqui */}
    </div>
  );
};

export default DetalhesParticipantes;
