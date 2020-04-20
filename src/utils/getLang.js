export const getLang = (
  { languages, currentLanguage, defaultLanguage },
  index,
  replace
) => {
  if (!languages || !currentLanguage || !defaultLanguage) {
    return '';
  }

  let lang = languages[currentLanguage];
  if (!lang) {
    return '';
  }

  let value = lang[index];
  if (!value) {
    lang = languages[defaultLanguage];

    if (!lang) {
      return '';
    }

    value = lang[index];

    if (!value) {
      return '';
    }
  }

  if (replace) {
    Object.keys(replace).forEach(replaceVar => {
      value = value.replace(
        new RegExp(`{{${replaceVar}}}`, 'g'),
        replace[replaceVar]
      );
    });
  }

  return value;
};
