# WHIPLE.tech

A modern, interactive landing page for WHIPLE.tech - a technology consulting company specializing in cutting-edge solutions and digital innovation.

## 🚀 Features

- **Interactive Particle Animation**: Beautiful animated background with connected particles
- **Responsive Design**: Optimized for all device sizes
- **Animated Typewriter Effect**: Dynamic logo animation with typing effect
- **Modern UI/UX**: Clean, professional design with smooth animations
- **SEO Optimized**: Full meta tags and SEO configuration
- **Performance Focused**: Built with Vite for fast development and optimized builds

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Helmet Async** - SEO and meta tag management
- **ESLint** - Code quality and consistency

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/whiple-tech/whiple-web.git
cd whiple-web
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔧 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🐳 Docker Support

The project includes Docker configuration for containerized deployment:

```bash
# Build the Docker image
docker build -t whiple-web .

# Run with Docker Compose
docker-compose up
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   └── SEO.tsx         # SEO component for meta tags
├── hooks/              # Custom React hooks
│   └── useSEO.ts       # SEO hook
├── assets/             # Static assets
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Key Components

- **Particle System**: Interactive animated background with connected particles
- **Typewriter Animation**: Animated logo text with cursor effect
- **Email Contact**: Click-to-copy email functionality
- **Responsive Layout**: Mobile-first responsive design

## 🌐 Deployment

The application is configured for easy deployment with:

- Static site hosting (Vercel, Netlify, etc.)
- Docker containers
- Caddy web server configuration included

## 📞 Contact

For business inquiries: k.greschnow@gmail.com

## 📄 License

This project is proprietary to WHIPLE.tech.

---

Built with ❤️ by the WHIPLE.tech team
