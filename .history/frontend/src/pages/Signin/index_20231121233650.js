import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Box, Center, Grid, Text, Input, Image, Button } from '@chakra-ui/react';
import student from '../../img/student.png';
import axios from 'axios';

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const response = await axios.post('localhost:3000', { email, senha });
      
      if (response.status === 200) {
        // Sucesso, redirecionar ou realizar outras ações necessárias
        navigate("/home");
      } else {
        // Exibir mensagem de erro
        setError(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Imprime informações detalhadas sobre o erro Axios
        console.error("Erro ao fazer login - Status:", error.response?.status);
        console.error("Erro ao fazer login - Data:", error.response?.data);
      } else {
        console.error("Erro ao fazer login:", error);
      }
      setError("Erro ao fazer login. Tente novamente mais tarde.");
    }
  };
  
  return (
    <Box>
      <Grid templateColumns='repeat(2, 1fr)' gap={10}>
        <Box padding='75px' alignSelf={'center'}>  
          <Center marginBottom={'10px'}>
            <Text textAlign={'center'} fontSize={'x-large'} color={'#243A69'} fontWeight={'bold'}>
              BEM-VINDO AO MATRICULAÍ
            </Text>
          </Center>
          <Text marginBottom={'25px'} textAlign={'center'} fontSize={'medium'} color={'#243A69'}>
            A plataforma de matrícula do CEMTN
          </Text>
          <Center marginBottom={'15px'}>
            <Input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
          </Center>

          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <Text color="red.500" marginTop={2} fontSize="sm">
            {error}
          </Text>
          <Center marginTop={'25px'}>
            <Button colorScheme="blue" onClick={handleLogin}>
              Entrar
            </Button>
          </Center>
        </Box>
        
        <Box marginTop={'3px'} overflow='hidden' paddingLeft='30px'>
          <Image
            src={student}
            alt='student'
            maxWidth='100%'
            height='auto'
            borderTopEndRadius='60px'
            borderBottomEndRadius='60px'
            objectFit='cover'
            overflow='hidden'
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Signin;
