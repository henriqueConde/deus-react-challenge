import { CommentStateContext } from '@models/CommentStateContext';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
  useLayoutEffect,
  useCallback,
} from 'react';

const TRANSLATIONS = {
  REPLY_BTN: 'commnent.form.reply.btn',
  EDIT_BTN: 'commnent.form.edit.btn',
  SHOW_REPLIES: 'commnent.form.show.replies.btn',
  HIDE_REPLIES: 'commnent.form.hide.replies.btn',
  CANCEL_REPLY: 'commnent.form.cancel.reply.btn',
  CANCEL_EDIT: 'commnent.form.cancel.edit.btn',
};

export const initialState: CommentStateContext = {
  handleReplyClick: () => {},
  handleMakeCommentClick: () => {},
  handleEditCommentClick: () => {},
  editBtnText: TRANSLATIONS.EDIT_BTN,
  replyBtnText: TRANSLATIONS.REPLY_BTN,
  displayRepliesBtnText: TRANSLATIONS.SHOW_REPLIES,
  showCommentForm: false,
  showEditCommentForm: false,
  showReplies: false,
  setShowCommentForm: () => {},
  setShowEditCommentForm: () => {},
};

export const CommentContext = createContext<CommentStateContext>(initialState);

export const useCommentContext = () => useContext(CommentContext);

const CommentStateProvider = ({ children }: PropsWithChildren) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showEditCommentForm, setShowEditCommentForm] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [editBtnText, setEditBtnText] = useState(TRANSLATIONS.EDIT_BTN);
  const [replyBtnText, setReplyBtnText] = useState(TRANSLATIONS.REPLY_BTN);
  const [displayRepliesBtnText, setDisplayRepliesBtnText] = useState(
    TRANSLATIONS.SHOW_REPLIES
  );

  const handleReplyClick = useCallback(() => {
    setShowReplies(!showReplies);
    if (showReplies) {
      setDisplayRepliesBtnText(TRANSLATIONS.SHOW_REPLIES);
    } else {
      setDisplayRepliesBtnText(TRANSLATIONS.HIDE_REPLIES);
    }
  }, [showReplies]);

  const handleMakeCommentClick = useCallback(() => {
    setShowCommentForm(!showCommentForm);
  }, [showCommentForm]);

  const handleEditCommentClick = useCallback(() => {
    setShowEditCommentForm(!showEditCommentForm);
  }, [showEditCommentForm]);

  useLayoutEffect(() => {
    if (showCommentForm) {
      setShowEditCommentForm(false);
      setEditBtnText(TRANSLATIONS.EDIT_BTN);
      setReplyBtnText(TRANSLATIONS.CANCEL_REPLY);
    } else {
      setReplyBtnText(TRANSLATIONS.REPLY_BTN);
    }
  }, [showCommentForm]);

  useLayoutEffect(() => {
    if (showEditCommentForm) {
      setShowCommentForm(false);
      setReplyBtnText(TRANSLATIONS.REPLY_BTN);
      setEditBtnText(TRANSLATIONS.CANCEL_EDIT);
    } else {
      setEditBtnText(TRANSLATIONS.EDIT_BTN);
    }
  }, [showEditCommentForm]);

  const contextValues = useMemo(() => {
    return {
      handleReplyClick,
      handleMakeCommentClick,
      handleEditCommentClick,
      editBtnText,
      replyBtnText,
      displayRepliesBtnText,
      showCommentForm,
      showEditCommentForm,
      showReplies,
      setShowCommentForm,
      setShowEditCommentForm,
    };
  }, [
    displayRepliesBtnText,
    editBtnText,
    handleEditCommentClick,
    handleMakeCommentClick,
    handleReplyClick,
    replyBtnText,
    showCommentForm,
    showEditCommentForm,
    showReplies,
  ]);

  return (
    <CommentContext.Provider value={contextValues}>
      {children}
    </CommentContext.Provider>
  );
};

export default CommentStateProvider;
