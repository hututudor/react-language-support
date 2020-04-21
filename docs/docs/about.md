---
id: about
title: About
---

> Easy to use multi-language support library for React

[![NPM](https://img.shields.io/npm/v/react-lang.svg)](https://www.npmjs.com/package/react-lang) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Documentation

http://react-language-support.tudorhutu.ro

## Features

- Create multiple language packs
- Variable/Replacement support for text
- Persistent storage of the preferred language
- Fast and easy to use, with no almost no config at all

## Install

```bash
npm install --save react-language-support
```

## Usage

```jsx
import React from 'react';

import {
  LanguageProvider,
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
  }
};

const App = () => {
  return (
    <LanguageProvider config={createLanguageConfig(languageConfig)}>
      <Lang replace={{ name: 'John doe' }}>hello</Lang>
    </LanguageProvider>
  );
};

export default App;
```

## Contribute

- Issue Tracker: https://github.com/hututudor/react-language-support/issues
- Source Code: https://github.com/hututudor/react-language-support

## License

MIT © [hututudor](https://github.com/hututudor)
