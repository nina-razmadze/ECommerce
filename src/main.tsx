import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './poviders/AuthProvider';
import GlobalCss from './assets/styles/global.css';

import { LocalProvider } from './poviders/localeProvider';
import Globalprovider from './poviders/Globalprovider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LocalProvider>
          <Globalprovider>
            <App />
          </Globalprovider>
        </LocalProvider>
      </AuthProvider>
      <GlobalCss />
    </BrowserRouter>
  </React.StrictMode>
);
