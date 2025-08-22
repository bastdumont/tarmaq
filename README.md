# Tarmaq - Accélérateur d'opportunités pour la relève

Une plateforme web moderne pour Tarmaq, l'initiative qui propulse la jeunesse genevoise dans le futur du travail et de l'IA.

## 🚀 Production Build

### Prérequis
- Node.js 18+ 
- npm 9+

### Installation des dépendances
```bash
npm install
```

### Build de production
```bash
# Build optimisé pour la production
npm run build

# Build avec analyse des bundles
npm run build:analyze

# Preview du build de production
npm run preview

# Build + Preview en une commande
npm run preview:build
```

### Déploiement
```bash
# Nettoyer le dossier dist
npm run clean

# Construire pour la production
npm run build

# Servir localement (pour test)
npm run serve
```

Le dossier `dist/` contient votre application optimisée pour la production.

## 🛠️ Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build de production optimisé
- `npm run preview` - Preview du build de production
- `npm run test` - Lance les tests
- `npm run lint` - Vérifie la qualité du code
- `npm run lint:fix` - Corrige automatiquement les problèmes de linting
- `npm run format` - Formate le code avec Prettier
- `npm run clean` - Nettoie le dossier de build

## 📁 Structure du projet

```
tarmaq/
├── src/
│   ├── App.jsx          # Composant principal
│   ├── main.jsx         # Point d'entrée
│   └── assets/          # Images et ressources
├── dist/                # Build de production (généré)
├── vite.config.js       # Configuration Vite
├── package.json         # Dépendances et scripts
└── README.md           # Ce fichier
```

## 🔧 Configuration de production

### Optimisations automatiques
- **Minification** : Code et CSS minifiés avec Terser
- **Tree shaking** : Suppression du code inutilisé
- **Code splitting** : Séparation automatique des chunks
- **Asset optimization** : Images et ressources optimisées
- **Console removal** : Suppression des console.log en production

### Performance
- **Lazy loading** : Chargement différé des composants
- **Bundle analysis** : Analyse des tailles de bundles
- **Source maps** : Désactivés en production
- **Compression** : Gzip/Brotli ready

## 🌐 Déploiement

### Serveur statique
L'application peut être déployée sur n'importe quel serveur statique :
- Netlify
- Vercel
- GitHub Pages
- Serveur Apache/Nginx

### Variables d'environnement
Créez un fichier `.env.production` pour les variables de production :
```env
VITE_API_URL=https://api.tarmaq.ch
VITE_ANALYTICS_ID=your-analytics-id
```

## 📱 Responsive Design
L'application est entièrement responsive et optimisée pour :
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ♿ Accessibilité
- Navigation au clavier
- Support des lecteurs d'écran
- Contraste optimisé
- ARIA labels appropriés

## 🧪 Tests
```bash
# Tests unitaires
npm run test

# Tests en mode watch
npm run test:watch
```

## 📊 Analyse des performances
```bash
# Analyse du bundle
npm run build:analyze

# Lighthouse CI (optionnel)
npm install -g lighthouse
lighthouse dist/index.html
```

## 🔄 Mise à jour
```bash
# Mettre à jour les dépendances
npm update

# Vérifier les vulnérabilités
npm audit

# Corriger automatiquement
npm audit fix
```

---

**Tarmaq** - Propulser la jeunesse genevoise dans le futur du travail et de l'IA 🚀
