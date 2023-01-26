import { useCallback, useState } from 'react';

const useLayoutView = () => {
  const [isGridView, setIsGridView] = useState(true);

  const handleGridView = useCallback(() => {
    setIsGridView(true);
  }, []);

  const handleListView = useCallback(() => {
    setIsGridView(false);
  }, []);

  return {
    isGridView,
    handleGridView,
    handleListView,
  };
};

export default useLayoutView;
