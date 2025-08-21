# System Patterns

## Naming Conventions
- **Components**: PascalCase (e.g., `App`, `Header`, `MobileMenu`)
- **Functions**: camelCase (e.g., `handleMenuToggle`, `onScroll`)
- **Variables**: camelCase (e.g., `menuOpen`, `scrolled`)
- **CSS Classes**: kebab-case (e.g., `btn-primary`, `nav-links`)
- **Files**: PascalCase for components (e.g., `App.jsx`), kebab-case for utilities

## Styling Patterns
### CSS Variables
```css
:root {
  /* Brand & Neutrals */
  --brand: #DA2F2C;           /* primary */
  --brand-600: #C52824;       /* hover/darken */
  --ink: #161616;             /* body text */
  --ink-2: #2A2A2A;           /* titles */
  --bg: #FCFCFD;              /* page bg */
  --card: #FFFFFF;            /* surfaces */
  --stroke: #E8E8EC;          /* borders */
  --muted: #6F6F78;
  
  /* Radii */
  --r-lg: 16px; --r-xl: 22px; --r-2xl: 28px;
  
  /* Shadows */
  --sh-soft: 0 6px 24px rgba(0,0,0,.06);
  --sh-elev: 0 16px 40px rgba(0,0,0,.10);
  
  /* Gradients */
  --grad-hero: radial-gradient(...);
  --grad-accent: linear-gradient(140deg, #FF9D9B, #DA2F2C);
}
```

### Component Styling
- **Inline styles**: Used for dynamic styling and component-specific styles
- **CSS-in-JS**: Template strings with CSS for component encapsulation
- **Utility classes**: Reusable classes for common patterns (e.g., `.btn`, `.wrap`)

## Architecture Patterns
### Component Structure
```jsx
// Main App component with inline styles
export default function App() {
  // State management
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Effects for side effects
  useEffect(() => { /* scroll handling */ }, []);
  useEffect(() => { /* menu state management */ }, [menuOpen]);
  
  // Event handlers
  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  
  return (
    <div>
      <style>{`/* CSS styles */`}</style>
      {/* JSX structure */}
    </div>
  );
}
```

### State Management
- **Local state**: `useState` for component-specific state
- **Effects**: `useEffect` for side effects and lifecycle management
- **Event handling**: Inline handlers for user interactions

### Layout Patterns
- **Container**: `.wrap` class for consistent max-width and padding
- **Grid**: CSS Grid for responsive layouts
- **Flexbox**: Used for alignment and spacing
- **Sticky positioning**: Header with backdrop blur and scroll effects

## Responsive Design Patterns
### Breakpoint Strategy
- **Mobile-first**: Base styles for mobile, progressive enhancement
- **CSS Grid**: Responsive grid layouts that adapt to screen size
- **Flexbox**: Flexible layouts that wrap and adjust naturally

### Mobile Navigation
- **Hamburger menu**: Toggle button with animated icon
- **Backdrop**: Full-screen overlay for mobile menu
- **Auto-close**: Multiple triggers (click-away, escape key, scroll lock)

## Performance Patterns
### Animation Optimization
- **CSS transitions**: Hardware-accelerated properties (transform, opacity)
- **Debounced scroll**: Optimized scroll event handling
- **Lazy loading**: Images and content loaded as needed

### Code Splitting
- **Single bundle**: All styles and logic in main App component
- **Inline styles**: CSS embedded in component for faster rendering
- **Minimal dependencies**: Only essential React packages

## Testing Patterns
### Test Structure
```jsx
// Component testing with Testing Library
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('App', () => {
  test('renders hero section', () => {
    render(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
```

### Test Coverage
- **Component rendering**: Verify all major sections are present
- **User interactions**: Test mobile menu functionality
- **Accessibility**: Ensure proper ARIA labels and keyboard navigation
- **Edge cases**: Handle error states and boundary conditions
