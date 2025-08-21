# tarmaq — React (Vite) **Enhanced UI**

Portage React de la landing *tarmaq* avec design raffiné (dégradés doux, cartes modulaires, micro‑interactions) et menu mobile **autoclose** (click‑away + Esc + scroll‑lock).

## 🚀 Démarrage rapide

> Prérequis : **Node.js 18+** (ou 20+ recommandé) et npm.

```bash
# 1) Installer les dépendances
npm i

# 2) Lancer en local (hot reload)
npm run dev

# 3) Build de production
npm run build

# 4) Prévisualiser le build
npm run preview
```

Ouvrez l’URL indiquée par Vite (ex: http://localhost:5173).

## 📦 Structure

```
tarmaq-react-enhanced/
├── index.html                # Balises meta + Google Fonts + root
├── package.json              # Scripts & dépendances
├── vite.config.js            # Vite + Vitest (jsdom)
├── src/
│   ├── App.jsx               # Page principale (styles inline + UI améliorée)
│   ├── main.jsx              # Bootstrap React 18
│   ├── setupTests.js         # jest-dom pour assertions ergonomiques
│   └── App.test.jsx          # Tests: rendu hero, 4 pills, menu mobile autoclose
└── README.md                 # Ce fichier
```

## 🧪 Tests

Nous utilisons **Vitest** + **Testing Library**.

```bash
# Lancer les tests en mode interactif
npm run test:watch

# Lancer une seule fois (CI)
npm test
```

Couverture des tests incluse :
- Hero présent et **4 pills** exactement.
- Menu mobile : **ouverture**, **fermeture par backdrop**, **fermeture via Esc**.

## 🧰 Contexte technique

- **Vite 5 + React 18**.
- UI raffinée : header translucide avec blur; hero en **dégradé** + **overlay** (contraste), cartes avec **ombre douce**, boutons **gradient**/**plein**, focus visible.
- Accessibilité : aria‑labels, `aria-expanded`, **Esc pour fermer** le menu, **click‑away** via un bouton backdrop focusable.
- Sanity checks (console) pour signaler l’absence d’éléments clés.

## 🎯 Customisation rapide

- **Couleurs/arrondis/ombres** : variables CSS au début du `<style>` dans `App.jsx` (`--brand`, `--r-xl`, etc.).
- **Logos/partenaires** : remplacez les blocs `.partner` par des `<img alt="..." src="..." />`.
- **CTA** : ajustez les liens `#don` / `#devenir-partenaire` vers vos endpoints.

## ☁️ Déploiement (exemples)

- **Vercel** : *New Project* → *Import* → framework *Vite* (build `npm run build`, output `dist/`).  
- **Netlify** : *New site from Git* → Build: `npm run build` / Publish: `dist`.

## 🐛 Dépannage

- Erreur `SyntaxError: Unexpected token, expected "}"` : vérifiez que tout le CSS est **bien à l’intérieur** du template string du `<style>{\`...\`}</style>`.
- Pages blanches : ouvrez la console (F12) pour voir les **[Sanity tests]** et éventuels `TEST FAIL`.
- Menu mobile : si vous ne voyez pas le backdrop, vérifiez le z-index (`.backdrop` = 40, header sticky au-dessus).

---

**Licence**: MIT (à adapter si nécessaire).  
**Contact**: info@tarmaq.ch
