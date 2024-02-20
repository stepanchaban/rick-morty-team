import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

function useDefineCharacterPageParams(): (
  type: string,
  params: string,
) => void {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const currentPath = location.pathname;

  function navigateToURLWithParams(type: string, params: string): void {
    searchParams.set(type, params);
    if (currentPath === '/characters') {
      navigate(`?${searchParams}`);
    } else {
      navigate(`/characters?${searchParams}`);
    }
  }
  return navigateToURLWithParams;
}

export default useDefineCharacterPageParams;
