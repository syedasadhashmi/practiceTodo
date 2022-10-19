import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box
      p={5}
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#319795',
        alignSelf: 'center',
      }}
    >
      <Heading size={'lg'}>To Do App</Heading>
    </Box>
  );
};

export default Header;
