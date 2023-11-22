import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Heading, Spacer, Text, Center, Menu, MenuButton, MenuList, MenuItem, Button} from "@chakra-ui/react"; // Importe os componentes do Chakra UI ou outro framework que você esteja usando
import { Image } from '@chakra-ui/react'
import cmtnLogo from '../../img/cmtnLogo.png'
import menuHamburguer from '../../icon/menuHamburguer.png'

const CreateEletivas = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      backgroundColor="#243A69"
      color="white"
    >
      <Box>
        <Heading as="h1" size="lg">
          <Box maxWidth={'120px'} maxHeight={'120px'}  paddingLeft='30px'>
            <Image src={cmtnLogo} alt='student' style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Link to="/">Home</Link>
          <Box  maxWidth={'40px'} maxHeight={'40px'} marginTop={'-12px'} marginBottom={'3px'} >
          <Menu>
            <MenuButton border={'none'} bgColor={'#243A69'} >

              <Image src={menuHamburguer} alt='menuHamburguer' style={{ maxWidth: '100%', height: 'auto' }}/>  
            </MenuButton>
            <MenuList  >
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          </Box>
      </Box>
    </Flex>
      
  );
};

export default CreateEletivas;
