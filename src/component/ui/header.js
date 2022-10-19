import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/">Home</Link>
    </Box>
  );
};

export default Header;
