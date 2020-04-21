---
id: reference-guide
title: Reference guide
---

## createLanguageConfig

The only argument is an object with the following fields:

| Fields          |              Default value              | Role                                                                                                         |
| --------------- | :-------------------------------------: | ------------------------------------------------------------------------------------------------------------ |
| languages       |        _This field is required_         | Defines the languages that are available. Consists of an object with language names and indexes with values. |
| defaultLanguage | the first language defined in languages | Defines which language should be selected by default and also the fallback language for any index.           |
| localStorageKey |        'react-language-support'         | The key for the localStorage item.                                                                           |

## Lang

| Fields  | Required | Role                                                     |
| ------- | :------: | -------------------------------------------------------- |
| children |   true   | Specifies which index to use.                            |
| replace |  false   | List the variables that should be replaced in an object. |
