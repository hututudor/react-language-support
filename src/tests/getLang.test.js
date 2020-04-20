import { getLang } from '../utils/getLang';

describe('getLang function', () => {
  it('should return empty if no languages is provided', () => {
    expect(getLang({ languages: {}, currentLanguage: 'en' }, '', {})).toBe('');
  });

  it('should return empty if no currentLanguage is provided', () => {
    expect(
      getLang(
        { languages: { en: {} }, currentLanguage: '', defaultLanguage: 'en' },
        '',
        {}
      )
    ).toBe('');
  });

  it('should return empty if no defaultLanguage is provided', () => {
    expect(
      getLang(
        { languages: { en: {} }, currentLanguage: 'en', defaultLanguage: '' },
        '',
        {}
      )
    ).toBe('');
  });

  it('should return empty if language does not exists', () => {
    expect(
      getLang({ languages: { en: {} }, currentLanguage: 'fr' }, '', {})
    ).toBe('');
  });

  it('should return empty if no index found in current language', () => {
    expect(
      getLang(
        {
          languages: { en: {}, fr: {} },
          currentLanguage: 'en',
          defaultLanguage: 'fr'
        },
        'test',
        {}
      )
    ).toBe('');
  });

  it('should return empty if no index found in default language', () => {
    expect(
      getLang(
        {
          languages: { en: {}, fr: {} },
          currentLanguage: 'en',
          defaultLanguage: 'fr'
        },
        'test',
        {}
      )
    ).toBe('');
  });

  it('should return the correct string without replacements', () => {
    expect(
      getLang(
        {
          languages: { en: { test: 'Test' } },
          currentLanguage: 'en',
          defaultLanguage: 'en'
        },
        'test',
        {}
      )
    ).toBe('Test');
  });

  it('should return the correct string with one replacement', () => {
    expect(
      getLang(
        {
          languages: { en: { test: 'Test {{test}}' } },
          currentLanguage: 'en',
          defaultLanguage: 'en'
        },
        'test',
        {
          test: 'test'
        }
      )
    ).toBe('Test test');
  });

  it('should return the correct string with multiple replacements', () => {
    expect(
      getLang(
        {
          languages: { en: { test: 'Test {{test}} {{test}} {{test2}}' } },
          currentLanguage: 'en',
          defaultLanguage: 'en'
        },
        'test',
        {
          test: 'test',
          test2: 'test2'
        }
      )
    ).toBe('Test test test test2');
  });

  it('should return index from default language if index from current language does not exists', () => {
    expect(
      getLang(
        {
          languages: { en: { test: 'Test' }, fr: {} },
          currentLanguage: 'fr',
          defaultLanguage: 'en'
        },
        'test',
        {
          test: 'test',
          test2: 'test2'
        }
      )
    ).toBe('Test');
  });
});
