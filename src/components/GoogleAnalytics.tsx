// app/components/GoogleAnalytics.jsx
'use client';

import Script from 'next/script'

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-JMQD33VTYP"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JMQD33VTYP');
          `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics