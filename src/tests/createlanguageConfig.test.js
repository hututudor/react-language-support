import { createLanguageConfig } from '../utils/createLanguageConfig';

describe('createLanguageConfig function', () => {
  it('should throw if languages are not provided', () => {
    expect(() => createLanguageConfig({})).toThrowError(
      'react-language-support: no languages provided in the config'
    );
  });

  it('should return localStorageKey if provided', () => {
    expect(
      createLanguageConfig({
        languages: { en: {} },
        localStorageKey: 'test-key'
      }).localStorageKey
    ).toBe('test-key');
  });

  it('should return default localStorageKey if none provided', () => {
    expect(
      createLanguageConfig({
        languages: { en: {} }
      }).localStorageKey
    ).toBe('react-language-support');
  });

  it('should return languages', () => {
    expect(
      createLanguageConfig({
        languages: { en: {}, fr: {} }
      }).languages
    ).toStrictEqual({ en: {}, fr: {} });
  });

  it('should return defaultLanguage if provided', () => {
    expect(
      createLanguageConfig({
        languages: { en: {} },
        defaultLanguage: 'fr'
      }).defaultLanguage
    ).toBe('fr');
  });

  it('should return computed defaultLanguage if none provided', () => {
    expect(
      createLanguageConfig({
        languages: { en: {} }
      }).defaultLanguage
    ).toBe('en');
  });
});
