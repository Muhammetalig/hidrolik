"use client";

import { useEffect, useState } from 'react';

export default function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      const timeoutId = window.setTimeout(finishLoading, 300);
      return () => window.clearTimeout(timeoutId);
    }

    window.addEventListener('load', finishLoading);
    return () => window.removeEventListener('load', finishLoading);
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="site-loader" role="status" aria-live="polite">
      <div className="site-loader-card">
        <span className="site-loader-spinner" aria-hidden="true" />
        <span>Yükleniyor</span>
      </div>
    </div>
  );
}
