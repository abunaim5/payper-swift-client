import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes/Routes.jsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Providers/AuthProvider.jsx'

const colors = {
  primary: {
    50: '#E3E2FC',
    100: '#C8C6F9',
    200: '#A09DF2',
    300: '#7974EB',
    400: '#524BE4',
    500: '#2F2CD8', // This is the base color you provided
    600: '#2622B0',
    700: '#1D1988',
    800: '#141160',
    900: '#0A0938',
  },
};

const fonts = {
  body: `"Rubik", sans-serif`
};

const queryClient = new QueryClient();

const theme = extendTheme({ fonts, colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider theme={theme}>
          <RouterProvider router={router} />
        </ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
