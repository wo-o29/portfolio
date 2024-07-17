import { throttle } from "es-toolkit";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef } from "react";

const useTouchControl = (
  ref: RefObject<HTMLDivElement>,
  step: number,
  setStep: Dispatch<SetStateAction<number>>,
) => {
  const startRef = useRef<number>(0);
  const diffRef = useRef<number>(0);

  const handleTouchStart = (e: TouchEvent) => {
    const startY = e.touches[0].clientY;
    startRef.current = startY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    const currentY = e.touches[0].clientY;
    const deltaY = startRef.current - currentY;
    diffRef.current = deltaY;
  };

  const handleTouchEnd = throttle(() => {
    if (diffRef.current > 50) {
      scrollDown();
    } else if (diffRef.current < -50) {
      scrollUp();
    }

    startRef.current = 0;
    diffRef.current = 0;
  }, 500);

  const scrollUp = () => {
    setStep((prev) => {
      if (prev === 1 || !ref.current) {
        return prev;
      }

      ref.current.scrollBy({
        top: -window.innerHeight,
        behavior: "smooth",
      });

      return prev - 1;
    });
  };

  const scrollDown = () => {
    setStep((prev) => {
      if (prev === 3 || !ref.current) {
        return prev;
      }

      ref.current.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });

      return prev + 1;
    });
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.addEventListener("touchstart", handleTouchStart);
    ref.current.addEventListener("touchmove", handleTouchMove);
    ref.current.addEventListener("touchend", handleTouchEnd);

    return () => {
      ref.current?.removeEventListener("touchstart", handleTouchStart);
      ref.current?.removeEventListener("touchmove", handleTouchMove);
      ref.current?.removeEventListener("touchend", handleTouchEnd);
    };
  }, [ref]);
};

export default useTouchControl;
