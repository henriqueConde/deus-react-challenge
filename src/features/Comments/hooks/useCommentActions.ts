import { useCallback, useState } from 'react';

const useCommentActions = () => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showEditCommentForm, setShowEditCommentForm] = useState(false);

  const handleHideCommentForm = useCallback(() => {
    setShowCommentForm(false);
  }, []);

  const handleHideEditCommentForm = useCallback(() => {
    setShowEditCommentForm(false);
  }, []);

  const handleMakeCommentClick = useCallback(() => {
    setShowCommentForm(!showCommentForm);
  }, [showCommentForm]);

  const handleEditCommentClick = useCallback(() => {
    setShowEditCommentForm(!showEditCommentForm);
  }, [showEditCommentForm]);

  return {
    handleMakeCommentClick,
    handleEditCommentClick,
    handleHideCommentForm,
    handleHideEditCommentForm,
    showCommentForm,
    showEditCommentForm,
  };
};

export default useCommentActions;
