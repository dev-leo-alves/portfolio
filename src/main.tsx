import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import {resources as locales} from "./locales/index.ts";
import { Provider } from './components/ui/provider.tsx';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pt-BR',
  fallbackLng: 'en',
  resources: locales,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider>
        <App />
      </Provider>
    </I18nextProvider>
  </StrictMode>,
)
