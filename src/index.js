import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react'; // для темизации, обернем в него App; передадим туда один проп (замена переменным var)
import './index.css';
import { App } from './components/App';
import { theme } from './constans/theme';
import { Global } from '@emotion/react'; //ГЛОБАЛЬНЫЕ СТИЛИ
import { GlobalStyle } from './constans/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
