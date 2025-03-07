import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import {resources as locales} from "./locales/index.ts";
import { Provider } from './components/ui/provider.tsx';
import { GlobalStyle } from './styles/globals';

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
        <GlobalStyle/>
        <App />
      </Provider>
    </I18nextProvider>
  </StrictMode>,
)
