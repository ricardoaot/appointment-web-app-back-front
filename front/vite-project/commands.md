
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