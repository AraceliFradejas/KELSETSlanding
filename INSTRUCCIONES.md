# KelceTS Landing Page - INSTRUCCIONES DE USO

¡Felicidades! 🎉 Tu landing page de KelceTS está lista. Aquí tienes las instrucciones para usarla y personalizarla.

## ✅ Estado Actual del Proyecto

Tu proyecto incluye:

### 📁 Estructura Completa
- ✅ React 18 + Vite configurado
- ✅ Tailwind CSS con tema personalizado
- ✅ Componentes modulares organizados
- ✅ Sistema de traducción EN/ES
- ✅ Animaciones y efectos visuales
- ✅ Responsive design mobile-first
- ✅ Logo SVG personalizado

### 🎨 Secciones Implementadas
- ✅ Header con navegación y selector de idioma
- ✅ Hero con video background
- ✅ Values (4 valores principales)
- ✅ Testimonials con calificaciones
- ✅ AI Assistant (preparado para Copilot Studio)
- ✅ Contact form funcional
- ✅ Footer completo

## 🚀 Cómo Ejecutar

```bash
# 1. Instalar dependencias (ya hecho)
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Construir para producción
npm run build

# 4. Preview de producción
npm run preview
```

## 🔧 Personalizaciones Principales

### 1. 🎨 Cambiar Colores
Edita `tailwind.config.js`:
```javascript
colors: {
  'coral': {
    // Cambia estos valores por tus colores
    500: '#ff6b47', // Color principal coral
  },
  'lavender': {
    500: '#9563ff', // Color principal lavanda
  }
}
```

### 2. 📝 Modificar Textos
Edita `src/data/translations.js` para cambiar todos los textos en inglés y español.

### 3. 🤖 Configurar Asistente IA
En `src/components/AIAssistant.jsx`, línea ~95, reemplaza:
```javascript
// Descomenta y configura tu iframe de Copilot Studio
<iframe 
  src="https://copilotstudio.microsoft.com/embed/TU-AGENT-ID" 
  className="w-full h-80 rounded-xl border-0" 
  title="KelceTS Assistant"
  allow="microphone"
/>
```

### 4. 🎥 Agregar Video Hero
Coloca tu video en `public/hero-video.mp4` o cambia la ruta en `src/components/Hero.jsx`.

### 5. 📸 Cambiar Imágenes
- Logo: `public/kelcets-logo.svg`
- Testimonios: `public/testimonial-1.jpg`, `testimonial-2.jpg`, etc.
- Fallback hero: `public/hero-fallback.jpg`

## 🌐 Configuración de Microsoft Copilot Studio

### Paso 1: Crear el Agente
1. Ve a [Microsoft Copilot Studio](https://copilotstudio.microsoft.com)
2. Crea un nuevo agente/bot
3. Configura las respuestas para preguntas sobre zapatillas
4. Entrena con información de KelceTS

### Paso 2: Obtener URL de Integración
1. En tu agente, ve a "Channels" > "Custom website"
2. Copia la URL del iframe
3. Pégala en el componente AIAssistant

### Paso 3: Personalizar Respuestas
Configura respuestas para:
- Tallas disponibles
- Precios
- Envíos
- Devoluciones
- Información de productos

## 📱 Funcionalidades Implementadas

### ✨ Animaciones
- Scroll animations automáticas
- Hover effects en botones
- Transiciones suaves
- Efectos parallax

### 🌍 Multiidioma
- Inglés y español
- Cambio dinámico sin recarga
- URLs amigables para cada idioma

### 📋 Formulario de Contacto
- Validación en tiempo real
- Estados de loading/success/error
- Simulación de envío (2 segundos)

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints optimizados
- Menú mobile hamburguesa

## 🚀 Deploy a Producción

### GitHub Pages (Recomendado)
```bash
# 1. Sube tu código a GitHub
git add .
git commit -m "Initial KelceTS landing page"
git push origin main

# 2. Ve a Settings > Pages en GitHub
# 3. Selecciona "GitHub Actions" como source
# 4. Tu sitio estará en: https://tu-usuario.github.io/KELSETSlanding/
```

### Otras Opciones
- **Netlify**: Drag & drop de la carpeta `dist`
- **Vercel**: Conectar repositorio GitHub
- **Hosting tradicional**: Subir contenido de `dist/`

## 🔧 Configuraciones Adicionales

### Analytics
Agrega Google Analytics en `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'TU_GA_MEASUREMENT_ID');
</script>
```

### Dominio Personalizado
1. Compra tu dominio (ej: kelcets.com)
2. Configura DNS hacia tu hosting
3. Actualiza meta tags y URLs

### SSL/HTTPS
- GitHub Pages: Automático
- Netlify/Vercel: Automático
- Hosting tradicional: Configura certificado

## 📊 Métricas y Rendimiento

### Lighthouse Score Esperado
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 95+

### Optimizaciones Incluidas
- Lazy loading de imágenes
- Code splitting automático
- CSS y JS minificados
- Compresión Gzip

## 🐛 Solución de Problemas Comunes

### El servidor no inicia
```bash
# Limpiar caché y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Video no se reproduce
- Verifica que el archivo esté en `public/hero-video.mp4`
- Asegúrate de que sea formato MP4
- Considera comprimir para web (< 50MB)

### Tailwind no funciona
- Verifica que `src/index.css` tenga las directivas @tailwind
- Reinicia el servidor después de cambios en config

### Errores de build
```bash
# Verificar sintaxis
npm run lint

# Build limpio
rm -rf dist
npm run build
```

## 📞 Soporte

### Recursos Útiles
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind](https://tailwindcss.com/)
- [Microsoft Copilot Studio](https://docs.microsoft.com/copilot-studio/)

### Próximos Pasos Sugeridos
1. 🎥 Crear video profesional para el hero
2. 📸 Fotografías profesionales de productos
3. 🤖 Configurar y entrenar el asistente IA
4. 📊 Implementar analytics y tracking
5. 🔍 Optimizar SEO con contenido específico
6. 💳 Integrar sistema de pagos (si aplicable)
7. 📱 Considerar convertir en PWA

## 🎯 Siguientes Funcionalidades Sugeridas

### Corto Plazo
- [ ] Galería de productos
- [ ] Blog/noticias
- [ ] Newsletter signup
- [ ] Redes sociales feeds

### Mediano Plazo
- [ ] Tienda online básica
- [ ] Sistema de usuarios
- [ ] Wishlist/favoritos
- [ ] Comparador de productos

### Largo Plazo
- [ ] App móvil complementaria
- [ ] AR try-on experience
- [ ] Community features
- [ ] Programa de afiliados

---

¡Tu landing page de KelceTS está lista para impactar! 🚀👟

**Recuerda**: Esta landing page está optimizada para conversión y experiencia de usuario. Mantén el contenido actualizado y monitorea las métricas para seguir mejorando.

¡Que tengas mucho éxito con KelceTS! 💪
