import React from 'react';
import { Link } from 'gatsby'
import { useLocale } from '../../hooks/locale';
// import useLanguageMapping from '../useLanguageMapping';

const LanguageSwitchLink = ({isOpen, setIsOpen }) => {
  // Grab the locale (passed through context) from the Locale Provider 
  // through useLocale() hook
  const { locale } = useLocale();

  const notSelectedLang = (locale === 'hr') ? 'en' : 'hr';
  const localeLink = (locale === 'hr') ? '/en' : '/';

  return (
    <Link
      to={localeLink}
      onClick={() => setIsOpen(isOpen => !isOpen)}>{notSelectedLang}</Link>
  );
};

export default LanguageSwitchLink;