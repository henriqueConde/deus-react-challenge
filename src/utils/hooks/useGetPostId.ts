import { useParams } from 'react-router-dom';

export const useGetPostId = () => {
  const { id } = useParams();
  const postId = id && +id;
  return { postId };
};

export default useGetPostId;
