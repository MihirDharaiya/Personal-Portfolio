'use client';

import { useEffect, useState } from 'react';

export default function GAVerifyPage() {
  const [gaStatus, setGaStatus] = useState<string>('Checking...');
  const [trackingId, setTrackingId] = useState<string>('');

  useEffect(() => {
    // Check if environment variable is loaded
    const id = process.env.NEXT_PUBLIC_GA_ID;
    setTrackingId(id || 'Not found');

    // Check if gtag function exists
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        setGaStatus('✅ Google Analytics is loaded and ready');
        
        // Send a test event
        window.gtag('event', 'page_view', {
          page_title: 'GA Verification Page',
          page_location: window.location.href
        });
        
        console.log('✅ GA Verification: Page view event sent');
      } else {
        setGaStatus('❌ Google Analytics not loaded');
      }
    }
  }, []);

  const sendTestEvent = () => {
    if (window.gtag) {
      window.gtag('event', 'test_event', {
        event_category: 'verification',
        event_label: 'manual_test'
      });
      console.log('✅ Test event sent to GA');
      alert('Test event sent! Check GA Real-Time reports.');
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Google Analytics Verification</h1>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Status Check</h2>
          <div className="space-y-2">
            <p><strong>Tracking ID:</strong> {trackingId}</p>
            <p><strong>Status:</strong> {gaStatus}</p>
            <p><strong>Current URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'Loading...'}</p>
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Next Steps</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Check the console for debug messages</li>
            <li>Go to GA4 Real-Time reports</li>
            <li>Click the test button below</li>
            <li>Look for events in Real-Time</li>
          </ol>
        </div>

        <button
          onClick={sendTestEvent}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Send Test Event
        </button>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">If Still Not Working</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Check GA4 property settings</li>
            <li>Verify data stream configuration</li>
            <li>Ensure enhanced measurement is enabled</li>
            <li>Check for ad blockers or privacy extensions</li>
            <li>Wait 24-48 hours for initial data collection</li>
          </ul>
        </div>

        <a 
          href="/"
          className="inline-block bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
} 