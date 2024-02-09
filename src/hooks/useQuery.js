import { useEffect, useState } from 'react';

function useQuery(url) {
  const [queryState, setQueryState] = useState({
    isLoaded: false,
    data: null,
  });

  useEffect(() => {
    setQueryState((prevState) => ({ ...prevState, isLoaded: false }));
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setQueryState({ data, isLoaded: true });
      })
      .catch((err) => console.error(err));
  }, [url]);

  return queryState;
}

export default useQuery;
