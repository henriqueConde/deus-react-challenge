import * as S from './styles';

export type AnchorProps = {
  children: React.ReactNode;
  path: string;
  color?: 'white' | 'black';
};

const Anchor = ({ path, children, color = 'white' }: AnchorProps) => (
  <S.Anchor to={path} color={color}>
    {children}
  </S.Anchor>
);

export default Anchor;
