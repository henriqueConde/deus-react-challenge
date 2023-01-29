import * as S from './styles';

export type LoadingProps = {
  color?: 'black' | 'bright' | 'purple';
  position?: 'center' | 'left' | 'right';
};

const Loading = ({ color = 'purple', position = 'center' }: LoadingProps) => {
  return (
    <S.Wrapper>
      <S.Loading
        color={color}
        position={position}
        data-testid="spinner"
        data-cy="spinner"
      />
    </S.Wrapper>
  );
};

export default Loading;
