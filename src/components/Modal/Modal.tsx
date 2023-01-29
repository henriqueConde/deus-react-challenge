/* eslint-disable react/jsx-no-useless-fragment */
import { ReactNode } from 'react';
import FocusTrap from 'focus-trap-react';
import * as S from './styles';

type ModalProps = {
  show?: boolean;
  close: () => void;
  title: string;
  children: ReactNode;
};

const Modal = ({ show = false, close, title, children }: ModalProps) => {
  return (
    <>
      {show ? (
        <FocusTrap
          focusTrapOptions={{
            fallbackFocus: '#modal-wrapper',
          }}
        >
          <S.Wrapper
            id="modal-wrapper"
            data-testid="modal-wrapper"
            data-cy="modal-wrapper"
          >
            <S.Modal>
              <S.Header>
                <h3>{title}</h3>
                <S.CloseIcon
                  onClick={close}
                  data-testid="close-modal-icon"
                  data-cy="close-modal-icon"
                />
              </S.Header>
              <S.Body>{children}</S.Body>
            </S.Modal>
          </S.Wrapper>
        </FocusTrap>
      ) : null}
    </>
  );
};

export default Modal;
