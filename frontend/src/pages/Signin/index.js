import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Box, Center } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import student from '../../img/student.png'
import { Image } from '@chakra-ui/react'
import * as C from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Text } from '@chakra-ui/react';
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
    console.log(email);
    console.log(senha);
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
    <C.Container>
      <C.Content>
        <Grid templateColumns='repeat(2, 1fr)' gap={10}>
          <Box padding='75px' alignSelf={'center'}>  
            <Center marginBottom={'10px'}>
             <Text textAlign={'center'} fontSize={'x-large'} color={'#243A69'} as={'b'}>BEM-VINDO AO MATRICULAÍ</Text>
            </Center>
            <Text marginBottom={'25px'} textAlign={'center'} fontSize={'medium'} color={'#243A69'}>A plataforma de matrícula do CEMTN</Text>
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
            <C.labelError>{error}</C.labelError>
            <Center marginTop={'25px'}>
              <Button Text="Entrar"  onClick={handleLogin}></Button>
            </Center>
          </Box>
          
          <Box marginTop={'3px'} overflow='hidden' paddingLeft='30px'>
            <Image src={student} alt='student' style={{ maxWidth: '100%', height: 'auto' }} borderTopEndRadius='60px' borderBottomEndRadius='60px' objectFit={'cover'} overflow='hidden'/>
          </Box>
        </Grid>
      </C.Content>
    </C.Container>    
  );
};

export default Signin;
