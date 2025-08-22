# 🚀 Guide de Déploiement Tarmaq

## 📋 Prérequis
- Build de production généré (`npm run build`)
- Dossier `dist/` contenant les fichiers optimisés
- Compte sur la plateforme de déploiement choisie

## 🏗️ Build de Production

### 1. Générer le build
```bash
# Nettoyer les builds précédents
npm run clean

# Construire pour la production
npm run build

# Vérifier le contenu du dossier dist/
ls -la dist/
```

### 2. Tester le build localement
```bash
# Preview du build de production
npm run preview

# Ou servir avec un serveur local
npm run serve
```

## 🌐 Plateformes de Déploiement

### Netlify (Recommandé)

#### Option 1: Drag & Drop
1. Aller sur [netlify.com](https://netlify.com)
2. Se connecter avec GitHub
3. Glisser-déposer le dossier `dist/` sur la zone de déploiement
4. L'URL sera générée automatiquement

#### Option 2: Git Integration
1. Connecter le repository GitHub
2. Configurer le build :
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18` ou `20`
3. Déployer automatiquement à chaque push

### Vercel

1. Aller sur [vercel.com](vercel.com)
2. Importer le projet depuis GitHub
3. Configuration automatique détectée (Vite + React)
4. Déployer en un clic

### GitHub Pages

#### Option 1: Actions GitHub (Recommandé)
1. Créer `.github/workflows/deploy.yml` :
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

#### Option 2: Manuel
1. Aller dans Settings > Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` ou `main`
4. Folder: `/ (root)` ou `/docs`

### Serveur Traditionnel (Apache/Nginx)

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Compression Gzip
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache des assets statiques
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

#### Nginx
```nginx
server {
    listen 80;
    server_name tarmaq.ch www.tarmaq.ch;
    root /var/www/tarmaq/dist;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Cache des assets statiques
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Configuration Post-Déploiement

### 1. Variables d'Environnement
Créer `.env.production` :
```env
VITE_APP_ENV=production
VITE_API_URL=https://api.tarmaq.ch
VITE_ANALYTICS_ID=your-analytics-id
```

### 2. Domaines et SSL
- Configurer le domaine personnalisé
- Activer HTTPS/SSL
- Configurer les redirections www → non-www

### 3. Monitoring
- Google Analytics
- Sentry pour les erreurs
- Uptime monitoring

## 📱 Test Post-Déploiement

### Checklist de Validation
- [ ] Page d'accueil se charge correctement
- [ ] Navigation fonctionne
- [ ] Images et assets se chargent
- [ ] Responsive design sur mobile/tablet
- [ ] Performance (Lighthouse score > 90)
- [ ] Accessibilité (contraste, navigation clavier)
- [ ] Console sans erreurs

### Outils de Test
```bash
# Performance
lighthouse https://tarmaq.ch

# Responsive
# Utiliser les outils de développement du navigateur

# Accessibilité
# Extensions: axe, WAVE, etc.
```

## 🚨 Dépannage

### Problèmes Courants

#### Build échoue
```bash
# Vérifier la version de Node
node --version  # Doit être 18+

# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Assets 404
- Vérifier les chemins dans `vite.config.js`
- S'assurer que les images sont dans `src/assets/`
- Vérifier la configuration du serveur web

#### Routing SPA
- Configurer le serveur pour rediriger vers `index.html`
- Vérifier les règles de réécriture Apache/Nginx

#### Performance lente
- Activer la compression Gzip
- Configurer le cache des assets
- Optimiser les images (WebP, compression)

## 📊 Maintenance

### Mises à Jour
```bash
# Mettre à jour les dépendances
npm update

# Vérifier les vulnérabilités
npm audit

# Rebuilder et redéployer
npm run build
```

### Monitoring Continu
- Vérifier les logs d'erreur
- Surveiller les performances
- Tester régulièrement l'accessibilité

---

**Tarmaq** - Déploiement professionnel pour une expérience utilisateur optimale 🚀
