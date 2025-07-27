<div align="center">
</div>

# Welcome to My Portfolio

Website Link: [https://mihirdharaiya.com/](https://mihirdharaiya.com/)

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dark/Light Mode**: Theme switching with next-themes
- **Analytics**: Google Analytics and Vercel Analytics integration
- **Blog Support**: MDX-based blog system
- **SEO Optimized**: Meta tags, Open Graph, and structured data

## 📸 Screenshots

<img width="687" alt="Screenshot 2024-12-28 at 12 07 04 PM" src="https://github.com/user-attachments/assets/7536eca6-86e5-4e98-96a0-76e198117c2c" />
<img width="687" alt="Screenshot 2024-12-28 at 12 07 40 PM" src="https://github.com/user-attachments/assets/a37ed6cc-97c2-41f4-a0b9-72c8aa0c473c" />
<img width="687" alt="Screenshot 2024-12-28 at 12 09 09 PM" src="https://github.com/user-attachments/assets/8acca778-c11c-4fd5-970e-f49f2d4b50dd" />
<img width="687" alt="Screenshot 2024-12-28 at 12 09 40 PM" src="https://github.com/user-attachments/assets/b3ece6b5b-a3b8-438d-92bc-382411fa9335" />
<img width="687" alt="Screenshot 2024-12-28 at 12 09 58 PM" src="https://github.com/user-attachments/assets/d972175b-b318-469a-af3b-ec33aea4471a" />
<img width="687" alt="Screenshot 2024-12-28 at 12 10 21 PM" src="https://github.com/user-attachments/assets/7fc5d29e-1732-4312-a9b3-a74061597edd" />

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```bash
   # Google Analytics
   NEXT_PUBLIC_GA_ID=G-JMQD33VTYP
   
   # Optional: Site URL
   # NEXT_PUBLIC_SITE_URL=https://mihirdharaiya.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Google Analytics Setup

### Current Implementation
The portfolio includes Google Analytics 4 (GA4) integration with the following features:

- **Automatic Page Tracking**: Tracks all page views automatically
- **Event Tracking**: Custom events for downloads, outbound links, and user interactions
- **Development Mode**: Debug logging in development environment
- **Error Handling**: Graceful fallback if GA fails to load

### Configuration Steps

1. **Get your GA4 Tracking ID**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use existing one
   - Copy your Measurement ID (format: G-XXXXXXXXXX)

2. **Set Environment Variable**
   ```bash
   # In .env.local
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Verify Installation**
   - Open browser developer tools
   - Check console for "Google Analytics initialized" message
   - Visit Google Analytics Real-Time reports to see live data

### Custom Event Tracking

The portfolio includes utility functions for tracking custom events:

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

## 🎨 Customization

### Personal Information
Update your information in `src/data/resume.tsx`:
- Name, description, avatar
- Work experience, education
- Skills, projects, certifications
- Contact information and social links

### Styling
- **Colors**: Modify `tailwind.config.ts` for custom color schemes
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Components**: Customize UI components in `src/components/ui/`

### Content
- **Projects**: Add/remove projects in the data file
- **Blog Posts**: Add MDX files to `content/` directory
- **Images**: Place images in `public/` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: mdharaiya800@gmail.com
- **LinkedIn**: [Mihir Dharaiya](https://www.linkedin.com/in/mihir-dharaiya/)
- **GitHub**: [@MihirDharaiya](https://github.com/MihirDharaiya)
- **Twitter**: [@DharaiyaMihir](https://x.com/DharaiyaMihir)
