// Placeholder image generator - creates simple images for testimonials
// This is a simple utility to create placeholder images for development

export const generatePlaceholderImage = (name, size = 80) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = size;
  canvas.height = size;
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#ff6b47');
  gradient.addColorStop(1, '#9563ff');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // Add initials
  const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();
  ctx.fillStyle = 'white';
  ctx.font = `${size * 0.4}px 'Outfit', sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(initials, size / 2, size / 2);
  
  return canvas.toDataURL();
};

// Create video placeholder if no video is available
export const createVideoPlaceholder = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = 1920;
  canvas.height = 1080;
  
  // Create animated gradient background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#ff6b47');
  gradient.addColorStop(0.5, '#9563ff');
  gradient.addColorStop(1, '#ff6b47');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add overlay pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  for (let i = 0; i < canvas.width; i += 100) {
    for (let j = 0; j < canvas.height; j += 100) {
      ctx.fillRect(i, j, 50, 50);
    }
  }
  
  return canvas.toDataURL();
};
