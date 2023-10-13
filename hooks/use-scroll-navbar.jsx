import { useState, useEffect } from "react";

export const useScrollTop = (treshold = 10) => {
  const [scroled, setScroled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > treshold) {
      setScroled(true);
    } else {
      setScroled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [treshold]);

  return scroled;
};
