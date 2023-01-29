import { useTranslation } from 'react-i18next';
import { PostsList } from '@features/Posts/components/PostsList';
import * as S from './styles';

const Home = () => {
  const { t } = useTranslation();
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <div>
          <S.MainTitle>{t('home.main.title')}</S.MainTitle>
        </div>
      </S.TitleWrapper>
      <PostsList />
    </S.Wrapper>
  );
};

export default Home;
