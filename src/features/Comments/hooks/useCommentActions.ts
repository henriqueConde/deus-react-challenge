import { useCallback, useEffect, useState } from 'react';

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

  useEffect(() => {
    if (showCommentForm) {
      handleHideEditCommentForm();
    }
  }, [handleHideEditCommentForm, showCommentForm]);

  useEffect(() => {
    if (showEditCommentForm) {
      handleHideCommentForm();
    }
  }, [handleHideCommentForm, showEditCommentForm]);

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
