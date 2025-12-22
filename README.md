# Sirius Sports - B2B Garment Manufacturing Website

A modern, premium B2B website for Sirius Sports, a garment manufacturing company based in Sialkot, Pakistan. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🌓 **Dark/Light Theme** - Dual theme support with system detection
- 🎨 **Modern Design** - Premium, clean interface with gradient elements
- ✨ **Framer Motion Animations** - Smooth animations throughout the site
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 💬 **WhatsApp Integration** - Floating WhatsApp button for quick contact
- 🗺️ **Google Maps** - Integrated map showing Sialkot location
- 📧 **Contact Form** - Professional B2B inquiry form

## Sections

1. **Hero Section** - Eye-catching banner with call-to-action buttons
2. **Categories** - Product categories showcase
3. **About Us** - Company information with animated statistics
4. **Our Process** - Step-by-step manufacturing workflow
5. **Why Choose Us** - Key differentiators and features
6. **Testimonials** - Client testimonials carousel
7. **Contact** - Inquiry form with map and contact information
8. **Footer** - Company links and social media

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── Categories.tsx   # Product categories
│   ├── About.tsx        # About section
│   ├── Process.tsx      # Manufacturing process
│   ├── WhyChooseUs.tsx  # Features section
│   ├── Testimonials.tsx # Testimonials carousel
│   ├── Contact.tsx      # Contact form
│   ├── Footer.tsx       # Footer component
│   ├── WhatsAppButton.tsx # Floating WhatsApp button
│   └── ThemeProvider.tsx  # Theme context provider
└── qssets/              # Image assets
```

## Assets

All images are located in the `/qssets` folder:
- Banner images for hero section
- Product category images
- Company visuals

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
- Primary colors: Navy and Blue gradients
- Dark mode colors: Gray scale

### Content

Update content in respective component files:
- Company information in `components/About.tsx`
- Categories in `components/Categories.tsx`
- Contact details in `components/Contact.tsx`

### Social Media Links

Update social media links in:
- `components/Contact.tsx`
- `components/Footer.tsx`
- `components/WhatsAppButton.tsx`

## Contact Information

- **WhatsApp**: +92 317 7245991
- **Instagram**: [@sirius_sports_](https://www.instagram.com/sirius_sports_)
- **Facebook**: [Sirius Sports](https://www.facebook.com/share/1akxgLPHfR/)
- **Location**: Sialkot, Pakistan

## License

© 2024 Sirius Sports. All rights reserved.

