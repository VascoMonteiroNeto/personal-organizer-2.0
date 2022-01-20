import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import { createTheme } from '@mui/material';

import './App.css';

import Create from './pages/Create';
import Notes from './pages/Notes';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: purple,
  }
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Notes />} />
            <Route path='/create' element={<Create />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}
