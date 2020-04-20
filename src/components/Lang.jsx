import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { LanguageContext } from './LanguageContext';
import { getLang } from '../utils/getLang';

const Lang = ({ children, replace }) => {
  const context = useContext(LanguageContext);

  return getLang(context.config, children, replace);
};

Lang.propTypes = {
  children: PropTypes.node.isRequired,
  replace: PropTypes.object
};

export { Lang };
