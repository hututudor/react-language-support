import React, { useContext } from 'react';

import {
  LanguageProvider,
  LanguageContext,
  Lang,
  createLanguageConfig
} from 'react-language-support';

const languageConfig = {
  languages: {
    en: {
      hello: 'Hi {{name}}!'
    },
    fr: {
      hello: 'Bonjour {{name}}!'
    }
  },
  localStorageKey: 's'
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

      {JSON.stringify(context, null, 2)}
      <br />
    </>
  );
};

const App = () => {
  return (
    <LanguageProvider config={createLanguageConfig(languageConfig)}>
      <Buttons />
      <Lang replace={{ name: 'Tudor' }}>hello</Lang>
    </LanguageProvider>
  );
};

export default App;
