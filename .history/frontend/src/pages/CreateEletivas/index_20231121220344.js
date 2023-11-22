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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react"
import { Heading } from "chakra-ui";


const CreateEletivas = () => {
  return (
   <Box h="200vh">
        <Header></Header>
    
    <Flex
      maxHeight='100vh'
      //width='full'
      align="center"
      justify="center"
      //bg="blackAlpha.200"
      //h="calc(100vh - 200 px)"
      px={12}
      py={12}
    >
      <C.Content>

      <Box
       padding='75px' alignSelf={'center'}
      >
        <FormControl display="flex" flexDirection="column" gap="4">
                    
          <C.titulo>
          <Text textAlign={'center'} fontSize={'x-large'} color={'#243A69'} as={'b'}>CADASTRO DE ELETIVAS</Text>
          </C.titulo>

          <Stack spacing{10}>

          
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
          
          <ButtonCadastrar Text="Cadastrar" />
          </Stack>
            
          
        </FormControl>
      </Box>
            </C.Content>
    </Flex>
   </Box>
      
  );
};

export default CreateEletivas;