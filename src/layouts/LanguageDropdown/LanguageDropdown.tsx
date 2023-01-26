import { Dropdown } from '@components/Dropdown';
import useLanguageDropdown from './hooks/useLanguagesDropdown';

function LanguageDropdown() {
  const { translationsOptions, handleChangeLanguage, value } =
    useLanguageDropdown('en');

  return (
    <Dropdown
      optionsData={translationsOptions}
      onInputChange={handleChangeLanguage}
      name="language"
      selectValue={value}
      testId="lang-dropdown"
    />
  );
}

export default LanguageDropdown;
