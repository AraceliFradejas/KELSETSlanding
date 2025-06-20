# KelceTS Landing Page

Una landing page moderna y emocional para KelceTS S.L., nuestra startup de zapatillas innovadoras.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Multiidioma**: Soporte para inglés y español
- **Animaciones Fluidas**: Transiciones suaves y efectos visuales
- **Asistente IA**: Integración con Microsoft Copilot Studio
- **Rendimiento Optimizado**: Carga rápida y experiencia fluida

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework de JavaScript para la interfaz de usuario
- **Vite**: Herramienta de construcción rápida
- **Tailwind CSS**: Framework de CSS utilitario
- **Responsive Design**: Mobile-first approach

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/kelsets-landing.git
cd kelsets-landing
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Construcción para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 🎨 Estilo Visual

- **Estética "Swifie"**: Moderna, juvenil y emocional
- **Paleta de Colores**: 
  - Coral: `#ff6b47` - `#ff8f6a`
  - Lavanda: `#9563ff` - `#b191ff`
  - Neutros: Blanco, negro, grises
- **Tipografía**: Outfit y Poppins
- **Animaciones**: FadeIn, SlideIn, Bounce effects

## 📱 Secciones

### 1. Header
- Logo de KelceTS
- Navegación por anclas
- Selector de idioma (🇺🇸 EN | 🇪🇸 ES)

### 2. Hero
- Video de fondo en autoplay
- Mensaje principal multiidioma
- Botones de llamada a la acción

### 3. Values (Valores)
- 4 pilares: Technology, Style, Trust, Culture
- Iconos personalizados
- Descripciones detalladas

### 4. Testimonials (Testimonios)
- 3 testimonios reales por idioma
- Calificaciones con estrellas
- Indicadores de confianza

### 5. AI Assistant (Asistente IA)
- Integración con Microsoft Copilot Studio
- Interfaz de chat simulada
- Características del asistente

### 6. Contact (Contacto)
- Formulario de contacto
- Información de la empresa
- Enlaces a redes sociales

### 7. Footer
- Enlaces organizados
- Newsletter signup
- Información legal

## 🔧 Configuración del Asistente IA

Para integrar tu asistente de Microsoft Copilot Studio:

1. Ve al archivo `src/components/AIAssistant.jsx`
2. Busca el comentario sobre la integración
3. Reemplaza el placeholder con tu iframe URL:

```jsx
<iframe 
  src="https://copilotstudio.microsoft.com/embed/your-agent-id" 
  className="w-full h-80 rounded-xl border-0" 
  title="KelceTS Assistant"
  allow="microphone"
/>
```

## 🌐 Deploy en GitHub Pages

1. Instala gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Agrega el script de deploy en `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. Construye y despliega:
```bash
npm run build
npm run deploy
```

## 📋 Personalización

### Cambiar Colores
Edita el archivo `tailwind.config.js` para personalizar la paleta de colores.

### Agregar Contenido
Modifica el archivo `src/data/translations.js` para actualizar textos en ambos idiomas.

### Modificar Animaciones
Las animaciones se definen en `src/index.css` y se pueden personalizar según tus necesidades.

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ve el archivo `LICENSE` para más detalles.

## 📞 Contacto

KelceTS S.L. - [@kelcets](https://twitter.com/kelcets) - hello@kelcets.com

Link del Proyecto: [https://github.com/tu-usuario/kelsets-landing](https://github.com/tu-usuario/kelsets-landing)

---

Made with ❤️ by KelceTS Team
