/*import React from "react";
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
              
              <ButtonCadastrar Text="Cadastrar" />
              </Stack>
              
            </FormControl>
          </Box>
          </C.Content>
        </C.Container>
      </Box>
    </ChakraProvider>
   
      
  );
};

export default CreateEletivas;*/
import React from 'react'
import { Stack, Box, Text } from '@chakra-ui/react'
export const App = () => (
  <Stack width="2560px" height="1639px" maxWidth="100%" background="#FFFFFF">
    <Box
      borderRadius="30px"
      width="895px"
      height="1089px"
      maxWidth="100%"
      background="rgba(244, 244, 242, 0.5)"
    />
    <Box width="2560px" height="153px" maxWidth="100%" background="#243A69" />
    <Box>
      <Box width="163px" height="163px" />
      <Box width="89px" height="21px" background="#243A69" />
    </Box>
    <Box width="63px" height="63px" />
    <span className="unsupported" />
    <Box>
      <Stack
        justify="flex-start"
        align="flex-start"
        spacing="20px"
        width="492px"
        height="146px"
        maxWidth="100%"
      >
        <Box>
          <Box
            borderRadius="6px"
            width="717px"
            height="89px"
            maxWidth="100%"
            borderColor="#D2D2D2"
            borderStartWidth="1px"
            borderEndWidth="1px"
            borderTopWidth="1px"
            borderBottomWidth="1px"
          />
          <Text
            fontFamily="Cabin"
            fontWeight="regular"
            fontSize="24px"
            color="#243A69"
            width="200px"
            height="18.83px"
          >
            Nome da eletiva
          </Text>
        </Box>
      </Stack>
    </Box>
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="20px"
      width="492px"
      height="146px"
      maxWidth="100%"
    >
      <Box>
        <Box
          borderRadius="6px"
          width="717px"
          height="89px"
          maxWidth="100%"
          borderColor="#D2D2D2"
          borderStartWidth="1px"
          borderEndWidth="1px"
          borderTopWidth="1px"
          borderBottomWidth="1px"
        />
        <Text
          fontFamily="Cabin"
          fontWeight="regular"
          fontSize="24px"
          color="#243A69"
          width="200px"
          height="18.83px"
        >
          Descrição
        </Text>
      </Box>
    </Stack>
    <Stack
      justify="flex-start"
      align="flex-start"
      spacing="20px"
      width="492px"
      height="146px"
      maxWidth="100%"
    >
      <Box>
        <Box
          borderRadius="6px"
          width="717px"
          height="89px"
          maxWidth="100%"
          borderColor="#D2D2D2"
          borderStartWidth="1px"
          borderEndWidth="1px"
          borderTopWidth="1px"
          borderBottomWidth="1px"
        />
        <Text
          fontFamily="Cabin"
          fontWeight="regular"
          fontSize="24px"
          color="#243A69"
          width="200px"
          height="18.83px"
        >
          Série
        </Text>
      </Box>
    </Stack>
    <Box>
      <Box
        borderRadius="6px"
        width="717px"
        height="89px"
        maxWidth="100%"
        borderColor="#D2D2D2"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
      />
      <Text
        fontFamily="Cabin"
        fontWeight="regular"
        fontSize="24px"
        color="#243A69"
        width="200px"
        height="18.83px"
      >
        Nome da eletiva
      </Text>
    </Box>
    <Box
      borderRadius="6px"
      width="717px"
      height="89px"
      maxWidth="100%"
      borderColor="#D2D2D2"
      borderStartWidth="1px"
      borderEndWidth="1px"
      borderTopWidth="1px"
      borderBottomWidth="1px"
    />
    <Box
      borderRadius="6px"
      width="717px"
      height="89px"
      maxWidth="100%"
      borderColor="#D2D2D2"
      borderStartWidth="1px"
      borderEndWidth="1px"
      borderTopWidth="1px"
      borderBottomWidth="1px"
    />
    <Box>
      <Box
        borderRadius="6px"
        width="717px"
        height="89px"
        maxWidth="100%"
        borderColor="#D2D2D2"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
      />
    </Box>
    <Box>
      <Box
        borderRadius="6px"
        width="717px"
        height="89px"
        maxWidth="100%"
        borderColor="#D2D2D2"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
      />
      <Text
        fontFamily="Cabin"
        fontWeight="regular"
        fontSize="24px"
        color="#243A69"
        width="200px"
        height="18.83px"
      >
        Número de vagas
      </Text>
    </Box>
    <Box>
      <Box
        borderRadius="6px"
        width="717px"
        height="89px"
        maxWidth="100%"
        borderColor="#D2D2D2"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
      />
      <Text
        fontFamily="Cabin"
        fontWeight="regular"
        fontSize="24px"
        color="#243A69"
        width="293px"
        height="19px"
        maxWidth="100%"
      >
        Horário da disciplina
      </Text>
    </Box>
    <Box>
      <Box
        borderRadius="6px"
        width="717px"
        height="89px"
        maxWidth="100%"
        borderColor="#D2D2D2"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
      />
      <Text
        fontFamily="Cabin"
        fontWeight="regular"
        fontSize="24px"
        color="#243A69"
        width="329px"
        height="19px"
        maxWidth="100%"
      >
        Professor responsável
      </Text>
    </Box>
    <Box
      borderRadius="6px"
      width="717px"
      height="89px"
      maxWidth="100%"
      borderColor="#D2D2D2"
      borderStartWidth="1px"
      borderEndWidth="1px"
      borderTopWidth="1px"
      borderBottomWidth="1px"
    />
    <Box
      borderRadius="6px"
      width="717px"
      height="89px"
      maxWidth="100%"
      borderColor="#D2D2D2"
      borderStartWidth="1px"
      borderEndWidth="1px"
      borderTopWidth="1px"
      borderBottomWidth="1px"
    />
    <Box>
      <Box
        borderRadius="30px"
        width="717px"
        height="89px"
        maxWidth="100%"
        background="#243A69"
      />
      <Text
        fontFamily="Cabin"
        fontWeight="regular"
        fontSize="24px"
        color="#FFFFFF"
        width="103px"
        height="19px"
        textAlign="end"
      >
        Cadastrar
      </Text>
    </Box>
    <Text
      fontFamily="Cabin"
      fontWeight="bold"
      fontSize="64px"
      color="#243A69"
      width="565px"
      height="119px"
      maxWidth="100%"
      textAlign="end"
    >
      Cadastro de eletivas
    </Text>
    <Box width="2560px" height="91px" maxWidth="100%" background="#243A69" />
    <Text
      fontFamily="Cabin"
      fontWeight="regular"
      fontSize="24px"
      color="#F4F4F2"
      width="937px"
      height="28px"
      maxWidth="100%"
      textAlign="end"
    >
      Copyright © 2023 Centro de Ensino Médio de Taguatinga Norte. Todos os
      direitos reservados.
    </Text>
  </Stack>
)
export default CreateEletivas;