import { useEffect, useState } from "react";

const useMediaQuery = (width: number): boolean => {
  const [isTargetReached, setIsTargetReached] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);

    const updateTarget = (e: MediaQueryListEvent) => {
      setIsTargetReached(e.matches);
    };

    // 초기 값 설정
    setIsTargetReached(media.matches);
    // 변경 사항 감지
    media.addEventListener("change", updateTarget);

    // 클린업
    return () => {
      media.removeEventListener("change", updateTarget);
    };
  }, [width]);

  return isTargetReached;
};

export default useMediaQuery;
