import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ButtonCadastrar from "../../components/Button";
import * as C from "./styles";
import axios from "axios";
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
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import * as yup from "yup";

const CreateEletivas = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      nomeEletiva: "",
      descricao: "",
      serie: "",
      professor: "",
      vagas: "",
      horario: "",
    },
    validationSchema: yup.object({
      nomeEletiva: yup
        .string()
        .required("O nome da eletiva é obrigatório")
        .min(3, "O nome da eletiva deve ter pelo menos 3 caracteres")
        .max(40, "O nome da eletiva deve ter no máximo 40 caracteres"),
      descricao: yup
        .string()
        .required("A breve descrição é obrigatória")
        .max(150, "A breve descrição deve ter no máximo 150 caracteres"),
      serie: yup.string().required("A série é obrigatória"),
      professor: yup
      .string()
      .required("O professor responsável é obrigatório")
      .matches(/^[A-Za-z\s]+$/, "O nome do professor responsável não pode conter números"),
      vagas: yup
        .number()
        .required("O número de vagas é obrigatório")
        .min(15, "O número de vagas deve ser no mínimo 15")
        .max(30, "O número de vagas deve ser no máximo 30"),
      horario: yup
        .number()
        .required("O horário da disciplina é obrigatório")
        .min(1, "O horário da disciplina deve ser no mínimo o primeiro horário(1)")
        .max(5, "O horário da disciplina deve ser no máximo o quinto horário(5)"),
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          name: values.nomeEletiva,
          description: values.descricao,
          school_year: parseInt(values.serie),
          teacher: values.professor,
          vacancies: parseInt(values.vagas),
          schedules: parseInt(values.horario),
        };

        const response = await axios.post("http://localhost:3001/elective/createElective", data);

        if (response.status === 201) {
          toast({
            title: "Eletiva cadastrada.",
            description: "Eletiva cadastrada com sucesso!",
            status: "success",
            duration: 2800,
            isClosable: true,
            position: "top",
          });

          // Sucesso, redirecionar ou realizar outras ações necessárias
          navigate("/home");
        } else {
          // Exibir mensagem de erro
          toast({
            title: "Erro ao cadastrar eletiva.",
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
          title: "Erro ao cadastrar eletiva.",
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

          <Header></Header>
        <Container flex='1'>

          <Box width="100%" paddingLeft="2vh" paddingRight="2vh" paddingTop="2vh" borderWidth={1} borderRadius={8} boxShadow="lg">
            <FormControl display="flex" flexDirection="column" gap="1">
              <Center>

            <C.titulo >
                  <Text textAlign={'center'} fontSize={'x-large'} color={'#243A69'} as={'b'}>CADASTRO DE ELETIVAS</Text>
                </C.titulo>
              </Center>
              <FormLabel  color= '#243A69'>Nome da eletiva </FormLabel>
              <Input
                type='text' 
                size='lg'
                isRequired
                placeholder='Nome da eletiva'
                {...formik.getFieldProps("nomeEletiva")}
                />
                {formik.touched.nomeEletiva && formik.errors.nomeEletiva && (
                  <Text color="red.500" fontSize="sm">
                    {formik.errors.nomeEletiva}
                  </Text>
                )}

              <FormLabel color= '#243A69'>Descrição da eletiva</FormLabel> 
              <Input 
                type='text'
                isRequired
                placeholder='Descrição da eletiva'
                {...formik.getFieldProps("descricao")}
                />
                {formik.touched.descricao && formik.errors.descricao && (
                  <Text color="red.500" fontSize="sm">
                    {formik.errors.descricao}
                  </Text>
                )}

              <FormLabel color= '#243A69'>Série</FormLabel> 
              <Select
                type='text'
                placeholder='Selecione a série' 
                _placeholder={{opacity:1, color: '#243A69' }} 
                isRequired
                {...formik.getFieldProps("serie")}
                >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </Select>
              {formik.touched.serie && formik.errors.serie && (
                  <Text color="red.500" fontSize="sm">
                    {formik.errors.serie}
                  </Text>
                )}

              <FormLabel color= '#243A69'>Professor Responsável</FormLabel> 
              <Input
                type='text' 
                isRequired
                placeholder='Professor Responsável'
                {...formik.getFieldProps("professor")}
                />
                {formik.touched.professor && formik.errors.professor && (
                  <Text color="red.500" fontSize="sm">
                    {formik.errors.professor}
                  </Text>
                )}

              
              <FormLabel color= '#243A69'>Número de vagas</FormLabel> 
              <Input
                type='text' 
                isRequired
                placeholder='Número de vagas'
                {...formik.getFieldProps("vagas")}
                />
                {formik.touched.vagas && formik.errors.vagas && (
                  <Text color="red.500" fontSize="sm">
                    {formik.errors.vagas}
                  </Text>
                )}
              
              <FormLabel color= '#243A69'>Horário da aula</FormLabel> 
              <Input
                type='text'
                isRequired
                placeholder='Horário da aula'
                {...formik.getFieldProps("horario")}
                />
                {formik.touched.horario && formik.errors.horario && (
                  <Text color="red.500" fontSize="sm">
                    {formik.errors.horario}
                  </Text>
                )}
              
              <Center paddingBottom={5} padding={5}>

              <ButtonCadastrar Text="Cadastrar" onClick={formik.handleSubmit}></ButtonCadastrar>              </Center>
              
              
              
            </FormControl>
          </Box>
          
        </Container>
        <Footer> </Footer>
        </Flex>
    </ChakraProvider>
   
      
  );
};

export default CreateEletivas;
