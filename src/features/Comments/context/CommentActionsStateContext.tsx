import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { CommentActionsStateContext as CommentActionsStateModel } from '@models/CommentActionsStateContext';
import useCommentActions from '../hooks/useCommentActions';

export const initialState: CommentActionsStateModel = {
  handleMakeCommentClick: () => {},
  handleEditCommentClick: () => {},
  showCommentForm: false,
  showEditCommentForm: false,
  handleHideCommentForm: () => {},
  handleHideEditCommentForm: () => {},
};

export const CommentActionsStateContext =
  createContext<CommentActionsStateModel>(initialState);

export const useCommentActionsStateContext = () =>
  useContext(CommentActionsStateContext);

const CommentActionsStateProvider = ({ children }: PropsWithChildren) => {
  const {
    handleMakeCommentClick,
    handleEditCommentClick,
    handleHideCommentForm,
    handleHideEditCommentForm,
    showCommentForm,
    showEditCommentForm,
  } = useCommentActions();

  const contextValues = useMemo(() => {
    return {
      handleMakeCommentClick,
      handleEditCommentClick,
      showCommentForm,
      showEditCommentForm,
      handleHideCommentForm,
      handleHideEditCommentForm,
    };
  }, [
    handleEditCommentClick,
    handleHideCommentForm,
    handleHideEditCommentForm,
    handleMakeCommentClick,
    showCommentForm,
    showEditCommentForm,
  ]);

  return (
    <CommentActionsStateContext.Provider value={contextValues}>
      {children}
    </CommentActionsStateContext.Provider>
  );
};

export default CommentActionsStateProvider;
