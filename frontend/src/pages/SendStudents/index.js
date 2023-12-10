import React, { useState } from 'react';
import axios from 'axios';
import { Container, Flex} from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { ChakraProvider } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const SendStudent = () => {
    
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('arquivo', selectedFile);

        axios.post('http://localhost:3001/send-file/extract-students', formData)
        .then(response => {
            console.log('Resposta do servidor:', response.data);
        })
        .catch(error => {
            console.error('Erro ao enviar arquivo:', error);
        })
    }

  return (

    <ChakraProvider>
      <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="1">
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Enviar Arquivo</button>
      </Container>
      <Footer />
    </Flex>
    </ChakraProvider>
    
  );
};

export default SendStudent;