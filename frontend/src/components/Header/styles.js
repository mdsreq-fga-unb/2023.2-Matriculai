import { chakra, MenuList, MenuItem, Image } from '@chakra-ui/react';

export const StyledMenuList = chakra(MenuList, {
  baseStyle: {
    listStyle: 'circle',
    padding: 0,
    margin: 0,
  },
});

export const StyledMenuItem = chakra(MenuItem, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    color: 'white', // Cor azul para o texto
    fontFamily: 'Arial, sans-serif', // Altera a fonte
    backgroundColor: '#243A69',
  },
});

export const StyledImage = chakra(Image, {
  baseStyle: {
    maxWidth: '24px',
    maxHeight: '24px',
    marginRight: '10px', // Adiciona um espaçamento entre a imagem e o texto
  },
});
