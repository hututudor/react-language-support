import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

const LanguageProvider = ({ children, config }) => {
  const [store, setStore] = useState(config);

  useEffect(() => {
    const currentLanguage =
      localStorage.getItem(config.localStorageKey) || config.defaultLanguage;

    changeCurrentLanguage(currentLanguage);
  }, []);

  const changeCurrentLanguage = name => {
    setStore({ ...store, currentLanguage: name });
    localStorage.setItem(store.localStorageKey, name);
  };

  return (
    <LanguageContext.Provider value={{ config: store, changeCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.object.isRequired
};

export { LanguageProvider, LanguageContext };
