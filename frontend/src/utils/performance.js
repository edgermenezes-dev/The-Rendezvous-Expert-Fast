// Performance monitoring utilities

export const measurePerformance = () => {
  if (typeof window === 'undefined' || !window.performance) return null;

  const perfData = window.performance.getEntriesByType('navigation')[0];
  if (!perfData) return null;

  return {
    dns: perfData.domainLookupEnd - perfData.domainLookupStart,
    tcp: perfData.connectEnd - perfData.connectStart,
    ttfb: perfData.responseStart - perfData.requestStart,
    download: perfData.responseEnd - perfData.responseStart,
    domInteractive: perfData.domInteractive - perfData.fetchStart,
    domComplete: perfData.domComplete - perfData.fetchStart,
    loadComplete: perfData.loadEventEnd - perfData.fetchStart,
  };
};

export const logPerformance = () => {
  if (typeof window !== 'undefined' && window.performance) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const metrics = measurePerformance();
        if (metrics) {
          console.log('Performance Metrics:', metrics);
          
          // Send to analytics if needed
          if (process.env.NODE_ENV === 'production') {
            // Example: sendToAnalytics(metrics);
          }
        }
      }, 0);
    });
  }
};

// Web Vitals monitoring
export const reportWebVitals = (metric) => {
  console.log(metric);
  // Send to analytics endpoint
  if (process.env.NODE_ENV === 'production') {
    // Example: sendToAnalytics(metric);
  }
};

// Cache utilities
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const cacheManager = {
  set: (key, data) => {
    const item = {
      data,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(`cache_${key}`, JSON.stringify(item));
    } catch (e) {
      console.warn('Cache set failed:', e);
    }
  },
  
  get: (key) => {
    try {
      const item = localStorage.getItem(`cache_${key}`);
      if (!item) return null;
      
      const parsed = JSON.parse(item);
      const age = Date.now() - parsed.timestamp;
      
      if (age > CACHE_DURATION) {
        localStorage.removeItem(`cache_${key}`);
        return null;
      }
      
      return parsed.data;
    } catch (e) {
      console.warn('Cache get failed:', e);
      return null;
    }
  },
  
  clear: () => {
    try {
      Object.keys(localStorage)
        .filter(key => key.startsWith('cache_'))
        .forEach(key => localStorage.removeItem(key));
    } catch (e) {
      console.warn('Cache clear failed:', e);
    }
  }
};
