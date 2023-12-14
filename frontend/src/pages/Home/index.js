import React, { useState, useEffect } from "react";
import { Container, Flex, Text, HStack, Button, Center } from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { ChakraProvider } from "@chakra-ui/react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [currentRegistrationPeriod, setCurrentRegistrationPeriod] = useState(null);

  useEffect(() => {
    const fetchCurrentRegistrationPeriod = async () => {
      try {
        const response = await axios.get("https://backend-matriculai.vercel.app/registration-period/current");
        setCurrentRegistrationPeriod(response.data);
      } catch (error) {
        console.error("Erro ao buscar o período de matrícula atual:", error);
      }
    };

    fetchCurrentRegistrationPeriod();
  }, []);

  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
        <Header />
        <Container flex="1" marginTop="5vh">
          <Center>
            <C.titulo>
              <Text textAlign={"center"} fontSize={"3xl"} color={"#243A69"} as={"b"}>
                Bem vindo, administrador!
              </Text>
            </C.titulo>
          </Center>

          <Center>
            <HStack spacing="4" marginTop="2vh">
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/criar-trilha">Criar trilha</Link>
              </Button>
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/criar-eletiva">Criar eletiva</Link>
              </Button>
            </HStack>
          </Center>

          <Center>
            <HStack spacing="4" marginTop="2vh">
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/excluir-trilhas">Excluir trilha</Link>
              </Button>
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/excluir-eletivas">Excluir eletiva</Link>
              </Button>
            </HStack>
          </Center>

          <Center>
            <HStack spacing="4" marginTop="2vh">
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/trilhas">Listagem trilhas</Link>
              </Button>
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/eletivas">Listagem Eletivas</Link>
              </Button>
            </HStack>
          </Center>

          <Center>
            <HStack spacing="4" marginTop="2vh">
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/cadastrar-estudantes">Importar estudantes</Link>
              </Button>
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/periodo-matriculas">Período de matrículas</Link>
              </Button>
            </HStack>
          </Center>

          <Center>
            <HStack spacing="4" marginTop="2vh">
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/recommendations">Disciplinas disponíveis</Link>
              </Button>
              <Button colorScheme="facebook" size="lg" width="35vh">
                <Link to="/solicitacao-matricula">Solicitações de matrículas</Link>
              </Button>
            </HStack>
          </Center>

{currentRegistrationPeriod && (
  <Center>
    <Text fontSize="lg" color="#243A69" marginTop="2vh">
      Período de matrícula atual:{" "}
      {`${new Date(currentRegistrationPeriod.start).toLocaleDateString()} às ${new Date(
        new Date(currentRegistrationPeriod.start).getTime() + (new Date(currentRegistrationPeriod.start).getHours() < 3 ? 25 : 3) * 60 * 60 * 1000
      ).toLocaleTimeString()} - ${new Date(currentRegistrationPeriod.end).toLocaleDateString()} às ${new Date(
        new Date(currentRegistrationPeriod.end).getTime() + 3 * 60 * 60 * 1000
      ).toLocaleTimeString()}`}
    </Text>
  </Center>
)}


      </Container>
      <Footer />
    </Flex>
  </ChakraProvider>
);
};

export default Home;
