import React from "react";
import { Box, Center, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py="8" bg="gray.800" color="white" backgroundColor={'#243A69'}>
      <Center padding={'1vh'} justify="space-between" >
        <Text fontSize="sm" >Copyright © 2023 Centro de Ensino Médio de Taguatinga Norte. Todos os direitos reservados.</Text>
      </Center>
    </Box>
  );
};

export default Footer;
