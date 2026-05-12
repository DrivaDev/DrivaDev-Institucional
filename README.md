# Driva Dev — Web Institucional

Web institucional de Driva Dev construida con Next.js 15, Three.js, Tailwind CSS y EmailJS.

## Stack

- **Next.js 15** (App Router, SSR)
- **React 19**
- **Tailwind CSS 3**
- **Three.js** — animación 3D en el hero
- **EmailJS** — formulario de contacto sin backend

## Configuración inicial

### 1. Clonar e instalar

```bash
git clone https://github.com/DrivaDev/DrivaDev-Institucional.git
cd DrivaDev-Institucional
npm install
```

### 2. Variables de entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```bash
cp .env.example .env.local
```

Luego completar los valores en `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

### Cómo obtener las claves de EmailJS

1. Crear cuenta en [emailjs.com](https://www.emailjs.com/) (plan gratuito: 200 emails/mes)
2. **Service ID**: Ir a *Email Services* → conectar Gmail → copiar el Service ID
3. **Template ID**: Ir a *Email Templates* → crear template con variables:
   - `{{from_name}}` — nombre del remitente
   - `{{from_email}}` — email del remitente
   - `{{message}}` — mensaje
   - `{{to_email}}` — destinatario (configurar como `driva.devv@gmail.com`)
4. **Public Key**: Ir a *Account* → *General* → copiar la Public Key

### 3. Desarrollo local

```bash
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## Deploy en Vercel

La forma más rápida:

1. Ir a [vercel.com](https://vercel.com) → importar el repositorio de GitHub
2. En la sección *Environment Variables*, agregar las tres variables de EmailJS
3. Deploy automático en cada push a `main`

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout global (Navbar + Footer + fuentes)
│   ├── globals.css         # Estilos base + utilidades
│   ├── page.tsx            # / — Inicio
│   ├── servicios/page.tsx  # /servicios
│   ├── portafolio/page.tsx # /portafolio
│   └── contacto/page.tsx   # /contacto
└── components/
    ├── Navbar.tsx           # Navbar sticky con glassmorphism
    ├── Footer.tsx           # Footer oscuro
    ├── Hero3D.tsx           # Animación Three.js (client-side)
    ├── ParticlesCanvas.tsx  # Canvas de partículas conectadas
    ├── ScrollReveal.tsx     # Wrapper IntersectionObserver
    └── ContactForm.tsx      # Formulario con EmailJS
public/
├── isotipo.svg             # Ícono de la marca
└── logo-horizontal.svg     # Logo completo
```

## Agregar proyectos al portafolio

Editar el array `projects` en `src/app/portafolio/page.tsx`. Cada proyecto tiene:

```ts
{
  name: "Nombre del proyecto",
  tag: "Categoría · Subcategoría",
  url: "https://url-del-proyecto.com",
  description: "Descripción del proyecto...",
  features: ["Feature 1", "Feature 2", "Feature 3"],
}
```

## Paleta de colores

| Variable Tailwind | Hex       | Uso                      |
|-------------------|-----------|--------------------------|
| `principal`       | `#EA580C` | CTAs, botones, acentos   |
| `titulares`       | `#9A3412` | H1, H2, títulos          |
| `acento`          | `#FED7AA` | Fondos secundarios       |
| `fondo`           | `#FFF7ED` | Fondo principal          |
| `texto`           | `#1C1917` | Cuerpo de texto          |
