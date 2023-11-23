import React from "react";
import Header from '../../components/Header/index.js'
import axios from "axios"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Flex, Box, Heading, Spacer, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import cmtnLogo from '../../img/cmtnLogo.png'
import menuHamburguer from '../../icon/menuHamburguer.png'
import userIcon from '../../icon/usuario-do-circulo 1.png';
import settingsIcon from '../../icon/definicoes 1.png';
import helpIcon from '../../icon/interrogatorio 1.png';
import logoutIcon from '../../icon/sair-alt 1.png';

const Home = () => {

return (
    <Header></Header>
  );
};

export default Home;
