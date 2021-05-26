import React from 'react';
import ReactDOM from 'react-dom';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,

  document.getElementById('root')
);
