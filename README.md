# Frame Portfolio

A minimalist, image-focused portfolio platform designed specifically for professional photographers to showcase their work with maximum visual impact.

![Frame Portfolio](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue) ![Vite](https://img.shields.io/badge/Vite-5.1.0-yellow) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-blue)

## ✨ Overview

Frame Portfolio is a sophisticated web application built with modern technologies that prioritizes photography over everything else. It eliminates distractions and creates an immersive visual experience where your work takes center stage, while maintaining the professional standards needed to attract and retain clients.

## 🚀 Features

### Core Functionality
- **Immersive Hero Section** - Full-viewport hero with striking featured photographs
- **Masonry Portfolio Grid** - Responsive grid that showcases images in various aspect ratios naturally
- **Category Filtering** - Filter by photography type (Portraits, Landscapes, Editorial, etc.)
- **Lightbox Gallery** - Full-screen image viewing with smooth transitions
- **Project Details** - Individual project pages with image galleries and descriptions
- **Contact Form** - Professional contact form with validation
- **Responsive Design** - Perfect experience across all devices

### Technical Features
- **Dark/Light Theme** - System-aware theme switching with smooth transitions
- **Performance Optimized** - Fast loading with lazy loading and optimized images
- **SEO Friendly** - Meta tags and structured data for better search visibility
- **Accessibility** - WCAG compliant with keyboard navigation and screen reader support
- **Progressive Web App** - Installable with offline capabilities

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with shadcn/ui components
- **Animations:** Framer Motion
- **State Management:** React Query for server state
- **Backend:** Supabase for database and authentication
- **Routing:** React Router DOM
- **Form Handling:** React Hook Form with Zod validation
- **Icons:** Lucide React
- **Deployment:** Ready for Vercel, Netlify, or any static hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/frame-portfolio.git
   cd frame-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Environment Setup**
   Create a `.env.local` file with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   # or
   bun run build
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Layout components (Header, Footer, etc.)
│   ├── portfolio/       # Portfolio-specific components
│   ├── forms/           # Form components
│   └── providers/       # Context providers
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── data/                # Mock data and constants
├── types/               # TypeScript type definitions
└── assets/              # Static assets
```

## 🎨 Customization

### Personalizing Your Portfolio

1. **Update Photographer Information**
   - Edit `src/data/photographer.ts` with your details
   - Update social media links in the footer

2. **Add Your Projects**
   - Modify `src/data/projects.ts` with your photography projects
   - Replace placeholder images in `public/` directory

3. **Customize Styling**
   - Adjust theme colors in `tailwind.config.js`
   - Modify component styles as needed

4. **Configure Contact Form**
   - Set up Supabase database for contact form submissions
   - Update form validation rules in `src/components/forms/ContactForm.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add environment variables in Netlify dashboard

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider

## 🤝 Contributing

This project is designed to be easily customizable for individual photographers. While it's not open for external contributions, feel free to fork and adapt it for your needs.

## 📄 License

This project is private and intended for personal use by photographers.

## 📞 Support

For questions or customization help, please check the documentation or reach out through the contact form in the application.

---

**Built with ❤️ for photographers who deserve portfolios as beautiful as their work.**