import React from "react";
import { Container, Flex, FormControl, FormLabel, Input, FormHelperText, Text, Center} from "@chakra-ui/react";
import ButtonCadastrar from "../../components/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import * as C from "./styles";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { ChakraProvider } from "@chakra-ui/react";

import { Link } from "react-router-dom";



const RegistrationPeriod = () => {
    const navigate = useNavigate();
    const toast = useToast();

    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="1">
            <Center paddingTop="5">
                  <C.titulo>
                    <Text
                      textAlign={"center"}
                      fontSize={"4xl"}
                      color={"#243A69"}
                      as={"b"}
                    >
                      PERÍODO DE MATRÍCULA
                    </Text>
                  </C.titulo>
            </Center>
        <FormControl marginTop='5vh' marginBottom='3VH'>
            <FormLabel  color= '#243A69'>Data de Início</FormLabel>
              <Input
                maxLength={40}
                type='date' 
                size='lg'
                isRequired
                color='#243A69'
                placeholder='Data de Início'
                />
        
            <FormLabel  color= '#243A69'>Hora de Ínicio</FormLabel>
              <Input
                maxLength={40}
                type='time' 
                size='lg'
                isRequired
                color='#243A69'
                placeholder='Hora de Ínicio'
                />
            
            <FormLabel  color= '#243A69'>Data de Fim</FormLabel>
              <Input
                maxLength={40}
                type='date' 
                size='lg'
                isRequired
                color='#243A69'
                placeholder='Data de Fim'
                />
            
            <FormLabel  color= '#243A69'>Hora de Fim</FormLabel>
              <Input
                maxLength={40}
                type='time' 
                size='lg'
                isRequired
                color='#243A69'
                placeholder='Hora de Fim'
                />

            
        </FormControl>
        <Center paddingBottom={5}>
            <ButtonCadastrar
            Text="Cadastrar"
            ></ButtonCadastrar>
        </Center>
        
      </Container>
      <Footer />
    </Flex>
    </ChakraProvider>
    
  );
};

export default RegistrationPeriod;
