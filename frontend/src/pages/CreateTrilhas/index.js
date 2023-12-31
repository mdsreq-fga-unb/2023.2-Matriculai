import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ButtonCadastrar from "../../components/Button";
import * as C from "./styles";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Input,
  Box,
  Center,
  FormControl,
  FormLabel,
  Select,
  Text,
  Stack,
  Flex,
  Container,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import * as yup from "yup";

const CreateTrilhas = () => {
  const { createEletivas } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const [showAlert, setShowAlert] = useState(false);
  const [eletivas, setEletivas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const formik = useFormik({
    initialValues: {
      nomeTrilha: "",
      descricao: "",
      serie: "",
      eletivas: [], 
    },
    validationSchema: yup.object({
      nomeTrilha: yup
        .string()
        .required("O nome da trilha é obrigatório")
        .min(3, "O nome da trilha deve ter pelo menos 3 caracteres")
        .max(40, "O nome da trilha deve ter no máximo 40 caracteres"),
      descricao: yup
        .string()
        .required("A breve descrição é obrigatória")
        .min(10, "A breve descrição deve ter pelo menos 10 caracteres")
        .max(150, "A breve descrição deve ter no máximo 150 caracteres"),
      serie: yup.string().required("A série é obrigatória"),
      eletivas: yup
        .array()
        .min(1, "É necessário selecionar pelo menos uma eletiva além do Projeto de Vida")
        .required("É necessário selecionar eletivas relacionadas"),
    }),
    onSubmit: async (values) => {
      values.eletivas.push("Projeto de Vida")
      try {
        const response = await axios.post(
          "https://backend-matriculai.vercel.app/learningpath/createLearningPaths",
          {
            name: values.nomeTrilha,
            description: values.descricao,
            school_year: parseInt(values.serie),
            electives: values.eletivas,
          }
        );

        if (response.status === 201) {
          toast({
            title: "Trilha cadastrada.",
            description: "Trilha cadastrada com sucesso!",
            status: "success",
            duration: 2800,
            isClosable: true,
            position: "top",
          });


          setShowAlert(true);
          setTimeout(() => {
            navigate("/home");
          }, 1000);
        } else {
          toast({
            title: "Erro ao cadastrar trilha.",
            description: response.data.message || "Erro desconhecido.",
            status: "error",
            duration: 2800,
            isClosable: true,
            position: "top",
          });
        }
      } catch (error) {
        console.error("Erro ao cadastrar:", error);
        toast({
          title: "Erro ao cadastrar trilha.",
          description: "Tente novamente mais tarde.",
          status: "error",
          duration: 2800,
          isClosable: true,
          position: "top",
        });
      }
    },
  });

  useEffect(() => {
    const fetchEletivas = async () => {
      try {
        const response = await axios.get(
          "https://backend-matriculai.vercel.app/elective/electives"
        );
        setEletivas(response.data);
      } catch (error) {
        console.error("Erro ao buscar eletivas:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEletivas();
  }, []);

  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
        <Header></Header>
        <Container flex="1">
          <Box
            width="100%"
            paddingLeft="2vh"
            paddingRight="2vh"
            paddingTop="2vh"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
          >
            <Box textAlign="center" alignSelf={"center"}>
              <FormControl
                display="flex"
                flexDirection="column"
                gap="4"
              >
                <Center paddingTop="5">
                  <C.titulo>
                    <Text
                      textAlign={"center"}
                      fontSize={"x-large"}
                      color={"#243A69"}
                      as={"b"}
                    >
                      CADASTRO DE TRILHAS
                    </Text>
                  </C.titulo>
                </Center>

                <Stack spacing={2}>
                  <FormLabel color="#243A69">Nome da trilha </FormLabel>
                  <Input
                    maxLength={40}
                    type="text"
                    size="lg"
                    isRequired
                    placeholder="Nome da trilha"
                    {...formik.getFieldProps("nomeTrilha")}
                  />
                  {formik.touched.nomeTrilha &&
                    formik.errors.nomeTrilha && (
                      <Text color="red.500" fontSize="sm">
                        {formik.errors.nomeTrilha}
                      </Text>
                    )}

                  <FormLabel color="#243A69">Descrição da trilha</FormLabel>
                  <Input
                    maxLength={150}
                    type="text"
                    isRequired
                    placeholder="Descrição da trilha"
                    {...formik.getFieldProps("descricao")}
                  />
                  {formik.touched.descricao &&
                    formik.errors.descricao && (
                      <Text color="red.500" fontSize="sm">
                        {formik.errors.descricao}
                      </Text>
                    )}

                  <FormLabel color="#243A69">Série</FormLabel>
                  <Select
                    type="text"
                    placeholder="Selecione a série"
                    _placeholder={{ opacity: 1, color: "#243A69" }}
                    isRequired
                    {...formik.getFieldProps("serie")}
                  >
                    <option value={1}> 1</option>
                    <option value={2}> 2</option>
                    <option value={3}> 3</option>
                  </Select>
                  {formik.touched.serie && formik.errors.serie && (
                    <Text color="red.500" fontSize="sm">
                      {formik.errors.serie}
                    </Text>
                  )}

                  <FormLabel color="#243A69">
                    Eletivas relacionadas{" "}
                  </FormLabel>
                  <CheckboxGroup
                    colorScheme="green"
                    value={formik.values.eletivas}
                    onChange={(values) =>
                      formik.setFieldValue("eletivas", values)
                    }
                  >
                    <Stack spacing={[1, 2]} direction={["column", "column"]}>
                      <Checkbox isChecked>Projeto de Vida</Checkbox>
                      {isLoading ? (
                        <Text color="red.500" fontSize="sm">
                          {formik.errors.eletivas}
                        </Text>
                      ) : (
                        eletivas.map((eletiva) => (
                          <Checkbox
                            key={eletiva.id}
                            value={eletiva.name}
                          >
                            {eletiva.name}
                          </Checkbox>
                        ))
                      )}
                    </Stack>
                  </CheckboxGroup>
                  {formik.touched.eletivas &&
                    formik.errors.eletivas && (
                      <Text color="red.500" fontSize="sm">
                        {formik.errors.eletivas}
                      </Text>
                    )}

                  <C.labelError>{formik.errors.message}</C.labelError>
                  <Center paddingBottom={5}>
                    <ButtonCadastrar
                      Text="Cadastrar"
                      onClick={formik.handleSubmit}
                    ></ButtonCadastrar>
                  </Center>
                </Stack>
              </FormControl>
            </Box>
          </Box>
        </Container>
        <Footer></Footer>
      </Flex>
    </ChakraProvider>
  );
};

export default CreateTrilhas;
