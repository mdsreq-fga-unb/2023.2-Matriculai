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
  Flex,
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
        src={Header}
        Formulário de Cadastro de Eletivas
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
        bg="white"
        top={100}
        position={"absolute"}
        borderRadius={5}
        p="6"
        boxShadow={"0 1px 2px #ccc"}
        >

      </Center>
    </Flex>
   </Box>
      
  );
};

export default CreateEletivas;
