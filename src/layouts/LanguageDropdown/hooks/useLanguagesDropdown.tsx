import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const translationsOptions = [
  {
    value: 'en',
  },
  {
    value: 'pt',
  },
];

function useLanguageDropdown(currentLang: string) {
  const { i18n } = useTranslation();
  const { changeLanguage } = i18n;
  const [value, setValue] = useState(currentLang);

  const handleChangeLanguage = (name: string, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    changeLanguage(value);
  }, [changeLanguage, value]);

  return {
    handleChangeLanguage,
    translationsOptions,
    value,
  };
}

export default useLanguageDropdown;
