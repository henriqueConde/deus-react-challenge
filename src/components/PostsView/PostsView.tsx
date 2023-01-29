import { List } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

const TRANSLATIONS = {
  GRID: 'layout.view.grid',
  LIST: 'layout.view.list',
};

type PostsViewProps = {
  isGridView: boolean;
  handleGridView: () => void;
  handleListView: () => void;
};

const PostsView = ({
  isGridView,
  handleGridView,
  handleListView,
}: PostsViewProps) => {
  const { t } = useTranslation();
  return (
    <S.Wrapper data-testid={isGridView ? 'grid-view' : 'list-view'}>
      {!isGridView ? (
        <S.IconButton
          size="small"
          icon={<S.GridIcon />}
          onClick={handleGridView}
        >
          {t(TRANSLATIONS.GRID)}
        </S.IconButton>
      ) : (
        <S.IconButton size="small" icon={<List />} onClick={handleListView}>
          {t(TRANSLATIONS.LIST)}
        </S.IconButton>
      )}
    </S.Wrapper>
  );
};

export default PostsView;
