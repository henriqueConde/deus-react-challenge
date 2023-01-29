import { LanguageDropdown } from '@layouts/LanguageDropdown';
import { Anchor } from '@components/Anchor';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

const Header = () => {
  const { t } = useTranslation();
  return (
    <S.Wrapper data-testid="header" data-cy="header">
      <Anchor path="/" color="black">
        <S.Home>{t('home.link.text')}</S.Home>
      </Anchor>
      <S.LangWrapper>
        <LanguageDropdown />
      </S.LangWrapper>
    </S.Wrapper>
  );
};

export default Header;
