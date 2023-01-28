import { LanguageDropdown } from '@layouts/LanguageDropdown';
import { Home } from '@styled-icons/material-outlined';
import { Anchor } from '@components/Anchor';
import { Info } from '@components/Info';
import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper data-testid="header">
      <Anchor path="/" color="black">
        <Info icon={<Home />}>Home</Info>
      </Anchor>
      <S.LangWrapper>
        <LanguageDropdown />
      </S.LangWrapper>
    </S.Wrapper>
  );
};

export default Header;
