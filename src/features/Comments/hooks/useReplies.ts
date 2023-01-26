import { mapToComments } from '@utils/mappers/mapToComments';
import { CommentAPI, CommentData } from '@models/Comment';
import { useEffect, useState } from 'react';

export const useReplies = (commentArr: CommentAPI[], id: number) => {
  const [replies, setReplies] = useState<CommentData[] | null>(null);
  const [hasReplies, setHasReplies] = useState(false);

  useEffect(() => {
    const theReplies = mapToComments(
      commentArr.filter((com) => com.parent_id === id)
    );
    setReplies(theReplies as CommentData[]);
    setHasReplies(theReplies.length > 0);
  }, [commentArr, id]);

  return { replies, hasReplies };
};
