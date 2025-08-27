# tarmaq Project Context

## 🎯 Project Mission

**tarmaq** is a youth opportunity accelerator based in Geneva, Switzerland, designed to bridge the gap between traditional education and the rapidly evolving demands of the modern workforce. Our mission is to empower young people (ages 16-25) with practical skills, real-world experience, and a supportive community to thrive in the AI-driven economy.

## 🌍 Social Impact

### Target Audience
- **Primary**: Young people aged 16-25 in the Geneva region
- **Secondary**: Educators, employers, and innovation stakeholders
- **Tertiary**: International youth seeking opportunities in Switzerland

### Problem Statement
Young people face significant barriers in accessing:
- **Practical AI skills** and emerging technology training
- **Real-world project experience** with local companies
- **Professional networks** and mentorship opportunities
- **Innovation ecosystems** beyond traditional academic paths

### Value Proposition
- **Learn by doing** through hands-on projects and hackathons
- **Connect with industry** through internships and partnerships
- **Build a portfolio** of real projects and achievements
- **Join a community** of like-minded innovators and entrepreneurs

## 🏗️ Technical Architecture

### Frontend Strategy
We've implemented a **dual-platform approach** to ensure optimal user experience across all devices:

#### Mobile-First Design (`index.html`)
- **Device frame simulation** for mobile testing
- **Touch-optimized** interactions and gestures
- **Progressive Web App** capabilities
- **Responsive breakpoints** for all mobile devices

#### Desktop Enhancement (`tarmaq-desktop.html`)
- **Wide-screen layouts** (1400px+ max-width)
- **Advanced navigation** with dropdown menus
- **Multi-column grids** for content organization
- **Enhanced hover effects** and desktop interactions

### Technology Stack
- **Frontend Framework**: React 18 with Vite 5
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Build Tool**: Vite with hot module replacement
- **Testing**: Vitest + Testing Library
- **Deployment**: Vercel/Netlify ready

### Design System
Our design system is built around the tarmaq brand identity:

```css
/* Core Brand Colors */
--brand: #DA2F2C          /* Primary red - energy & innovation */
--brand-600: #C52824      /* Darker red - depth & professionalism */
--ink: #161616            /* Deep black - readability */
--bg: #FCFCFD             /* Light background - clean & modern */

/* Semantic Colors */
--card: #FFFFFF           /* Card surfaces */
--stroke: #E8E8EC         /* Borders & dividers */
--muted: #6F6F78          /* Secondary text */
```

## 📚 Content Strategy

### Educational Programs
1. **AI Bootcamps** (2-day intensive)
   - Building useful AI agents
   - Practical applications and use cases
   - Team collaboration and mentorship

2. **Hackathons** (48-hour challenges)
   - Local problem-solving focus
   - Data-driven innovation
   - Expert guidance and resources

3. **Internships** (4-week immersion)
   - PME and startup partnerships
   - Real project experience
   - Skill development and networking

4. **Workshops & Training**
   - No-code tools and platforms
   - Entrepreneurship fundamentals
   - Creative and soft skills development

### Content Pages (`tarmaq-adémie/` - Cours Libre)
- **AI Tools for Marketing**: Practical applications and case studies
- **Video Analysis with Claude**: AI-powered content creation
- **n8n Community Nodes**: Workflow automation tutorials
- **WordPress AI Integration**: Modern web development approaches

## 🧠 Memory Bank System

The project includes a comprehensive documentation system that serves as a **living knowledge base**:

### Documentation Structure
- **Project Brief**: Strategic overview and requirements
- **Product Context**: User research and UX objectives
- **Active Context**: Current development state
- **System Patterns**: Technical architecture decisions
- **Tech Context**: Dependencies and constraints
- **Progress**: Development milestones and blockers

### Benefits
- **Onboarding**: New developers can quickly understand the project
- **Decision Tracking**: Document why certain choices were made
- **Knowledge Preservation**: Institutional memory for the team
- **Stakeholder Communication**: Clear project status updates

## 🔄 Development Workflow

