import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Container, Flex, Text, Select, FormControl, FormLabel, Checkbox, Button, Center, Stack, CheckboxGroup } from "@chakra-ui/react";
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

const NewEnrolmentElectives = () => {
  const { userId, userSy } = useAuth();
  const user = userId()
  const schoolYear = userSy()
  const [showAlert, setShowAlert] = useState(false);
  const [numElectives, setNumElectives] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();
  const [eletivas, setEletivas] = useState([]);

  useEffect(() => {
    const fetchEletivas = async () => {
      try {
        const response = await axios.get(
          "https://backend-matriculai.vercel.app/elective/electives"
        );
        setEletivas(response.data);
      } catch (error) {
        console.error("Erro ao buscar eletivas:", error);
      }
    };

    const numElectives = async () => {    
        if (parseInt(schoolYear) === 1) {
          setNumElectives(6)
        } else if (parseInt(schoolYear) === 2 || parseInt(schoolYear) === 3) {
          setNumElectives(4)
        }
    }

    numElectives();
    fetchEletivas();
  }, []);

  const eletivasFiltradas = eletivas.filter((eletiva) => eletiva.school_year === parseInt(schoolYear));


  const formik = useFormik({
    initialValues: {
        eletivas: [],
    },
    validationSchema: yup.object({
      eletivas: yup.array().test('conditionalExactCount', `É necessário selecionar exatamente ${numElectives} eletiva(s)`, function (value) {
        let requiredCount;
    
        if (parseInt(schoolYear) === 1) {
          requiredCount = 5;
        } else if (parseInt(schoolYear) === 2 || parseInt(schoolYear) === 3) {
          requiredCount = 3;
        }
    
        return value.length === requiredCount;
      }),
    }),    
    onSubmit: async(values) => {
      values.eletivas.push("Projeto de Vida")

      try{
          const response = await axios.post("https://backend-matriculai.vercel.app/elective/matricula-eletivas",
          {
            names: JSON.stringify(values.eletivas),
            student_id: parseInt(user),
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
          } else if(response.status === 200){
            toast({
              title: "Matrícula já realizada.",
              description: "Sua matrícula já foi realizada!",
              status: "error",
              duration: 2800,
              isClosable: true,
              position: "top",
            });

            setShowAlert(true);
            setTimeout(() => {
              navigate("/home-student");
            }, 2000);
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
                Matricule-se em eletivas
                </Text>
            </C.titulo>
        </Center>
        <FormControl marginTop="2vh">
          <FormLabel color="#243A69" fontWeight='bold'>
            Selecione as eletivas
          </FormLabel>
        
          <CheckboxGroup value={formik.values.eletivas} onChange={(values) => formik.setFieldValue("eletivas", values)
                    }>
            <Checkbox isChecked color="#243A69">Projeto de Vida</Checkbox>
            {eletivasFiltradas.map((eletiva) => 
              <Checkbox isChecked={formik.values.eletivas.includes(eletiva.name)} color="#243A69" marginLeft="1vh" value={eletiva.name} >{eletiva.name} </Checkbox>
            )}
          </CheckboxGroup>
          {formik.touched.eletivas &&
                    formik.errors.eletivas && (
                      <Text color="red.500" fontSize="sm">
                        {formik.errors.eletivas}
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

export default NewEnrolmentElectives;
