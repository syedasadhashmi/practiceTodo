import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'success',
        alignSelf: 'center',
      }}
    >
      <Heading size={'lg'}>To Do List</Heading>
    </Box>
  );
};

export default Header;
