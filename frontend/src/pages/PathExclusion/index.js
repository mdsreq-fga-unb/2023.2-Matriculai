import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Home/index'; 

const TrilhasList = () => {
  const [trilhas, setTrilhas] = useState([]);
  const [trilhasSelecionadas, setTrilhasSelecionadas] = useState([]);

  // Carregar trilhas do backend ao carregar o componente
  useEffect(() => {
    async function fetchTrilhas() {
      try {
        const response = await axios.get('http://localhost:3000/api/trilhas'); // Endpoint para buscar trilhas
        setTrilhas(response.data); // Define as trilhas na state 'trilhas'
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
      }
    }
    fetchTrilhas();
  }, []);

  // Função para marcar/desmarcar trilha selecionada
  const toggleSelecionada = (id) => {
    const isSelected = trilhasSelecionadas.includes(id);
    if (isSelected) {
      const updatedSelection = trilhasSelecionadas.filter((trilhaId) => trilhaId !== id);
      setTrilhasSelecionadas(updatedSelection);
    } else {
      setTrilhasSelecionadas([...trilhasSelecionadas, id]);
    }
  };

  // Função para excluir trilhas selecionadas
  const handleExcluirTrilhas = async () => {
    try {
      await axios.delete('http://localhost:3000/api/deleteLearningPaths', {
        data: { id: trilhasSelecionadas }, // Envia os IDs das trilhas selecionadas para exclusão
      });
      // Atualiza a lista de trilhas após a exclusão
      const updatedTrilhas = trilhas.filter((trilha) => !trilhasSelecionadas.includes(trilha.id));
      setTrilhas(updatedTrilhas);
      setTrilhasSelecionadas([]); // Limpa as trilhas selecionadas após a exclusão
      alert('Trilhas excluídas com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir trilhas:', error);
    }
  };

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Lista de Trilhas</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {trilhas.map((trilha) => (
          <div
            key={trilha.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
              width: '300px', // largura do quadrado
            }}
          >
            <div style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                onChange={() => toggleSelecionada(trilha.id)}
                checked={trilhasSelecionadas.includes(trilha.id)}
              />
            </div>
            <div>
              <p>Trilha: {trilha.numero}</p>
              <p>Título: {trilha.titulo}</p>
              {/* Adicione mais informações da trilha conforme necessário */}
            </div>
            <div
              style={{
                marginLeft: 'auto',
                width: '20px', // largura do círculo de seleção
                height: '20px', // altura do círculo de seleção
                borderRadius: '50%',
                border: '1px solid #000',
                background: trilhasSelecionadas.includes(trilha.id) ? '#000' : 'transparent',
              }}
            ></div>
          </div>
        ))}
        <button onClick={handleExcluirTrilhas} style={{ marginTop: '20px' }}>
          Excluir Trilhas Selecionadas
        </button>
      </div>
    </div>
  );
};

export default TrilhasList;
