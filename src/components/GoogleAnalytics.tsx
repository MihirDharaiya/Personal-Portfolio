// app/components/GoogleAnalytics.jsx
'use client';

import Script from 'next/script'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { GA_TRACKING_ID, pageview } from '@/lib/analytics'

const GoogleAnalytics = () => {
  const pathname = usePathname()

  useEffect(() => {
    // Debug logging
    if (process.env.NODE_ENV === 'development') {
      console.log('Google Analytics Tracking ID:', GA_TRACKING_ID)
    }
  }, [])

  // Track page views when route changes
  useEffect(() => {
    if (pathname) {
      pageview(pathname)
    }
  }, [pathname])

  // Don't render if no tracking ID is provided
  if (!GA_TRACKING_ID) {
    console.warn('Google Analytics Tracking ID not found')
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        onLoad={() => {
          if (process.env.NODE_ENV === 'development') {
            console.log('Google Analytics script loaded successfully')
          }
        }}
        onError={() => {
          console.error('Failed to load Google Analytics script')
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
            });
            
            // Debug logging in development
            if (process.env.NODE_ENV === 'development') {
              console.log('Google Analytics initialized with ID:', '${GA_TRACKING_ID}');
            }
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics