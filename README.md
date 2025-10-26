# Dalissa-Yurley-Meza-Gaxiola

Sitio estático de presentación y contacto para la Maestra Dalissa Yurley Meza Gaxiola.

Contenido del repositorio:
- `index.html` — página principal (ahora enlaza `style.css` y `script.js`).
- `style.css` — estilos.
- `script.js` — comportamiento (IntersectionObserver y botón WhatsApp).
- `CNAME` — dominio personalizado: `maestradalissameza.com`.
- `netlify.toml` — configuración opcional para desplegar en Netlify.

Despliegue recomendado:
- Opción A: GitHub Pages
  1. En Settings → Pages seleccionar rama `main` y carpeta `/ (root)`.
  2. Si usas el dominio personalizado (`CNAME`), asegúrate de que en tu DNS haya el registro requerido (A records o CNAME) según la documentación de GitHub Pages.
- Opción B: Netlify
  1. Importar el repo a Netlify.
  2. Configurar `Publish directory` como `.` (raíz). `netlify.toml` ya incluye la regla SPA.
  3. Si usas un dominio personalizado en Netlify, añade el dominio desde el panel de Netlify y actualiza DNS.

Notas y pasos pendientes:
- Añadir `favicon.ico` en la raíz (para que el enlace en `index.html` funcione).
- Elegir el proveedor de hosting (GitHub Pages o Netlify) y dejar la configuración correspondiente (eliminar `netlify.toml` si no se va a usar).
- Verificar registros DNS para `maestradalissameza.com`.
- Ejecutar Lighthouse y comprobar accesibilidad / SEO / rendimiento.
