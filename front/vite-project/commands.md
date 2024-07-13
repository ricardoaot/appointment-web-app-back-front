
### Install Tailwind CSS
``` 
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
``` 

### configure tailwind.config.js 
```
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


### install Shadcn
``` 
npm install @shadcn/ui
``` 

### [important] initialize Shadcn
``` 
npx shadcn-ui@latest init
``` 

### Global CSS file
Cuando te pregunte "Where is your global CSS file?", responde con la ruta de tu archivo CSS global, por ejemplo:

``` 
src/index.css
```

### Crear jsconfig.json
Crea un archivo llamado jsconfig.json en la raíz de tu proyecto con el siguiente contenido:

```
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "jsx": "react-jsx",
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  },
  "include": ["src"]
}
```



### Add components
``` 
npx shadcn-ui@latest add button
``` 

### Project doesn't recognize alias '@'
Primero, instala el plugin necesario para configurar alias en Vite:

```
npm install @rollup/plugin-alias --save-dev
```

Edita tu archivo vite.config.js para incluir el alias. Aquí tienes un ejemplo de cómo configurarlo:

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});

```


### Install React image gallery library - React Stick

Aquí tienes un ejemplo de una página de inicio para un sistema web de reserva de clases de baile con un tema oscuro elegante, utilizando React, Tailwind CSS, y ShadCN. Este ejemplo incluye un slider de imágenes relacionadas al baile.

Primero, instala las dependencias necesarias. Puedes usar [React Slick](https://react-slick.neostack.com/) para el slider de imágenes:

```bash
npm install react-slick slick-carousel
```

Luego, crea los archivos necesarios:

### `src/App.js`
```jsx
import React from 'react';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <ImageSlider />
        <section className="mt-8">
          <h1 className="text-4xl font-bold text-center">Bienvenidos a Nuestro Sistema de Reserva de Clases de Baile</h1>
          <p className="mt-4 text-lg text-center">
            Explora nuestras clases y reserva tu lugar hoy mismo. ¡Vamos a bailar!
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
```

### `src/components/Header.js`
```jsx
import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Dance Booking</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:text-gray-400">Inicio</a></li>
            <li><a href="#classes" className="hover:text-gray-400">Clases</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
```

### `src/components/ImageSlider.js`
```jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  { src: 'https://example.com/image1.jpg', alt: 'Baile 1' },
  { src: 'https://example.com/image2.jpg', alt: 'Baile 2' },
  { src: 'https://example.com/image3.jpg', alt: 'Baile 3' },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="mt-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
```

### `src/index.css`
Asegúrate de tener las clases de Tailwind CSS y cualquier personalización adicional en tu archivo CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Estilos adicionales para el tema oscuro */
body {
  @apply bg-gray-900 text-white;
}
```

### `tailwind.config.js`
Configura Tailwind CSS para tu proyecto si aún no lo has hecho:

```js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### `src/index.js`
Asegúrate de importar el archivo CSS en tu archivo de entrada principal:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Este es un ejemplo básico, y puedes personalizarlo aún más según tus necesidades específicas. Puedes agregar más secciones y estilos para hacer tu página de inicio más atractiva y funcional.

