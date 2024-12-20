import { useEffect, RefObject } from 'react';

export function useAutoScroll(
  ref: RefObject<HTMLElement>,
  dependency: any[]
) {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dependency]);
}