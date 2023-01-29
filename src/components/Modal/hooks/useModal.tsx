import { useCallback, useState } from 'react';

const useModal = () => {
  const [modal, setModal] = useState(false);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setModal(true);
  }, []);

  return {
    handleCloseModal,
    handleOpenModal,
    modal,
  };
};

export default useModal;
