# Tech Context

## Dependencies
### Core Dependencies
```json
{
  "react": "^18.2.0",           // React 18 with concurrent features
  "react-dom": "^18.2.0"        // React DOM for web rendering
}
```

### Development Dependencies
```json
{
  "@testing-library/jest-dom": "^6.6.3",      // DOM testing utilities
  "@testing-library/react": "^16.0.1",        // React component testing
  "@testing-library/user-event": "^14.6.1",   // User interaction simulation
  "@vitejs/plugin-react": "^4.3.1",           // Vite React plugin
  "jsdom": "^25.0.0",                         // DOM environment for testing
  "vite": "^5.4.1",                           // Build tool and dev server
  "vitest": "^2.0.5"                          // Testing framework
}
```

## Build Tools
### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,                    // Hot Module Replacement
    open: true,                   // Auto-open browser
    watch: {
      usePolling: true,           // Reliable file watching
      interval: 100               // Polling interval
    }
  },
  test: {
    environment: 'jsdom',         // DOM testing environment
    setupFiles: './src/setupTests.js',
    css: false                    // Disable CSS processing in tests
  }
})
```

### Build Scripts
```json
{
  "dev": "vite",                 // Development server with hot reload
  "build": "vite build",         // Production build
  "preview": "vite preview",     // Preview production build
  "test": "vitest run",          // Run tests once
  "test:watch": "vitest"         // Run tests in watch mode
}
```

## Environment Constraints
### Node.js Requirements
- **Minimum**: Node.js 18+
- **Recommended**: Node.js 20+
- **Package Manager**: npm (comes with Node.js)

### Browser Support
- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive enhancement**: Core functionality works in older browsers

### Development Environment
- **Hot reload**: Enabled for fast development iteration
- **Auto-browser opening**: Automatically opens default browser
- **File watching**: Polling-based for reliable cross-platform support

## Architecture Decisions
### Single Page Application
- **React Router**: Not implemented (single page design)
- **State Management**: Local component state with React hooks
- **Styling**: CSS-in-JS with inline styles for component encapsulation

### Testing Strategy
- **Testing Library**: User-centric testing approach
- **Vitest**: Fast testing framework with Vite integration
- **jsdom**: DOM simulation for component testing
- **Coverage**: Basic test coverage for core functionality

### Performance Considerations
- **Bundle size**: Single bundle with all dependencies
- **Code splitting**: Not implemented (single component architecture)
- **Lazy loading**: Images loaded as needed
- **Animations**: CSS transitions for smooth performance

## Deployment
### Build Output
- **Directory**: `dist/` folder
- **Format**: Static HTML, CSS, and JavaScript
- **Optimization**: Vite production optimizations enabled

### Platform Support
- **Vercel**: Framework preset: Vite
- **Netlify**: Build command: `npm run build`, Publish: `dist/`
- **Static hosting**: Any platform supporting static files
- **CDN**: Compatible with content delivery networks

## Development Workflow
### Local Development
1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev`
3. **Hot reload**: Automatic on file changes
4. **Browser**: Auto-opens to localhost:5173

### Testing
1. **Run tests**: `npm test`
2. **Watch mode**: `npm run test:watch`
3. **Coverage**: Basic test coverage reporting

### Production Build
1. **Build**: `npm run build`
2. **Preview**: `npm run preview`
3. **Deploy**: Upload `dist/` folder to hosting platform