### Current State
- ✅ **Git repository** initialized with initial commit
- ✅ **Mobile and desktop versions** implemented
- ✅ **Memory Bank system** created and populated
- ✅ **Hot reload development** environment configured
- ✅ **Basic testing setup** with Vitest

### Next Steps
1. **Content Migration**: Apply tarmaq colors to remaining pages
2. **Testing Coverage**: Expand test suite for all components
3. **Performance Optimization**: Implement lazy loading and code splitting
4. **Accessibility Audit**: Ensure WCAG compliance
5. **SEO Optimization**: Implement structured data and meta tags

### Development Priorities
1. **User Experience**: Smooth interactions and fast loading
2. **Content Quality**: Engaging and educational materials
3. **Technical Excellence**: Clean code and maintainable architecture
4. **Community Building**: Features that encourage engagement

## 🌐 Deployment Strategy

### Development Environment
- **Local development** with hot reload
- **Git-based workflow** with feature branches
- **Testing automation** for quality assurance
- **Code review process** for collaboration

### Production Deployment
- **Static site generation** for optimal performance
- **CDN distribution** for global accessibility
- **Environment-specific** configurations
- **Monitoring and analytics** integration

### Hosting Options
- **Vercel**: Optimal for React + Vite projects
- **Netlify**: Great for static sites with forms
- **GitHub Pages**: Free hosting for open source
- **Traditional hosting**: Full control over infrastructure

## 📊 Success Metrics

### User Engagement
- **Page views** and time on site
- **Program registrations** and completion rates
- **Community participation** and feedback
- **Social media** reach and engagement

### Technical Performance
- **Page load speed** (target: <3 seconds)
- **Mobile usability** scores
- **Accessibility compliance** (WCAG 2.1 AA)
- **Cross-browser compatibility**

### Business Impact
- **Youth participation** in programs
- **Partner engagement** and satisfaction
- **Funding and sponsorship** success
- **Community growth** and retention

## 🤝 Stakeholder Engagement

### Internal Team
- **Developers**: Technical implementation and maintenance
- **Designers**: User experience and visual design
- **Content Creators**: Educational materials and resources
- **Project Managers**: Coordination and delivery

### External Partners
- **Educational Institutions**: Curriculum alignment and validation
- **Local Companies**: Internship opportunities and mentorship
- **Government Agencies**: Funding and regulatory support
- **Community Organizations**: Outreach and engagement

### Target Users
- **Students**: Primary beneficiaries of programs
- **Parents**: Decision makers and supporters
- **Educators**: Referral sources and collaborators
- **Employers**: Future talent pipeline

## 🔮 Future Vision

### Short Term (3-6 months)
- **Complete content migration** to tarmaq branding
- **Launch beta programs** with pilot groups
- **Gather user feedback** and iterate on design
- **Establish partner relationships** for programs

### Medium Term (6-12 months)
- **Scale successful programs** based on feedback
- **Develop advanced features** like user accounts
- **Expand content library** with new topics
- **Build community platform** for ongoing engagement

### Long Term (1-3 years)
- **International expansion** beyond Geneva
- **AI-powered personalization** of learning paths
- **Virtual reality integration** for immersive experiences
- **Blockchain certification** for skills and achievements

## 📞 Getting Started

### For Developers
1. **Clone the repository**: `git clone [repository-url]`
2. **Install dependencies**: `npm install`
3. **Start development**: `npm run dev`
4. **Review documentation**: Check `memory-bank/` folder
5. **Join the community**: Connect with the team

### For Stakeholders
1. **Review project brief**: `memory-bank/Project Brief.md`
2. **Understand the vision**: Read this context document
3. **Explore the platform**: Visit both mobile and desktop versions
4. **Provide feedback**: Share insights and suggestions
5. **Get involved**: Participate in programs or partnerships

---

**This document serves as a comprehensive guide to understanding the tarmaq project, its current state, and future direction. It should be updated regularly as the project evolves and new insights emerge.**

*Last updated: December 2024*
*Version: 1.0*
*Project: tarmaq Youth Opportunity Accelerator*
