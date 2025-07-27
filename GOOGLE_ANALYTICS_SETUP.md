# Google Analytics Setup Guide

## Overview

This portfolio website includes Google Analytics 4 (GA4) integration with automatic page tracking, custom events, and development debugging.

## Current Implementation

### Files Modified
- `src/components/GoogleAnalytics.tsx` - Main GA component
- `src/lib/analytics.ts` - Analytics utility functions
- `src/app/layout.tsx` - Layout with GA integration
- `src/components/analytics-test.tsx` - Development testing component

### Features
- ✅ Automatic page view tracking
- ✅ Custom event tracking
- ✅ Outbound link tracking
- ✅ Download tracking
- ✅ Development mode debugging
- ✅ Error handling and fallbacks
- ✅ Environment variable configuration

## Setup Instructions

### 1. Get Your GA4 Tracking ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use existing one
3. Go to **Admin** → **Data Streams** → **Web**
4. Copy your **Measurement ID** (format: G-XXXXXXXXXX)

### 2. Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Site URL
NEXT_PUBLIC_SITE_URL=https://mihirdharaiya.com
```

### 3. Verify Installation

#### Development Mode
1. Start the development server: `npm run dev`
2. Open browser developer tools (F12)
3. Check console for these messages:
   ```
   Google Analytics Tracking ID: G-XXXXXXXXXX
   Google Analytics script loaded successfully
   Google Analytics initialized with ID: G-XXXXXXXXXX
   ```
4. Use the test panel (bottom-right corner) to test events
5. Check Google Analytics Real-Time reports

#### Production Mode
1. Build the project: `npm run build`
2. Deploy to your hosting platform
3. Set environment variables in your hosting platform
4. Check Google Analytics Real-Time reports

## Troubleshooting

### Common Issues

#### 1. "Google Analytics Tracking ID not found"
**Cause**: Missing environment variable
**Solution**: 
- Create `.env.local` file
- Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- Restart development server

#### 2. "Failed to load Google Analytics script"
**Cause**: Network issues or blocked scripts
**Solution**:
- Check internet connection
- Disable ad blockers
- Check browser console for CORS errors

#### 3. No data in Google Analytics
**Cause**: Various possible issues
**Solution**:
- Verify tracking ID is correct
- Check if GA script loads (Network tab)
- Ensure no ad blockers are active
- Wait 24-48 hours for data to appear

#### 4. Events not tracking
**Cause**: Incorrect implementation
**Solution**:
- Use the test component in development
- Check console for errors
- Verify `gtag` function exists in window object

### Debug Steps

1. **Check Environment Variables**
   ```bash
   # In browser console
   console.log(process.env.NEXT_PUBLIC_GA_ID)
   ```

2. **Verify Script Loading**
   - Open Network tab in dev tools
   - Look for `gtag/js` request
   - Should return 200 status

3. **Test gtag Function**
   ```javascript
   // In browser console
   console.log(typeof window.gtag)
   // Should return "function"
   ```

4. **Check Data Layer**
   ```javascript
   // In browser console
   console.log(window.dataLayer)
   // Should show array with events
   ```

5. **Test Manual Event**
   ```javascript
   // In browser console
   gtag('event', 'test', {
     event_category: 'debug',
     event_label: 'manual_test'
   })
   ```

## Custom Event Tracking

### Available Functions

```typescript
import { event, trackOutboundLink, trackDownload } from '@/lib/analytics'

// Track custom events
event({
  action: 'button_click',
  category: 'engagement',
  label: 'resume_download'
})

// Track outbound links
trackOutboundLink('https://github.com/username')

// Track downloads
trackDownload('resume.pdf')
```

### Adding Custom Events

1. **Import the function**:
   ```typescript
   import { event } from '@/lib/analytics'
   ```

2. **Add to your component**:
   ```typescript
   const handleClick = () => {
     event({
       action: 'button_click',
       category: 'engagement',
       label: 'contact_form'
     })
     // Your existing logic
   }
   ```

## Production Deployment

### Vercel
1. Go to Vercel dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add `NEXT_PUBLIC_GA_ID` with your tracking ID
5. Redeploy

### Netlify
1. Go to Netlify dashboard
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Add `NEXT_PUBLIC_GA_ID` with your tracking ID
5. Redeploy

### Other Platforms
- Add `NEXT_PUBLIC_GA_ID` environment variable
- Ensure the variable is available at build time
- Redeploy after adding the variable

## Privacy and Compliance

### GDPR Compliance
- Consider adding cookie consent banner
- Implement opt-out functionality
- Update privacy policy

### Cookie Settings
- GA4 uses cookies for tracking
- Consider implementing cookie preferences
- Add cookie policy to your site

## Performance Impact

- GA script loads asynchronously
- Minimal impact on page load time
- Script size: ~45KB (gzipped)
- Loads after page becomes interactive

## Support

If you're still having issues:

1. Check the [Google Analytics Help Center](https://support.google.com/analytics/)
2. Verify your GA4 property settings
3. Test with Google Analytics Debugger extension
4. Check browser compatibility

## Useful Links

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Analytics Integration](https://nextjs.org/docs/advanced-features/measuring-performance)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/events) 