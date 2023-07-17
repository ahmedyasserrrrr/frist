import {React,useState} from 'react';
import   "./App.css"
import { Routes,Route } from 'react-router-dom';
import Homee from './Components/Homee';
import '@fontsource/roboto/700.css';
import Home from './Components/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Create from './Components/Create';


const App = () => {
  const [Mode, setMode] = useState('light');
  const [None, setNone] = useState('none');
  const [Type, setType] = useState('permanent');

  const darkTheme = createTheme({
    palette: {
      mode: Mode,
    },
  });
  return (
    <div >
       <ThemeProvider theme={darkTheme}>
      <CssBaseline />    
<Homee  setMode={setMode}  None={None} setNone={setNone} Type={Type} setType={setType} />
    <Routes>
      <Route path='/'   element={<Home/>}  />
      <Route path='Create'   element={<Create/>}  />
    </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;
