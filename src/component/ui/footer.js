import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#319795',
        alignSelf: 'center',
      }}
    >
      <Heading size={'sm'}>@All Rights Reserved</Heading>
    </Box>
  );
};

export default Footer;
