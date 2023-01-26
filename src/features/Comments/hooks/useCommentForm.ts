import { useReducer } from 'react';
import { validateForm } from '@utils/validateForm';
import { CreateCommentData } from '@models/CreateCommentData';
import { commentFieldsValidations } from '../components/CommentForm/fieldsValidations';

type Props = {
  initialValues: CreateCommentData;
  onSubmit: (commentData: CreateCommentData) => void;
};

enum ActionType {
  IsChanging = 'changing',
  Success = 'success',
  Error = 'invalid',
}

type Action = {
  type: ActionType;
  payload?: any;
};

export type CreateCommentFormState = {
  values: CreateCommentData;
  fieldError: any;
};

function reducer(state: CreateCommentFormState, { type, payload }: Action) {
  switch (type) {
    case 'changing':
      return {
        ...state,
        values: payload.values,
        fieldError: payload.fieldError,
      };
    case 'success':
      return {
        ...state,
        values: payload.values,
        fieldError: '',
      };
    case 'invalid':
      return { ...state, fieldError: payload.fieldError };
    default:
      throw new Error('Unknown action type');
  }
}

const useCommentForm = ({ initialValues, onSubmit }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    values: initialValues,
    fieldError: null,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const errors = validateForm(state.values, commentFieldsValidations);

    if (Object.keys(errors).length) {
      dispatch({ type: ActionType.Error, payload: { fieldError: errors } });
      return;
    }

    const resetState: CreateCommentFormState = {
      values: initialValues,
      fieldError: null,
    };

    dispatch({ type: ActionType.Success, payload: { ...resetState } });
    onSubmit(state.values);
  };

  const handleInput = (field: string, inputValue: string) => {
    const values: CreateCommentData = {
      ...state.values,
      [field as keyof CreateCommentData]: inputValue,
    };
    const newState = {
      ...state,
      values,
      fieldError: {
        ...state.fieldError,
        [field]: '',
      },
    };
    dispatch({ type: ActionType.IsChanging, payload: newState });
  };

  return {
    state,
    handleInput,
    handleSubmit,
  };
};

export default useCommentForm;
