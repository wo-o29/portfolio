import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import { throttle } from "es-toolkit";

const useWheelControl = (
  ref: RefObject<HTMLDivElement>,
  step: number,
  setStep: Dispatch<SetStateAction<number>>,
) => {
  const handleWheelEvent: EventListener = throttle((e: Event) => {
    const wheelEvent = e as unknown as WheelEvent;

    if (wheelEvent.deltaX > 0 || wheelEvent.deltaX < 0) {
      return;
    }

    if (wheelEvent.deltaY > 0) {
      downWheel();
      return;
    }

    upWheel();
  }, 1200);

  const upWheel = (count?: number) => {
    const repeatCount = count ?? 1;

    setStep((prev) => {
      if (prev === 1 || !ref.current) {
        return prev;
      }

      ref.current.scrollBy({
        top: -window.innerHeight * repeatCount,
        behavior: "smooth",
      });

      return prev - repeatCount;
    });
  };

  const downWheel = (count?: number) => {
    const repeatCount = count ?? 1;

    setStep((prev) => {
      if (prev === 3 || !ref.current) {
        return prev;
      }

      ref.current.scrollBy({
        top: window.innerHeight * repeatCount,
        behavior: "smooth",
      });

      return prev + repeatCount;
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheelEvent);

    return () => {
      window.removeEventListener("wheel", handleWheelEvent);
    };
  }, [ref]);

  return { upWheel, downWheel };
};

export default useWheelControl;
