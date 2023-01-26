import { mapToComments } from '@utils/mappers/mapToComments';
import { CommentAPI, CommentData } from '@models/Comment';
import { useCallback, useEffect, useState } from 'react';

export const useReplies = (commentArr: CommentAPI[], id: number) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState<CommentData[] | null>(null);
  const [hasReplies, setHasReplies] = useState(false);

  const handleSowReplies = useCallback(() => {
    setShowReplies(!showReplies);
  }, [showReplies]);

  useEffect(() => {
    const theReplies = mapToComments(
      commentArr.filter((com) => com.parent_id === id)
    );
    setReplies(theReplies as CommentData[]);
    setHasReplies(theReplies.length > 0);
  }, [commentArr, id]);

  return { replies, hasReplies, showReplies, handleSowReplies };
};
