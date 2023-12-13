import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Container, Flex, Text, Select, FormControl, FormLabel, Input, Button, Center } from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { ChakraProvider } from "@chakra-ui/react";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles.js";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import ButtonCadastrar from "../../components/Button";


import { Link } from "react-router-dom";

const NewEnrolmentLP = () => {
  const { userId, userSy } = useAuth();
  const user = userId()
  const schoolYear = userSy()
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    async function fetchTrilhas() {
      try {
        const response = await axios.get('http://localhost:3001/learningpath/learningpath'); // Endpoint para buscar trilhas
        setTrilhas(response.data); // Define as trilhas na state 'trilhas'
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
      }
    }
    fetchTrilhas();
  }, []);

  const formik = useFormik({
    initialValues: {
      learning_path_id: "",
    },
    validationSchema: yup.object({
      learning_path_id: yup
        .string()
        .required("Uma trilha deve ser selecionada!")
    }),
    onSubmit: async(values) => {
      try{
        if(schoolYear === '1'){
          toast({
            title: "  Sua matrícula não pode ser realizada.",
            description: "Só alunos do segundo e terceiro ano podem se matricular!",
            status: "error",
            duration: 2800,
            isClosable: true,
            position: "top",
          });


          setShowAlert(true);
          setTimeout(() => {
            navigate("/home-student");
          }, 1000);
        }else{
          const response = await axios.post("http://localhost:3001/learningpathenrolment/studentenrolment",
          {
            student_id: parseInt(user),
            learning_path_id: values.learning_path_id
          }
          )

          if (response.status === 201) {
            toast({
              title: "Matrícula realizada.",
              description: "Matrícula realizada com sucesso!",
              status: "success",
              duration: 2800,
              isClosable: true,
              position: "top",
            });


            setShowAlert(true);
            setTimeout(() => {
              navigate("/home-student");
            }, 1000);
          } else {
            toast({
              title: "Erro na matrícula.",
              description: response.data.message || "Erro desconhecido.",
              status: "error",
              duration: 2800,
              isClosable: true,
              position: "top",
            });
          }
        }
      }catch(error){
        console.error("Erro ao cadastrar:", error);
        toast({
          title: "Erro na matrícula.",
          description: "Tente novamente mais tarde.",
          status: "error",
          duration: 2800,
          isClosable: true,
          position: "top",
        });
      }
    }
  })

  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="1" marginTop='5vh'>
        <Center>
            <C.titulo>
                <Text
                textAlign={"center"}
                fontSize={"3xl"}
                color={"#243A69"}
                as={"b"}
                >
                Matricule-se em uma trilha
                </Text>
            </C.titulo>
        </Center>
        <FormControl marginTop="2vh">
          <FormLabel color="#243A69">
            Selecione uma trilha
          </FormLabel>
          <Select
            type="text"
            placeholder="Selecione a trilha"
            _placeholder={{ opacity: 1, color: "#243A69" }} isRequired
            {...formik.getFieldProps("learning_path_id")}
          >
            {trilhas.map((op) => (
              <option value={op.name}>{op.name}</option>
            ))}
          </Select>
          {formik.touched.learning_path_id && formik.errors.learning_path_id && (
                    <Text color="red.500" fontSize="sm">
                      {formik.errors.learning_path_id}
                    </Text>
                  )}
          <Center paddingBottom={5} marginTop="3vh">
                    <ButtonCadastrar
                      Text="Cadastrar"
                      onClick={formik.handleSubmit}
                    ></ButtonCadastrar>
            </Center>
        </FormControl>
      </Container>
      <Footer />
    </Flex>
    </ChakraProvider>
    
  );
};

export default NewEnrolmentLP;
