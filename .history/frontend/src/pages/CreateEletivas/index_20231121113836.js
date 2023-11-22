import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Heading, Spacer, Text, Center, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react"; // Importe os componentes do Chakra UI ou outro framework que você esteja usando
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
  Input,
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
        
    </Center>
   </Box>
      
  );
};

export default CreateEletivas;
