import { MetaInfo } from '@components/MetaInfo';
import formatDate from '@utils/formatDate';
import { Button } from '@components/Button';
import { Anchor } from '@components/Anchor';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

export type PostPreviewProps = {
  userName: string;
  publishDate: string;
  title: string;
  description: string;
  slug: string;
  postId: number;
};

const PostPreview = ({
  userName,
  publishDate,
  title,
  description,
  slug,
  postId,
}: PostPreviewProps) => {
  const { result: postDate } = formatDate(publishDate, 'DD/MM/YYYY');
  const { t } = useTranslation();

  const content = (
    <div data-cy="post-preview">
      <S.AuthorDate>
        <MetaInfo>
          {userName} - {postDate}
        </MetaInfo>
      </S.AuthorDate>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.AnchorWrapper>
        <Anchor path={`posts/${postId}/${slug}`}>
          <Button size="medium" tabIndex={-1}>
            {t('post.preview.read.post.btn')}
          </Button>
        </Anchor>
      </S.AnchorWrapper>
    </div>
  );

  return <S.Wrapper>{content}</S.Wrapper>;
};

export default PostPreview;
