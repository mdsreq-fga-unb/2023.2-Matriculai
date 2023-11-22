import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import cmtnLogo from '../../img/cmtnLogo.png'
import menuHamburguer from '../../icon/menuHamburguer.png'
import Header from "../Home";
import ButtonCadastrar from "../../components/Button";
import * as C from "./styles";


import { 
  Input,
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
  Select,
  Text,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react"


const CreateEletivas = () => {
  return (
   <Box h="100vh">
        <Header >
        </Header>
    <Center
      as="header"
      h={150}
      bg="teal.500"
      color="white"
      fontweight="bold"
      fontSize="4xl"
      pb="8"
      Content
      >
        
        
    </Center>
    <Flex
      align="center"
      justify="center"
      bg="blackAlpha.200"
      h="calc(100vh - 150px)"
    >
      <Center
        w="100%"
        maxW={840}
        bg="F4F4F2"
        top={100}
        position={"absolute"}
        borderRadius={5}
        p="6"
        boxShadow={"0 1px 2px #ccc"}
        >
          <FormControl display="flex" flexDirection="column" gap="4">
                      
            <C.titulo>
            Cadastro de Eletivas

            </C.titulo>
            
          
            <FormLabel placeholder = 'Nome da Eletiva'>
              
              <C.texto>
                
              
              </C.texto>
              <Stack spacing={3}>
              <Input placeholder =  'Nome da eletiva'  type="nomeEletiva" />
              <Input placeholder =  'Descrição'  type="nomeEletiva" />
              <Input placeholder =  'Nome da eletiva'  type="nomeEletiva" />
              <Input placeholder =  'Nome da eletiva'  type="nomeEletiva" />
              
                </Stack>
            
             
              <C.texto>
              Descrição
              </C.texto>
              </FormLabel>
            <Input type="descricao" />
            
            <FormLabel><C.texto>
              Série
              </C.texto>
              </FormLabel>
            <Select placeholder='Selecione a série'>
              <option value='option1'> 1</option>
              <option value='option2'> 2</option>
              <option value='option3'> 3</option>
            </Select>

            <FormLabel>Professor Responsável</FormLabel>
            <Input type="professor" />
            <FormLabel>Número de vagas</FormLabel>
            <Input type="numVagas" />
            <FormLabel>Horário da disciplina</FormLabel>
            <Input type="horario" />
            <ButtonCadastrar Text="Cadastrar" />
          </FormControl>

      </Center>
      
    </Flex>
   </Box>
      
  );
};

export default CreateEletivas;