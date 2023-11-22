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
      h="calc(100vh - 159px)"
    >
      <Center
        w="200%"
        maxW={600}
        maxH={600}
        bg="F4F4F2"
        top={100}
        position={"aling-items: absolute;"}
        borderRadius={10}
        p="6"
        boxShadow={"0 1px 2px #ccc"}
        >
          <FormControl display="flex" flexDirection="column" gap="4">
                      
            <C.titulo>
            Cadastro de Eletivas

            </C.titulo>
                        
              <Stack spacing={20}>
                
                <Input  placeholder =  'Nome da eletiva' _placeholder={{opacity:1, color: 'inherit' }} color= '#243A69' size='md' />
                
                <Input placeholder =  'Descrição'  _placeholder={{opacity:1, color: 'inherit' }} color= '#243A69' size='md' />
                <Select placeholder='Selecione a série' _placeholder={{opacity:1, color: 'inherit' }} color= '#243A69' size='md'>
                  <option value='option1'> 1</option>
                  <option value='option2'> 2</option>
                  <option value='option3'> 3</option>
                </Select> 
                <Input placeholder =  'Professor Responsável'  _placeholder={{opacity:1, color: 'inherit' }} color= '#243A69' size='md'/>
                <Input placeholder =  'Número de vagas'  _placeholder={{opacity:1, color: 'inherit' }} color= '#243A69' size='md'/>
                <Input placeholder =  'Horário da aula'  _placeholder={{opacity:1, color: 'inherit' }} color= '#243A69'size='md' />
                <ButtonCadastrar Text="Cadastrar" />
              </Stack>
            
          </FormControl>

      </Center>
      
    </Flex>
   </Box>
      
  );
};

export default CreateEletivas;