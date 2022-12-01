import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
