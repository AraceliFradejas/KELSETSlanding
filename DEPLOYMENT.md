# Deployment Guide

Esta guía te ayudará a desplegar tu landing page de KelceTS en diferentes plataformas.

## 🚀 GitHub Pages

### Preparación
1. Asegúrate de que tu proyecto esté en un repositorio de GitHub
2. Ve a la configuración del repositorio (Settings)
3. En la sección "Pages", selecciona "GitHub Actions" como fuente

### Deploy Automático
Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Deploy Manual
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script al package.json
"deploy": "gh-pages -d dist"

# Construir y desplegar
npm run build
npm run deploy
```

## 🌐 Netlify

### Deploy desde Git
1. Ve a [netlify.com](https://netlify.com) y regístrate
2. Conecta tu repositorio de GitHub
3. Configuración de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

### Deploy desde CLI
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Desplegar
npm run build
netlify deploy --prod --dir=dist
```

## ⚡ Vercel

### Deploy desde Git
1. Ve a [vercel.com](https://vercel.com) y regístrate
2. Importa tu repositorio
3. Vercel detectará automáticamente que es un proyecto Vite

### Deploy desde CLI
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login y deploy
vercel

# Deploy de producción
vercel --prod
```

## 🔧 Variables de Entorno

Para diferentes entornos, crea archivos:

### `.env.development`
```
VITE_API_URL=http://localhost:3000
VITE_COPILOT_STUDIO_URL=your-dev-copilot-url
```

### `.env.production`
```
VITE_API_URL=https://api.kelcets.com
VITE_COPILOT_STUDIO_URL=your-prod-copilot-url
```

### `.env.local` (no incluir en git)
```
VITE_ANALYTICS_ID=your-analytics-id
VITE_COPILOT_STUDIO_TOKEN=your-secret-token
```

## 📊 Configuración de Analytics

### Google Analytics 4
```javascript
// En index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Microsoft Clarity
```javascript
// En index.html
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
</script>
```

## 🔒 Configuración de Dominio

### Dominio Personalizado en GitHub Pages
1. En la configuración de GitHub Pages, añade tu dominio
2. Crea un archivo `CNAME` en la carpeta `public/` con tu dominio:
```
kelcets.com
```

### SSL/HTTPS
- GitHub Pages: Automático
- Netlify: Automático
- Vercel: Automático

## 🚀 Optimizaciones de Rendimiento

### Compresión Gzip
La mayoría de plataformas la habilitan automáticamente.

### CDN
- Netlify: CDN global incluido
- Vercel: Edge Network incluido
- GitHub Pages: CDN básico

### Caché de Assets
```javascript
// En vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['./src/utils/animations.js']
        }
      }
    }
  }
})
```

## 📱 PWA (Progressive Web App)

### Instalar Vite PWA Plugin
```bash
npm install -D vite-plugin-pwa
```

### Configurar en vite.config.js
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'KelceTS Landing',
        short_name: 'KelceTS',
        description: 'More than sneakers. We are movement.',
        theme_color: '#ff6b47',
        icons: [
          {
            src: 'kelcets-logo.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ]
})
```

## 🔍 SEO Optimizations

### Meta Tags (ya incluidos)
- Open Graph
- Twitter Cards
- Structured Data

### Sitemap
Crea `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kelcets.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Robots.txt
Crea `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://kelcets.com/sitemap.xml
```

## 📈 Monitoreo

### Health Checks
```javascript
// health-check.js
export const healthCheck = async () => {
  try {
    const response = await fetch('/api/health');
    return response.ok;
  } catch (error) {
    console.error('Health check failed:', error);
    return false;
  }
};
```

### Error Tracking con Sentry
```bash
npm install @sentry/react
```

```javascript
// En src/main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

## 🔄 CI/CD Pipeline

### GitHub Actions completo
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run lint
    - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 📞 Soporte

Si tienes problemas con el deployment:

1. Revisa los logs de build
2. Verifica las variables de entorno
3. Comprueba que todas las rutas sean relativas
4. Asegúrate de que el base path esté configurado correctamente

¡Tu landing page de KelceTS estará lista para impresionar al mundo! 🚀
