import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainCard from './components/MainCard/MainCard';
import { Box } from '@mui/material';


function App() {
  return (
    <Box sx={{width:'100%', height:'100%', marginLeft:'0px', marginRight:'0px'}}>
      <Navbar />
      <MainCard />
    </Box>
  );
}

export default App;
