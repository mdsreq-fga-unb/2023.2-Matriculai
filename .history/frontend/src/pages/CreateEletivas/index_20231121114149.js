import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import cmtnLogo from '../../img/cmtnLogo.png'
import menuHamburguer from '../../icon/menuHamburguer.png'
import Header from "../Home";
import { 
  Input,
  Box,
  Center,
  FormControl,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button, 
} from "@chakra-ui/react"
const CreateEletivas = () => {
  return (
   <Box h="100vh">
    <Center
      as="header"
      h={150}
      bg="teal.500"
      color="white"
      fontweight="bold"
      fontSize="4xl"
      pb="8"
      >
        Formulário de Cadastro de Eletivas
    </Center>
   </Box>
      
  );
};

export default CreateEletivas;
