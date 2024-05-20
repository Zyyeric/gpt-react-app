// src/App.jsx
import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import SwarmSessionForm from './SwarmSessionForm.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SwarmSessionForm />
    </ThemeProvider>
  );
}

export default App;

