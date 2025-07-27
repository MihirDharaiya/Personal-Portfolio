'use client';

import { useEffect } from 'react';
import { event, pageview } from '@/lib/analytics';

export default function TestGAPage() {
  useEffect(() => {
    // Track this page view
    pageview('/test-ga');
    
    // Send a test event
    event({
      action: 'test_page_visit',
      category: 'testing',
      label: 'ga_test_page'
    });
    
    console.log('Test page loaded - checking Google Analytics...');
    console.log('Tracking ID:', process.env.NEXT_PUBLIC_GA_ID);
    console.log('gtag function exists:', typeof window !== 'undefined' && typeof window.gtag === 'function');
    
    if (typeof window !== 'undefined' && window.gtag) {
      // Manual test event
      window.gtag('event', 'manual_test', {
        event_category: 'debug',
        event_label: 'test_page_manual'
      });
      console.log('Manual test event sent');
    }
  }, []);

  const handleTestClick = () => {
    event({
      action: 'test_button_click',
      category: 'testing',
      label: 'test_page_button'
    });
    console.log('Test button clicked - event sent to GA');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Google Analytics Test Page</h1>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open browser developer tools (F12)</li>
            <li>Check the console for debug messages</li>
            <li>Go to Google Analytics Real-Time reports</li>
            <li>Look for this page in the &ldquo;Top pages&rdquo; section</li>
            <li>Click the test button below and check for events</li>
          </ol>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">What to Check</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Console should show &ldquo;Test page loaded&rdquo;</li>
            <li>Console should show your tracking ID</li>
            <li>Console should show &ldquo;gtag function exists: true&rdquo;</li>
            <li>GA Real-Time should show this page visit</li>
            <li>GA Real-Time should show test events</li>
          </ul>
        </div>

        <button
          onClick={handleTestClick}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Test Button Click
        </button>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Troubleshooting</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>If no console messages: Check if .env.local exists</li>
            <li>If gtag function doesn&apos;t exist: Check ad blockers</li>
            <li>If no Real-Time data: Verify tracking ID is correct</li>
            <li>If still no data: Check GA property settings</li>
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