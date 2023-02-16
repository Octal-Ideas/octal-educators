import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component scrolls the page to the top when the location changes
function ScrollToTop() {
  const { pathname } = useLocation(); // Get the current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll the page to the top
  }, [pathname]); // Only trigger this effect when the location changes

  return null; // This component doesn't render anything
}

export default ScrollToTop;
