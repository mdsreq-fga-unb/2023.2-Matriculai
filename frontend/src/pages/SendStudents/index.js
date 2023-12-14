import React, { useState } from 'react';
import axios from 'axios';
import { Container, Flex, Box, Text, Button, Input, Center, useToast, ChakraProvider } from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { Link } from "react-router-dom";

const SendStudent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  }

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('arquivo', selectedFile);

    axios.post('http://localhost:3001/send-file/extract-students', formData)
      .then(response => {
        console.log('Resposta do servidor:', response.data);
        // Exibir Toast de confirmação
        toast({
          title: "Arquivo enviado com sucesso!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top", // Definindo a posição para a parte superior
        });
      })
      .catch(error => {
        console.error('Erro ao enviar arquivo:', error);
        // Exibir Toast de erro, se necessário
        toast({
          title: "Erro ao enviar arquivo",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top", // Definindo a posição para a parte superior
        });
      })
  }

  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
        <Header />
        <Flex direction="column" align="center" justify="center" flex="1">
          <Box
            backgroundColor='#F4F4F2'
            borderRadius="30px"
            p="4"
            w="100%"
            h="25vh"
            maxW="400px"
            textAlign="center"
          >
            <Text color="#243A69" fontWeight="bold" fontSize="xx-large" mb="8">
              Importar dados
            </Text>
            <Input
              type="file"
              onChange={handleFileChange}
              display="none"
              id="fileInput"
            />
            <Flex direction="row" justify="center" mt="2">
              <label htmlFor="fileInput">
                <Button
                  as="span"
                  bg="#D2D2D2"
                  color="#243A69"
                  borderRadius="6px"
                  p="2"
                  cursor="pointer"
                  _hover={{ bg: "#C4C4C4" }}
                  mr="2" // Adicionando espaço à direita do botão
                  width='23vh'
                  size="lg"
                >
                  Selecionar arquivo
                </Button>
              </label>
              <Button
                onClick={handleUpload}
                bg="#243A69"
                color="#FFFFFF"
                borderRadius="10px"
                p="2"
                _hover={{ bg: "#1B2D4A" }}
                width='23vh'
                size="lg"
              >
                Enviar arquivo
              </Button>
            </Flex>
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default SendStudent;
