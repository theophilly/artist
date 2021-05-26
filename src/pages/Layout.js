import React from 'react';
import Header from '../components/Header';
import { Box } from '@chakra-ui/react';

export default function Layout({ children }) {
  return (
    <Box>
      <Header></Header>
      {children}
    </Box>
  );
}
