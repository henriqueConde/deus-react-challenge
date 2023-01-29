import { useTranslation } from 'react-i18next';
import { PostsList } from '@features/Posts/components/PostsList';
import { PostsView } from '@components/PostsView';
import SearchBar from '@layouts/SearchBar/SearchBar';
import useLayoutView from './hooks/useLayoutView';
import * as S from './styles';

const Home = () => {
  const { t } = useTranslation();
  const { isGridView, handleGridView, handleListView } = useLayoutView();
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <div>
          <h2>{t('home.main.title')}</h2>
          <p>{t('home.greeting')}</p>
        </div>
        <PostsView
          isGridView={isGridView}
          handleGridView={handleGridView}
          handleListView={handleListView}
        />
      </S.TitleWrapper>
      <PostsList isGridView={isGridView} />
    </S.Wrapper>
  );
};

export default Home;
