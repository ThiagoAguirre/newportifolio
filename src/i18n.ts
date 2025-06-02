import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: 'Home',
      Skills: 'Skills',
      Experience: 'Experience',
      Projects: 'Projects',
      Contact: 'Contact',
      // Adicione outras traduções conforme necessário
    },
  },
  pt: {
    translation: {
      Home: 'Início',
      Skills: 'Habilidades',
      Experience: 'Experiência',
      Projects: 'Projetos',
      Contact: 'Contato',
      // Adicione outras traduções conforme necessário
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
