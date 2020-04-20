import React, { useContext } from 'react';

import { LanguageProvider, LanguageContext, Lang } from 'react-language-support';

const languageConfig = {
  languages: {
    en: {
      hello: 'Hi {{name}}!'
    },
    fr: {
      hello: 'Bonjour {{name}}!'
    }
  },
  currentLanguage: 'en',
  defaultLanguage: 'fr',
  localStorageKey: ''
};

const Buttons = () => {
  const context = useContext(LanguageContext);

  return (
    <>
      <button onClick={() => context.changeCurrentLanguage('fr')}>
        Change to fr
      </button>
      <button onClick={() => context.changeCurrentLanguage('en')}>
        Change to en
      </button>
    </>
  );
};

const App = () => {
  return (
    <LanguageProvider config={languageConfig}>
      <Buttons />
      <Lang replace={{ name: 'Tudor' }}>hello</Lang>
    </LanguageProvider>
  );
};

export default App;
