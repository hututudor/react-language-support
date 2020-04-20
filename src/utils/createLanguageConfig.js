export const createLanguageConfig = options => {
  const config = {};

  if (!options.languages) {
    throw new Error(
      'react-language-support: no languages provided in the config'
    );
  }

  config.languages = options.languages;
  config.localStorageKey = options.localStorageKey || 'react-language-support';
  config.defaultLanguage =
    options.defaultLanguage || Object.keys(options.languages)[0];

  return config;
};
