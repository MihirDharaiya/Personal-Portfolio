'use client';

import { useEffect, useState } from 'react';

export default function DebugGAPage() {
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    const info: any = {
      trackingId: process.env.NEXT_PUBLIC_GA_ID,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Server',
      url: typeof window !== 'undefined' ? window.location.href : 'Server',
      gtagExists: typeof window !== 'undefined' && typeof window.gtag === 'function',
      dataLayerExists: typeof window !== 'undefined' && Array.isArray((window as any).dataLayer),
      timestamp: new Date().toISOString()
    };

    // Check if GA script is loaded
    if (typeof window !== 'undefined') {
      const scripts = Array.from(document.scripts);
      const gaScript = scripts.find(script => 
        script.src && script.src.includes('googletagmanager.com/gtag/js')
      );
      info.gaScriptLoaded = !!gaScript;
      info.gaScriptSrc = gaScript?.src || 'Not found';
    }

    setDebugInfo(info);

    // Send a test event if gtag exists
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'debug_page_visit', {
        event_category: 'debug',
        event_label: 'debug_page',
        custom_parameter: 'debug_test'
      });
      console.log('🔍 Debug event sent to GA');
    }
  }, []);

  const sendTestEvent = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'debug_button_click', {
        event_category: 'debug',
        event_label: 'debug_button',
        value: 1
      });
      console.log('🔍 Debug button event sent');
      alert('Debug event sent! Check GA Real-Time reports.');
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Google Analytics Debug Info</h1>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Configuration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Tracking ID:</strong> {debugInfo.trackingId || 'Not found'}</p>
              <p><strong>Current URL:</strong> {debugInfo.url}</p>
              <p><strong>Timestamp:</strong> {debugInfo.timestamp}</p>
            </div>
            <div>
              <p><strong>gtag Function:</strong> {debugInfo.gtagExists ? '✅ Exists' : '❌ Missing'}</p>
              <p><strong>Data Layer:</strong> {debugInfo.dataLayerExists ? '✅ Exists' : '❌ Missing'}</p>
              <p><strong>GA Script:</strong> {debugInfo.gaScriptLoaded ? '✅ Loaded' : '❌ Not loaded'}</p>
            </div>
          </div>
        </div>

        {debugInfo.gaScriptSrc && (
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">GA Script Details</h2>
            <p><strong>Script URL:</strong></p>
            <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm break-all">
              {debugInfo.gaScriptSrc}
            </code>
          </div>
        )}

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">User Agent</h2>
          <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm break-all">
            {debugInfo.userAgent}
          </code>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Testing</h2>
          <div className="space-y-4">
            <button
              onClick={sendTestEvent}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Send Test Event
            </button>
            
            <div className="space-y-2">
              <p><strong>Instructions:</strong></p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Click the test button above</li>
                <li>Go to GA4 Real-Time reports</li>
                <li>Look for &ldquo;debug_button_click&rdquo; event</li>
                <li>Check if your domain matches the data stream</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Troubleshooting</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>If gtag function is missing:</strong> Check for ad blockers or privacy extensions</li>
            <li><strong>If GA script is not loaded:</strong> Check network tab for failed requests</li>
            <li><strong>If tracking ID is not found:</strong> Check .env.local file</li>
            <li><strong>If testing on localhost:</strong> GA4 may not track localhost properly</li>
            <li><strong>If no Real-Time data:</strong> Deploy to your live domain and test there</li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <a 
            href="/"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Back to Home
          </a>
          <a 
            href="/ga-verify"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            GA Verification
          </a>
        </div>
      </div>
    </div>
  );
} 