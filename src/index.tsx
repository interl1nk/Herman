import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_en from './translations/en/global.json'
import global_rus from './translations/ru/global.json'

import App from './components/App'
import './index.css'


const savedLanguage = sessionStorage.getItem('language') || 'ru';

i18next.init({
  interpolation: { escapeValue: false },
  lng: savedLanguage, 
  resources: {
    en: {
      global: global_en
    },
    ru: {
      global: global_rus
    }
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
          <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
