# tarmaq.ch — Accélérateur d'opportunités à Genève

## Vue d'ensemble

tarmaq est un accélérateur d'opportunités pour les jeunes qui souhaitent explorer l'IA, entreprendre, créer et rêver. Nous proposons un espace ouvert à tous, avec des équipements de pointe, des programmes concrets, des expériences terrain et une communauté active pour apprendre en faisant.

## Structure du site

Le site est disponible en deux versions avec un système de basculement automatique :

### 📱 Version Mobile (`tarmaq-mobile.html`)
- Interface optimisée pour mobile avec simulation d'appareil
- Navigation par menu hamburger
- Design responsive et adapté aux petits écrans
- Bouton de basculement vers la version desktop

### 🖥️ Version Desktop (`tarmaq-desktop2.html`)
- Interface complète pour écrans larges
- Navigation complète avec menus déroulants
- Mise en page étendue avec plus de contenu visible
- Bouton de basculement vers la version mobile

### 🔄 Système de basculement
- **Page d'accueil** (`index.html`) : Redirige automatiquement vers la version desktop par défaut
- **Préférence utilisateur** : Sauvegarde le choix de l'utilisateur dans le localStorage
- **Basculement manuel** : Boutons dans chaque version pour changer de vue
- **Redirection intelligente** : Respecte la dernière préférence de l'utilisateur

## Navigation entre les vues

### Depuis la version Desktop
- Cliquer sur l'icône mobile (📱) dans l'en-tête
- Redirection automatique vers `tarmaq-mobile.html`

### Depuis la version Mobile
- Cliquer sur l'icône desktop (💻) dans l'en-tête
- Redirection automatique vers `tarmaq-desktop2.html`

## Fonctionnalités

### Programmes
- **Bootcamps IA** : Construction d'agents IA utiles en 2 jours
- **Hackathons** : Défis d'innovation pour Genève
- **Stages** : Immersion en PME et startups
- **Mentorat** : Accompagnement par des praticiens
- **Voyages** : Visites d'écosystèmes innovants

### Approche pédagogique
1. **Formation** : Bootcamps, ateliers, entrepreneuriat
2. **Expériences** : Projets réels et hackathons
3. **Communauté** : Réseau de mentors et pairs

### Partenaires
- CCIG (Chambre de commerce de Genève)
- RENT (Real Estate & New Tech Switzerland)
- Société de Lecture de Genève
- BiAlps
- Building Bridges
- Balder App

## Technologies utilisées

- **Frontend** : HTML5, CSS3, JavaScript vanilla
- **Styling** : Tailwind CSS (via CDN)
- **Responsive** : Design mobile-first avec breakpoints
- **Animations** : Transitions CSS et micro-interactions
- **Stockage** : localStorage pour les préférences utilisateur

## Structure des fichiers

```
tarmaq/
├── index.html              # Page d'accueil avec redirection automatique
├── tarmaq-desktop2.html   # Version desktop complète
├── tarmaq-mobile.html     # Version mobile optimisée
├── src/
│   └── assets/            # Images et ressources
│       ├── logo.png
│       ├── hero-background.png
│       └── [autres images...]
└── README.md
```

## Déploiement

Le site est prêt pour le déploiement sur n'importe quel hébergeur web statique :
- GitHub Pages
- Netlify
- Vercel
- Serveur web traditionnel

## Développement

Pour tester localement :
1. Ouvrir `index.html` dans un navigateur
2. Le site redirigera automatiquement vers la version desktop
3. Utiliser les boutons de basculement pour tester les deux versions

## Support et maintenance

- **Contact** : info@tarmaq.ch
- **Responsive** : Testé sur desktop, tablette et mobile
- **Accessibilité** : Navigation clavier et lecteurs d'écran
- **Performance** : Optimisé pour le chargement rapide

---

*Une initiative de Perspectives Jeunesse, à Genève*
