import React from "react";
import axios from "axios"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex, Box, Heading, Spacer, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import cmtnLogo from '../../img/cmtnLogo.png'
import menuHamburguer from '../../icon/menuHamburguer.png'
import userIcon from '../../icon/usuario-do-circulo 1.png';
import settingsIcon from '../../icon/definicoes 1.png';
import helpIcon from '../../icon/interrogatorio 1.png';
import logoutIcon from '../../icon/sair-alt 1.png';



const Header = () => {


  
  const StyledMenuList = styled(MenuList)`
    list-style: 'circle';
    padding: 0;
    margin: 0;
  `;

  const StyledMenuItem = styled(MenuItem)`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    color: white; /* Cor azul para o texto */
    font-family: Arial, sans-serif; /* Altera a fonte */
    background-color: #243A69;
  `;

  const StyledImage = styled(Image)`
    max-width: 24px;
    max-height: 24px;
    margin-right: 10px; /* Adiciona um espaçamento entre a imagem e o texto */
  `;

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
        <Box maxWidth={'40px'} maxHeight={'40px'} marginTop={'-12px'} marginBottom={'3px'} >
          <Menu>
            <MenuButton border={'none'} bgColor={'#243A69'} >
              <Image src={menuHamburguer} alt='menuHamburguer' style={{ maxWidth: '100%', height: 'auto' }}/>
            </MenuButton>
            <StyledMenuList>
              <StyledMenuItem>
                <StyledImage src={userIcon} alt='User Icon' />
                Conta
              </StyledMenuItem>
              <StyledMenuItem>
                <StyledImage src={settingsIcon} alt='Settings Icon' />
                Configuração
              </StyledMenuItem>
              <StyledMenuItem>
                <StyledImage src={helpIcon} alt='Help Icon' />
                Ajuda
              </StyledMenuItem>
              <StyledMenuItem>
                <StyledImage src={logoutIcon} alt='Logout Icon' />
                <button>Sair</button>
              </StyledMenuItem>
            </StyledMenuList>
          </Menu>
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;
