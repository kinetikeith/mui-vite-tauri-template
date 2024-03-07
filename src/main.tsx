import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({});

render(
  <ThemeProvider theme={ theme }>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('app')!
)
