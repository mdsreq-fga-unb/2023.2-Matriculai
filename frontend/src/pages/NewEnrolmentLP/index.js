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

const NewEnrolmentLP = () => {
  const navigate = useNavigate();  
  const toast = useToast();
  const { userId, userSy } = useAuth();
  const user = userId()
  const schoolYear = userSy()
  const [showAlert, setShowAlert] = useState(false);
  const [trilhas, setTrilhas] = useState([]);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://backend-matriculai.vercel.app/learningpath/learningpath"
        );
        setTrilhas(response.data);
      } catch (error) {
        console.error("Erro ao buscar trilhas:", error);
      }
    };

    const checkRegistrationPeriod = async () => {
      try {
        const response = await axios.get(
          "https://backend-matriculai.vercel.app/registration-period/current"
        );
        const registrationPeriod = response.data;

        const currentDate = new Date();
        const isWithinRegistrationPeriod =
          currentDate >= new Date(registrationPeriod.start) &&
          currentDate <= new Date(registrationPeriod.end);

        setIsRegistrationOpen(isWithinRegistrationPeriod);
      } catch (error) {
        console.error("Erro ao verificar o período de matrícula:", error);
        setIsRegistrationOpen(false); // Defina como false em caso de erro
      }
    };

    checkRegistrationPeriod();
    fetchData();
  }, []);

  const formik = useFormik({
    initialValues: {
      learning_path_id: "",
    },
    validationSchema: yup.object({
      learning_path_id: yup.string().required("Uma trilha deve ser selecionada!"),
    }),
    onSubmit: async (values) => {
      try {
        if (!isRegistrationOpen) {
          toast({
            title: "Sua matrícula não pode ser realizada.",
            description: "Fora do período de matrículas!",
            status: "error",
            duration: 2800,
            isClosable: true,
            position: "top",
          });

          setShowAlert(true);
          setTimeout(() => {
            navigate("/home-student");
          }, 1000);
        } else if (schoolYear === "1") {
          toast({
            title: "Sua matrícula não pode ser realizada.",
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
        } else {
          const response = await axios.post(
            "https://backend-matriculai.vercel.app/learningpathenrolment/studentenrolment",
            {
              student_id: parseInt(user),
              learning_path_id: values.learning_path_id,
            }
          );

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
          } else if (response.status === 200) {
            toast({
              title: "Matrícula já realizada.",
              description: response.data.message || "Sua matrícula já foi realizada!",
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
        }
      } catch (error) {
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
    },
  });

  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
        <Header />
        <Container flex="1" marginTop="5vh">
          {isRegistrationOpen ? (
            <FormControl marginTop="2vh">
              <FormLabel color="#243A69">
                Selecione uma trilha
              </FormLabel>
              <Select
                type="text"
                placeholder="Selecione a trilha"
                _placeholder={{ opacity: 1, color: "#243A69" }}
                isRequired
                {...formik.getFieldProps("learning_path_id")}
              >
                {trilhas.map((op) => (
                  <option key={op.id} value={op.id}>
                    {op.name}
                  </option>
                ))}
              </Select>
              {formik.touched.learning_path_id &&
                formik.errors.learning_path_id && (
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
          ) : (
            <Center>
              <Text fontSize="xl" color="red.500" fontWeight="bold">
                Fora do período de matrículas.
              </Text>
            </Center>
          )}
        </Container>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default NewEnrolmentLP;
