import { GridView, List } from '@styled-icons/material-outlined';
import * as S from './styles';

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
  return (
    <S.Wrapper data-testid={isGridView ? 'grid-view' : 'list-view'}>
      {!isGridView ? (
        <S.IconButton
          size="small"
          icon={
            <GridView
              style={{ width: '16px', height: '14px', marginBottom: '2px' }}
            />
          }
          onClick={handleGridView}
        >
          Grid
        </S.IconButton>
      ) : (
        <S.IconButton size="small" icon={<List />} onClick={handleListView}>
          List
        </S.IconButton>
      )}
    </S.Wrapper>
  );
};

export default PostsView;
