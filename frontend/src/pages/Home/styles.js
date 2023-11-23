import { chakra, MenuList, MenuItem, Image, Container } from '@chakra-ui/react';

export const StyledMenuList = chakra(MenuList, {
  baseStyle: {
    listStyle: 'circle',
    padding: 0,
    margin: 0,
  },
});

// export const StyledContainer = chakra( Container, {
//   baseStyle: {
//     gap:'15vh',
//     display:'flex',
//     alig:'center',
//     justify-content:'center',
//     flex-direction:'column',
//     width:'100%',
//     height:'100%',
//     box-shadow:'0 1px 2px #0003',
//     background-color:'pink',
//     max-width: '1000vh',
//     max-height: '650vh',
//     padding: '0vh',
//     border-radius:'60px',
//   }
// });

