import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Details from './component/Details';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details/:id" element={<Details />} />
      </Routes>
      {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
    </ChakraProvider>
  );
}

export default App;
