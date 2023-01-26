import { useTranslation } from 'react-i18next';
import { PostsList } from '@features/Posts/components/PostsList';
import { FC, useState } from 'react';
import { PostsView } from '@components/PostsView';
import * as S from './styles';

const Home: FC = () => {
  const { t } = useTranslation();
  const [isGridView, setIsGridView] = useState(true);
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <div>
          <h2>{t('home.main.title')}</h2>
          <p>{t('home.greeting')}</p>
        </div>
        <PostsView isGridView={isGridView} setIsGridView={setIsGridView} />
      </S.TitleWrapper>

      <PostsList isGridView={isGridView} />
    </S.Wrapper>
  );
};

export default Home;
