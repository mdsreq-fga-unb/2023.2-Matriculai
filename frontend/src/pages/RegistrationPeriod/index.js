import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Flex, FormControl, FormLabel, Input, FormHelperText, Text, Center } from "@chakra-ui/react";
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

  const tenYearsFromNow = new Date();
  tenYearsFromNow.setFullYear(tenYearsFromNow.getFullYear() + 10);

  const formik = useFormik({
    initialValues: {
      startDate: "",  
      startTime: "",
      endDate: "",
      endTime: "",
    },
    validationSchema: yup.object({
      startDate: yup
        .date()
        .required("A data de ínicio é obrigatória")
        .min(new Date(new Date().setDate(new Date().getDate()-1)), "A data de início deve ser a partir de hoje")
        .max(tenYearsFromNow, "A data de início não pode ser mais do que 10 anos a partir de hoje"),
      startTime: yup
        .string()
        .required("A hora de ínicio é obrigatória")
        .test('isAfterOrEqualCurrentTime', 'A hora de ínicio deve ser posterior à hora atual', function (startTime) {
          const currentDateTime = new Date();
          const selectedTime = new Date(currentDateTime);
          const [hours, minutes] = startTime.split(':');
          selectedTime.setHours(hours, minutes, 0);  
  
          return selectedTime >= currentDateTime;
        }),
      endDate: yup
        .date()
        .required("A data de término é obrigatória")
        .min(
          yup.ref("startDate"),
          "A data de término deve ser igual ou posterior à data de início"
        )
        .max(tenYearsFromNow, "A data de início não pode ser mais do que 10 anos a partir de hoje")
        .test('afterStart', 'A data de término deve ser posterior à data de início', function (endDate) {
          const { startDate } = this.parent;
          return endDate && startDate ? new Date(endDate) >= new Date(startDate) : true;
        }),
      endTime: yup
        .string()
        .required("A hora de término é obrigatória")
        .test('isAfterStart', 'A hora de término deve ser posterior à hora de início', function (endTime) {
          const { startDate, startTime, endDate } = this.parent;
      
          if (endDate === startDate) {
            const startDateTime = new Date(`${startDate}T${startTime}`);
            const endDateTime = new Date(`${endDate}T${endTime}`);
      
            return endDateTime > startDateTime;
          }
      
          return true;
        }),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          "https://backend-matriculai.vercel.app/registration-period/create",
          {
            start: values.startDate + " " + values.startTime,
            end: values.endDate + " " + values.endTime,
          }
        );

        if (response.status === 201) {
          toast({
            title: "Período de Matrícula Criado.",
            description: "Período de matrícula criado com sucesso!",
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
            title: "Erro ao criar período de matrícula.",
            description: response.data.message || "Erro desconhecido.",
            status: "error",
            duration: 2800,
            isClosable: true,
            position: "top",
          });
        }
      } catch (error) {
        console.error("Erro ao criar:", error);
        toast({
          title: "Erro ao criar período de matrícula.",
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
            <FormLabel color='#243A69'>Data de Início</FormLabel>
            <Input
              maxLength={40}
              type='date'
              size='lg'
              isRequired
              color='#243A69'
              placeholder='Data de Início'
              {...formik.getFieldProps("startDate")}
            />
            {formik.touched.startDate &&
              formik.errors.startDate && (
                <Text color="red.500" fontSize="sm">
                  {formik.errors.startDate}
                </Text>
              )}

            <FormLabel color='#243A69'>Hora de Ínicio</FormLabel>
            <Input
              maxLength={40}
              type='time'
              size='lg'
              isRequired
              color='#243A69'
              placeholder='Hora de Ínicio'
              {...formik.getFieldProps("startTime")}
            />
            {formik.touched.startTime &&
              formik.errors.startTime && (
                <Text color="red.500" fontSize="sm">
                  {formik.errors.startTime}
                </Text>
              )}

            <FormLabel color='#243A69'>Data de Término</FormLabel>
            <Input
              maxLength={40}
              type='date'
              size='lg'
              isRequired
              color='#243A69'
              placeholder='Data de Término'
              {...formik.getFieldProps("endDate")}
            />
            {formik.touched.endDate &&
              formik.errors.endDate && (
                <Text color="red.500" fontSize="sm">
                  {formik.errors.endDate}
                </Text>
              )}

            <FormLabel color='#243A69'>Hora de Término</FormLabel>
            <Input
              maxLength={40}
              type='time'
              size='lg'
              isRequired
              color='#243A69'
              placeholder='Hora de Término'
              {...formik.getFieldProps("endTime")}
            />
            {formik.touched.endTime &&
              formik.errors.endTime && (
                <Text color="red.500" fontSize="sm">
                  {formik.errors.endTime}
                </Text>
              )}

          </FormControl>
          <Center paddingBottom={5}>
            <ButtonCadastrar
              Text="Cadastrar"
              onClick={formik.handleSubmit}
            ></ButtonCadastrar>
          </Center>

        </Container>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default RegistrationPeriod;
