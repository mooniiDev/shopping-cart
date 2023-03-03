import { useState, useEffect } from 'react';

// A custom hook that allows to monitor changes in the screen size
// and return a boolean value that can be used to conditionally
// render components based on the screen size
function useScreenSize(query) {
  const [isMobile, setIsMobile] = useState(false);

  // A callback function, that updates the `isMobile` state variable
  // whenever the screen size changes
  function handleScreenSizeChange(event) {
    setIsMobile(event.matches);
  }

  useEffect(() => {
    // Check if `window` object exists and if
    // the `window.matchMedia` method is available before using it
    if (typeof window !== 'undefined' && window.matchMedia) {
      // Define a `MediaQueryList` object using the `window.matchMedia` method
      // Pass in a media query string that checks if the screen width
      // is less than or equal to the given size
      const mediaQuery = window.matchMedia(query);
      // Set the initial value of the `isMobile` state variable
      // to the result of the `matches` property of the `MediaQueryList` object
      setIsMobile(mediaQuery.matches);
      // Add an event listener to the `MediaQueryList` object that listens
      // for changes in the screen size and call `handleScreenSizeChange`
      // function when a change occurs
      mediaQuery.addEventListener('change', handleScreenSizeChange);

      return () => {
        mediaQuery.removeEventListener('change', handleScreenSizeChange);
      };
    }
    // In cases where the `window` object is not defined or the `window.matchMedia` method is not available,
    // we cannot add the event listener and hence, we do not need a cleanup function.
    // In such cases, we return an empty arrow function `() => {}` from the `useEffect` hook
    // to satisfy the `return` requirement and avoid any potential errors.
    return () => {};
  }, [query]);

  return isMobile;
}

export default useScreenSize;
