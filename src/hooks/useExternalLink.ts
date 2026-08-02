import { useCallback } from 'react';

export function useExternalLink(url: string) {
  return useCallback(() => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [url]);
}