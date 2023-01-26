export type CommentStateContext = {
  showCommentForm: boolean;
  setShowCommentForm: (arg: boolean) => void;
  showEditCommentForm: boolean;
  setShowEditCommentForm: (arg: boolean) => void;
  showReplies: boolean;
  editBtnText: string;
  replyBtnText: string;
  displayRepliesBtnText: string;
  handleReplyClick: () => void;
  handleMakeCommentClick: () => void;
  handleEditCommentClick: () => void;
};
