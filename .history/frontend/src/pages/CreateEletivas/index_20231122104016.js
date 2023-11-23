import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Header from "../Home";
import ButtonCadastrar from "../../components/Button";
import * as C from "./styles";


import { 
  Input,
  Box,
  Center,
  Flex,
  Form,
  FormControl,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  Select,
  Text,
  Stack,
  
} from "@chakra-ui/react"
;


const CreateEletivas = () => {
  return (
    <ChakraProvider>
      <Box h="200vh">
        <Header></Header>
        <C.Container>
          <C.Content>

          <Box padding='75px' alignSelf={'center'}>
            <FormControl display="flex" flexDirection="column" gap="4">
              <C.titulo>
              <Text textAlign={'center'} fontSize={'x-large'} color={'#243A69'} as={'b'}>CADASTRO DE ELETIVAS</Text>
              </C.titulo>

              <Stack spacing={2}>

              
              <FormLabel  color= '#243A69'>Nome da eletiva </FormLabel>
              <Input 
                size='lg'
                isRequired
                placeholder='Nome da eletiva'
                />

              <FormLabel color= '#243A69'>Descrição da eletiva</FormLabel> 
              <Input 
                isRequired
                placeholder='Descrição da eletiva'
                />

              <FormLabel color= '#243A69'>Série</FormLabel> 
              <Select 
                placeholder='Selecione a série' 
                _placeholder={{opacity:1, color: '#243A69' }} 
                isRequired
                >
                <option value='option1'> 1</option>
                <option value='option2'> 2</option>
                <option value='option3'> 3</option>
              </Select>

              <FormLabel color= '#243A69'>Professor Responsável</FormLabel> 
              <Input 
                isRequired
                placeholder='Professor Responsável'
                />
              
              <FormLabel color= '#243A69'>Número de vagas</FormLabel> 
              <Input 
                isRequired
                placeholder='Número de vagas'
                />
              
              <FormLabel color= '#243A69'>Horário da aula</FormLabel> 
              <Input 
                isRequired
                placeholder='Horário da aula'
                />
              
              <ButtonCadastrar>
              Text="Cadastrar"
                </ButtonCadastrar> marginBottom='20'  />
              </Stack>
              
            </FormControl>
          </Box>
          </C.Content>
        </C.Container>
      </Box>
    </ChakraProvider>
   
      
  );
};

export default CreateEletivas;