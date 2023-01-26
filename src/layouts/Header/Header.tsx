import { LanguageDropdown } from '@layouts/LanguageDropdown';
import { Home } from '@styled-icons/material-outlined';
import { Anchor } from '@components/Anchor';
import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper data-testid="header">
      <Anchor path="/" color="black">
        <S.Home>
          <Home />
          <div>Home</div>
        </S.Home>
      </Anchor>
      <S.LangWrapper>
        <LanguageDropdown />
      </S.LangWrapper>
    </S.Wrapper>
  );
};

export default Header;
