export const getLang = ({ languages, currentLanguage }, index, replace) => {
  if (!languages || !currentLanguage) {
    return '';
  }

  const lang = languages[currentLanguage];
  if (!lang) {
    return '';
  }

  let value = lang[index];
  if (!value) {
    return '';
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
