import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import MainCard from './components/MainCard/MainCard';
import { Box, CssBaseline, PaletteMode, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { getDesignTokens } from './themes/global-theme';


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light')

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleMode = () => {
    if (mode === 'light'){
      setMode('dark')
    }
    else{
      setMode('light')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{width:'100%', height:'100%', marginLeft:'0px', marginRight:'0px', padding:'20px'}}>
        <Navbar handleMode={handleMode}/>
        <MainCard />
      </Box>
    </ThemeProvider>
  );
}

export default App;
