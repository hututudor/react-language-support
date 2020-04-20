import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const LanguageContext = createContext();

const LanguageProvider = ({ children, config }) => {
  const [store, setStore] = useState(config);

  const changeCurrentLanguage = name => {
    setStore({ ...store, currentLanguage: name });
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
