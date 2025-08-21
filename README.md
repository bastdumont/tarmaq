# tarmaq — Youth Opportunity Accelerator

A comprehensive platform for youth innovation, entrepreneurship, and AI education in Geneva. Built with modern web technologies and designed for both mobile and desktop experiences.

## 🎯 Project Overview

**tarmaq** is an initiative by *Perspectives Jeunesse* that provides young people with:
- **AI Bootcamps** and intensive training programs
- **Hackathons** for local innovation challenges
- **Internships** and real-world project experiences
- **Mentorship** from industry professionals
- **Educational Travel** to innovative ecosystems
- **Community Building** and networking opportunities

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** (20+ recommended)
- **npm** or **yarn**

### Installation & Development
```bash
# 1) Install dependencies
npm install

# 2) Start development server (hot reload)
npm run dev

# 3) Build for production
npm run build

# 4) Preview production build
npm run preview

# 5) Run tests
npm test
```

The development server will automatically open your browser at `http://localhost:5173`.

## 📱 Multi-Platform Experience

### Mobile Version (`index.html`)
- **Mobile-first design** with device frame simulation
- **Touch-optimized** interactions and navigation
- **Responsive layout** for all mobile devices
- **Progressive Web App** ready

### Desktop Version (`tarmaq-desktop.html`)
- **Wide-screen layouts** (1400px+ max-width)
- **Enhanced navigation** with dropdown menus
- **Multi-column grids** for better content organization
- **Advanced hover effects** and desktop interactions
- **Sticky header** with backdrop blur effects

## 🎨 Design System

### Brand Colors
```css
--brand: #DA2F2C          /* Primary red */
--brand-600: #C52824      /* Hover/darken */
--ink: #161616            /* Body text */
--ink-2: #2A2A2A          /* Titles */
--bg: #FCFCFD             /* Page background */
--card: #FFFFFF           /* Card surfaces */
--stroke: #E8E8EC         /* Borders */
--muted: #6F6F78          /* Secondary text */
```

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800
- **Responsive scaling** from mobile to desktop

### Components
- **Cards** with hover animations and shadows
- **Buttons** with gradient and solid variants
- **Navigation** with smooth transitions
- **Forms** with focus states and validation

## 📁 Project Structure

```
tarmaq/
├── 📱 index.html                    # Mobile-optimized landing page
├── 🖥️ tarmaq-desktop.html          # Desktop-optimized version
├── 📚 tarmaq_version_html_fondateur.html  # Project details page
├── 🧠 memory-bank/                 # Project documentation system
│   ├── Project Brief.md            # Core requirements & goals
│   ├── Product Context.md          # Problem statement & UX objectives
│   ├── Active Context.md           # Current UI state & features
│   ├── System Patterns.md          # Architecture & styling patterns
│   ├── Tech Context.md             # Dependencies & build tools
│   └── Progress.md                 # Completed work & tasks
├── 🎓 tarmaq-adémie/              # Educational content pages
│   ├── 5 AI tools for marketing.html
│   ├── Analyse Vidéo - Claude Code + Playwright MCP.html
│   ├── Guide Complet - 10 Nœuds Communautaires n8n Révolutionnaires.html
│   └── Guide-WordPress-IA.html
├── ⚛️ src/                        # React application source
│   ├── App.jsx                    # Main React component
│   ├── main.jsx                   # React entry point
│   ├── App.test.jsx              # Component tests
│   ├── setupTests.js             # Test configuration
│   └── assets/                   # Images and media
├── ⚙️ vite.config.js              # Build tool configuration
├── 📦 package.json                # Dependencies & scripts
└── 🚫 .gitignore                  # Git ignore rules
```

## 🧪 Testing

### Test Coverage
- **Component rendering** and user interactions
- **Mobile menu** functionality (open/close/escape)
- **Responsive design** breakpoints
- **Accessibility** features and ARIA labels

### Running Tests
```bash
# Interactive mode (watch)
npm run test:watch

# Single run (CI/CD)
npm test

# Coverage report
npm run test:coverage
```

## 🚀 Features

### Core Functionality
- **Hot Module Replacement** (HMR) for development
- **Responsive design** across all devices
- **Progressive enhancement** for modern browsers
- **Accessibility** compliance (WCAG guidelines)
- **SEO optimization** with meta tags and structured data

### User Experience
- **Smooth animations** and micro-interactions
- **Intuitive navigation** with breadcrumbs
- **Fast loading** with optimized assets
- **Cross-browser compatibility**
- **Mobile-first approach**

### Development Experience
- **TypeScript support** (configurable)
- **ESLint** and **Prettier** integration
- **Git hooks** for code quality
- **Hot reload** on file changes
- **Build optimization** for production

## 🌐 Deployment

### Build Process
```bash
# Development build
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Deployment Options
- **Vercel**: Import project → Framework: Vite → Build: `npm run build` → Output: `dist/`
- **Netlify**: Connect Git → Build: `npm run build` → Publish: `dist/`
- **GitHub Pages**: Actions workflow with Vite build
- **Traditional hosting**: Upload `dist/` folder contents

## 🔧 Configuration

### Vite Configuration
- **Hot reload** enabled
- **Browser auto-open** on dev start
- **File watching** with polling
- **Build optimization** for production
- **Testing environment** with jsdom

### Environment Variables
```bash
# Development
VITE_API_URL=http://localhost:3000
VITE_APP_ENV=development

# Production
VITE_API_URL=https://api.tarmaq.ch
VITE_APP_ENV=production
```

## 📚 Documentation

### Memory Bank System
The project includes a comprehensive documentation system in the `memory-bank/` folder:

- **Project Brief**: Core requirements, goals, and scope
- **Product Context**: Problem statement, value proposition, UX objectives
- **Active Context**: Current UI state, feature drafts, open PRs
- **System Patterns**: Naming conventions, styling & architecture patterns
- **Tech Context**: Dependencies, build tools, environment constraints
- **Progress**: Completed work, remaining tasks, blockers

### API Documentation
- **RESTful endpoints** for program management
- **Authentication** with JWT tokens
- **Rate limiting** and security measures
- **Error handling** and status codes

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards
- **ESLint** configuration for code quality
- **Prettier** for consistent formatting
- **Conventional commits** for commit messages
- **TypeScript** for type safety (optional)

## 🐛 Troubleshooting

### Common Issues
- **Build errors**: Check Node.js version (18+ required)
- **Hot reload not working**: Verify `vite.config.js` HMR settings
- **Mobile menu issues**: Check z-index values and backdrop positioning
- **Performance**: Use production build for testing

### Debug Mode
```bash
# Enable debug logging
DEBUG=vite:* npm run dev

# Check build output
npm run build && ls -la dist/
```

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Website**: [tarmaq.ch](https://tarmaq.ch)
- **Email**: info@tarmaq.ch
- **Location**: Geneva, Switzerland
- **Organization**: Perspectives Jeunesse

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the fast build tool
- **Tailwind CSS** for the utility-first CSS framework
- **Inter Font** for the beautiful typography
- **Geneva Innovation Ecosystem** for inspiration and support

---

**Built with ❤️ for the youth of Geneva and beyond**
