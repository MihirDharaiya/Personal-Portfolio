'use client';

import { event, trackOutboundLink, trackDownload } from '@/lib/analytics'
import { Button } from '@/components/ui/button'

const AnalyticsTest = () => {
  const handleTestEvent = () => {
    event({
      action: 'test_button_click',
      category: 'testing',
      label: 'analytics_test'
    })
    console.log('Test event sent to Google Analytics')
  }

  const handleTestOutbound = () => {
    trackOutboundLink('https://google.com')
    console.log('Outbound link event sent to Google Analytics')
  }

  const handleTestDownload = () => {
    trackDownload('test-file.pdf')
    console.log('Download event sent to Google Analytics')
  }

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-sm font-bold mb-2">Analytics Test</h3>
      <div className="space-y-2">
        <Button 
          size="sm" 
          onClick={handleTestEvent}
          className="w-full"
        >
          Test Event
        </Button>
        <Button 
          size="sm" 
          onClick={handleTestOutbound}
          className="w-full"
        >
          Test Outbound
        </Button>
        <Button 
          size="sm" 
          onClick={handleTestDownload}
          className="w-full"
        >
          Test Download
        </Button>
      </div>
    </div>
  )
}

export default AnalyticsTest 