import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Spacer, Menu, MenuButton, Button, Container, Center } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import cmtnLogo from '../../img/cmtnLogo.png'
import menuHamburguer from '../../icon/menuHamburguer.png'
import userIcon from '../../icon/usuario-do-circulo 1.png';
import settingsIcon from '../../icon/definicoes 1.png';
import helpIcon from '../../icon/interrogatorio 1.png';
import logoutIcon from '../../icon/sair-alt 1.png';
import { StyledMenuList, StyledImage, StyledMenuItem } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { isSuperUser } = useAuth()
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const typeUser = isSuperUser()

  const handleLogout = async () => {
    const accessToken = sessionStorage.getItem("accessToken");
    try {
      await axios.post("https://backend-matriculai.vercel.app/auth/logout", { accessToken });
      sessionStorage.removeItem("accessToken");
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
  };

  const cancelLogout = () => {
    // Se o usuário cancelar o logout, você fecha a mensagem de confirmação
    setShowConfirmation(false);
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      backgroundColor="#243A69"
      color="white"
    >
      <Box maxWidth={'16vh'} maxHeight={'16vh'}  paddingLeft='3vh'>
        {typeUser === 'true' ? (
          <Link to="/home">
          <Image src={cmtnLogo} alt='student' style={{ maxWidth: '100%', height: 'auto' }} />
        </Link>
        ): (
          <Link to="/home-student">
          <Image src={cmtnLogo} alt='student' style={{ maxWidth: '100%', height: 'auto' }} />
        </Link>
        )}
        
      </Box>
      <Spacer />
      <Box maxWidth={'5vh'} maxHeight={'2vh'} marginTop={'-0.5px'} marginBottom={'3vh'} >
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
              <button onClick={() => setShowConfirmation(true)}>Sair</button>
            </StyledMenuItem>
          </StyledMenuList>
        </Menu>
      </Box>
       {/* Mensagem de confirmação */}
       {showConfirmation && (
        <div>
          <p>Deseja realmente sair?</p>
          <button onClick={handleLogout}>Sim</button>
          <button onClick={cancelLogout}>Cancelar</button>
        </div>
      )}
    </Flex>
  );
};

export default Header;
