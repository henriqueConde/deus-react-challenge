import { GridView, List } from '@styled-icons/material-outlined';
import * as S from './styles';

type PostsViewProps = {
  isGridView: boolean;
  setIsGridView: (arg: boolean) => void;
};

const PostsView = ({ isGridView, setIsGridView }: PostsViewProps) => {
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
          onClick={() => setIsGridView(true)}
        >
          Grid
        </S.IconButton>
      ) : (
        <S.IconButton
          size="small"
          icon={<List />}
          onClick={() => setIsGridView(false)}
        >
          List
        </S.IconButton>
      )}
    </S.Wrapper>
  );
};

export default PostsView;
