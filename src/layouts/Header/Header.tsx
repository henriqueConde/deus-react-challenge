import { LanguageDropdown } from '@layouts/LanguageDropdown';
import { Home } from '@styled-icons/material-outlined';
import { Anchor } from '@components/Anchor';
import { Info } from '@components/Info';
import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper data-testid="header" data-cy="header">
      <Anchor path="/" color="black">
        <Info icon={<Home />}>
          <h3>Home</h3>
        </Info>
      </Anchor>
      <S.LangWrapper>
        <LanguageDropdown />
      </S.LangWrapper>
    </S.Wrapper>
  );
};

export default Header;
