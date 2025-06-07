import { useCallback } from 'react';

export const useNavigate = () => {
  const navigate = useCallback((path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('popstate'));
  }, []);

  return navigate;
};