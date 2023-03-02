import { useState, useEffect } from 'react';

// A custom hook that allows to monitor changes in the screen size
// and return a boolean value that can be used to conditionally
// render components based on the screen size
function useScreenSize(query) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define a `MediaQueryList` object using the `window.matchMedia` method
    // Pass in a media query string that checks if the screen width
    // is less than or equal to the given size
    const mediaQuery = window.matchMedia(query);
    // Set the initial value of the `isMobile` state variable
    // to the result of the `matches` property of the `MediaQueryList` object
    setIsMobile(mediaQuery.matches);

    // A callback function, that updates the `isMobile` state variable
    // whenever the screen size changes
    function handleScreenSizeChange(event) {
      setIsMobile(event.matches);
    }

    // Add an event listener to the `MediaQueryList` object that listens
    // for changes in the screen size and call `handleScreenSizeChange`
    // function when a change occurs
    mediaQuery.addEventListener('change', handleScreenSizeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleScreenSizeChange);
    };
  }, [query]);

  return isMobile;
}

export default useScreenSize;
