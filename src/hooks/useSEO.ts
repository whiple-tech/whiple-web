import { useEffect } from 'react';

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export const useSEO = (options: SEOOptions) => {
  useEffect(() => {
    // Update document title
    if (options.title) {
      document.title = options.title;
    }

    // Update meta description
    if (options.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', options.description);
      }
    }

    // Update meta keywords
    if (options.keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', options.keywords);
      }
    }

    // Update Open Graph meta tags
    if (options.title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', options.title);
      }
    }

    if (options.description) {
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', options.description);
      }
    }

    if (options.image) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', options.image);
      }
    }

    if (options.url) {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', options.url);
      }
      
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', options.url);
      }
    }
  }, [options]);
};

export default useSEO;
