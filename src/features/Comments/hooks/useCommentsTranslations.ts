import { useLayoutEffect, useState } from 'react';

const TRANSLATIONS = {
  REPLY_BTN: 'commnent.form.reply.btn',
  EDIT_BTN: 'commnent.form.edit.btn',
  SHOW_REPLIES: 'commnent.form.show.replies.btn',
  HIDE_REPLIES: 'commnent.form.hide.replies.btn',
  CANCEL_REPLY: 'commnent.form.cancel.reply.btn',
  CANCEL_EDIT: 'commnent.form.cancel.edit.btn',
};

type UseCommentsTranslationsProps = {
  showEditCommentForm: boolean;
  showCommentForm: boolean;
  showReplies: boolean;
};

const useCommentsTranslations = ({
  showEditCommentForm,
  showCommentForm,
  showReplies,
}: UseCommentsTranslationsProps) => {
  const [editBtnText, setEditBtnText] = useState(TRANSLATIONS.EDIT_BTN);
  const [replyBtnText, setReplyBtnText] = useState(TRANSLATIONS.REPLY_BTN);
  const [displayRepliesBtnText, setDisplayRepliesBtnText] = useState(
    TRANSLATIONS.SHOW_REPLIES
  );

  useLayoutEffect(() => {
    if (showReplies) {
      setDisplayRepliesBtnText(TRANSLATIONS.HIDE_REPLIES);
    } else {
      setDisplayRepliesBtnText(TRANSLATIONS.SHOW_REPLIES);
    }
  }, [showReplies]);

  useLayoutEffect(() => {
    if (showCommentForm) {
      setEditBtnText(TRANSLATIONS.EDIT_BTN);
      setReplyBtnText(TRANSLATIONS.CANCEL_REPLY);
    } else {
      setReplyBtnText(TRANSLATIONS.REPLY_BTN);
    }
  }, [showCommentForm]);

  useLayoutEffect(() => {
    if (showEditCommentForm) {
      setReplyBtnText(TRANSLATIONS.REPLY_BTN);
      setEditBtnText(TRANSLATIONS.CANCEL_EDIT);
    } else {
      setEditBtnText(TRANSLATIONS.EDIT_BTN);
    }
  }, [showEditCommentForm]);

  return {
    editBtnText,
    replyBtnText,
    displayRepliesBtnText,
  };
};

export default useCommentsTranslations;
