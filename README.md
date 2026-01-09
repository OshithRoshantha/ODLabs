# OD Labs - Professional Website

A modern, fully responsive website built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS** featuring cutting-edge web technologies and animations.

## 🚀 Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for modern styling
- 📘 **TypeScript** for type safety
- 🎭 **Framer Motion** for smooth animations
- 📱 **Fully Responsive** design
- 🎯 **SEO Optimized**
- ⚙️ **Modern React Hooks**
- 🎨 **Custom Color Scheme** matching OD Labs branding

## 🎨 Color Palette

- **Primary Brand**: `#1A73E8` (OD Labs Blue)
- **Dark**: `#212529` (Charcoal Black)
- **Body Text**: `#4A4A4A` (Dark Gray)
- **Background**: `#FFFFFF` (Pure White)
- **Section Background**: `#F8F9FA` (Very Light Gray)
- **Hover**: `#0056B3` (Deep Blue)

## 📦 Tech Stack

### Frontend
- React 18.3
- Next.js 14.2
- TypeScript 5.3
- Tailwind CSS 3.4
- Framer Motion 11.0
- React Icons 5.0

### Development Tools
- ESLint
- PostCSS
- Autoprefixer

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Website/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page component
│   └── globals.css       # Global styles with Tailwind
├── components/
│   ├── Navbar.tsx        # Navigation component
│   ├── Hero.tsx          # Hero section with animations
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services showcase
│   ├── Technologies.tsx  # Tech stack display
│   ├── Portfolio.tsx     # Projects showcase
│   ├── Contact.tsx       # Contact form
│   ├── Footer.tsx        # Footer component
│   └── ScrollToTop.tsx   # Scroll to top button
├── public/
│   └── logo.png          # Company logo
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 🎯 Sections

1. **Hero** - Eye-catching introduction with animated stats
2. **About** - Company information and values
3. **Services** - Website Development, AI/ML, Cloud Solutions
4. **Technologies** - Comprehensive tech stack showcase
5. **Portfolio** - Featured projects and case studies
6. **Contact** - Contact form and information
7. **Footer** - Links and newsletter subscription

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Modifying Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#1A73E8',
  dark: '#212529',
  // ... add your colors
}
```

### Adding Components
Create new components in the `components/` directory and import them in `app/page.tsx`.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

- Smooth scroll behavior
- Fade-in animations on scroll
- Hover effects on interactive elements
- Counter animations for statistics
- Parallax-like background effects

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

© 2026 OD Labs. All rights reserved.

## 🤝 Support

For support, email info@odlabs.com or contact us through the website.

---

Built with ❤️ by OD Labs
