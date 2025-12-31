import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.selectedPackage) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // use "smooth" if you prefer smooth scroll
    });
  }, [location.pathname, location.state]);
};

export default useScrollToTop;
