import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import ButtonCadastrar from "../../components/Button/index.js";
import * as C from "./styles";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";


import { 
  Input,
  Button,
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Text,
  Stack,
  Alert,
  AlertIcon,
  useToast,
  Container,
  
} from "@chakra-ui/react";


const CreateTrilhas = () => {
  const { createEletivas } = useAuth();
  const navigate = useNavigate();
  const toastIdRef = React.useRef()

  const toast = useToast();  
  const [nomeTrilha, setTrilha] = useState("");
  const [descricao, setDescricao] = useState("");
  const [serie, setSerie] = useState("");
  const [eletivas, setEletivas] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = async () => {
    if (!nomeTrilha || !descricao || !serie || !eletivas) {
      
      setError("Preencha todos os campos");
       return;
    };

    try {
      const response = await axios.post('http://localhost:3001/learningpath/createLearningPaths', {name: nomeTrilha, description: descricao, school_year: parseInt(serie), electives: eletivas });
      
      console.log(response)
      if (response.status === 201) {
        
        toast({
          title: 'Trilha cadastrada.',
          description: "Trilha cadastrada com sucesso!",
          status: 'success',
          duration: 2800,
          isClosable: true,
          position: 'top'
        })

        // Sucesso, redirecionar ou realizar outras ações necessárias
        navigate("/home");
      } else {
        // Exibir mensagem de erro
        setError(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Imprime informações detalhadas sobre o erro Axios
        console.error("Erro ao fazer cadastro - Status:", error.response?.status);
        console.error("Erro ao fazer cadastro - Data:", error.response?.data);
      } else {
        console.error("Erro ao cadastrar:", error);
      }
      
      setError("Erro ao cadastrar. Tente novamente mais tarde.");
    }

  }
  return (
    <ChakraProvider>
        <Flex direction="column" minH="100vh">
        <Header></Header>
        <Container flex='1'>
        <Box width="100%"  paddingLeft="2vh" paddingRight="2vh" paddingTop="2vh" borderWidth={1} borderRadius={8} boxShadow="lg">

          <Box  textAlign='center' alignSelf={'center'} >
            <FormControl display="flex" flexDirection="column" gap="4">
              
              <Center paddingTop='5'>
                <C.titulo >
                  <Text textAlign={'center'} fontSize={'x-large'} color={'#243A69'} as={'b'}>CADASTRO DE TRILHAS</Text>
                </C.titulo>
              </Center>

              <Stack spacing={2}>

              
              <FormLabel  color= '#243A69'>Nome da trilha </FormLabel>
              <Input
                type='text' 
                size='lg'
                isRequired
                placeholder='Nome da trilha'
                value={nomeTrilha}
                onChange={(e)=>[setTrilha(e.target.value), setError("")]}
                />

              <FormLabel color= '#243A69'>Descrição da trilha</FormLabel> 
              <Input 
                type='text'
                isRequired
                placeholder='Descrição da trilha'
                value={descricao}
                onChange={(e)=>[setDescricao(e.target.value), setError("")]}
                />

              <FormLabel color= '#243A69'>Série</FormLabel> 
              <Select
                type='text'
                placeholder='Selecione a série' 
                _placeholder={{opacity:1, color: '#243A69' }} 
                isRequired
                value={serie}
                onChange={(e)=>[setSerie(e.target.value), setError("")]}
                >
                <option value={1}> 1</option>
                <option value={2}> 2</option>
                <option value={3}> 3</option>
              </Select>

              <FormLabel color= '#243A69'>Eletivas relacionadas </FormLabel>
              <Select
                type='text'
                placeholder='Selecione as eletivas relacionadas' 
                _placeholder={{opacity:1, color: '#243A69' }} 
                isRequired
                value={eletivas}
                onChange={(e)=>[setEletivas(e.target.value), setError("")]}
                >
                <option value='option1'> 1</option>
                <option value='option2'> 2</option>
                <option value='option3'> 3</option>
              </Select>
              
              <C.labelError>{error}</C.labelError>   
              <Center paddingBottom={5}>

              <ButtonCadastrar Text="Cadastrar" onClick={handleCadastro}> </ButtonCadastrar>
              </Center>
              </Stack>
              
            </FormControl>
          </Box>
          
        </Box>
        </Container>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
   
      
  );
};

export default CreateTrilhas;
