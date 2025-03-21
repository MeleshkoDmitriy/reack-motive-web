import { RefObject, useEffect, useRef, useCallback } from "react";

export const useClickOutside = (
  elementRef: RefObject<HTMLElement | null>,
  callback: () => void
) => {
  const callbackRef = useRef<() => void>(null);

  callbackRef.current = callback;

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      elementRef.current &&
      !elementRef.current.contains(e.target as Node) &&
      callbackRef.current
    ) {
      callbackRef.current();
    }
  }, [elementRef]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);
};
