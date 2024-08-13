import React, { useEffect, useState } from 'react';

const useMediaMatch = (query: string) => {
  const [isMediaMatched, setIsMediaMatched] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);

    // Initial match check
    setIsMediaMatched(mediaQuery.matches);

    // Listener for changes in media query
    const updateMatch = () => setIsMediaMatched(mediaQuery.matches);

    mediaQuery.addEventListener('change', updateMatch);

    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, [query]);

  return isMediaMatched;
};

export default useMediaMatch;
