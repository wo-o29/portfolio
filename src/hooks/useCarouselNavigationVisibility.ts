import { RefObject, useEffect, useState } from "react";

const useCarouselNavigationVisibility = (ref: RefObject<HTMLUListElement>) => {
  const [navigationVisible, setNavigationVisible] = useState({
    prev: false,
    next: true,
  });

  useEffect(() => {
    const checkCarouselNavigationVisibility = () => {
      if (!ref.current) {
        return;
      }

      const maxScrollLeft = ref.current.scrollWidth - ref.current.clientWidth;
      const isStart = ref.current.scrollLeft === 0;
      const isEnd = ref.current.scrollLeft >= maxScrollLeft - 10;

      if (isStart) {
        setNavigationVisible({
          prev: false,
          next: true,
        });
        return;
      }

      if (isEnd) {
        setNavigationVisible({
          prev: true,
          next: false,
        });
        return;
      }

      setNavigationVisible({
        prev: true,
        next: true,
      });
    };

    if (ref.current) {
      ref.current.addEventListener("scroll", checkCarouselNavigationVisibility);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener(
          "scroll",
          checkCarouselNavigationVisibility,
        );
      }
    };
  }, [ref]);

  return navigationVisible;
};

export default useCarouselNavigationVisibility;
