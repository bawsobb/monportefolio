// Adresse du site, utilisée pour le SEO (balises meta, schema, sitemap).
// Pour changer de domaine sans toucher au code : définir NEXT_PUBLIC_BASE_URL
// dans les variables d'environnement Vercel, puis redéployer.
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "https://bengaly-secops.vercel.app";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": false,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const primaryFont = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
  code: monoFont,
};

const style = {
  theme: "dark", // theme is not necessary when using ThemeProvider (default)
  neutral: "slate", // sand | gray | slate
  brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100" // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 60,
    x: 50,
    y: 0,
    width: 100,
    height: 60,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const display = {
  location: true,
  time: true,
  themeSwitcher: true
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// Boutique Chariow : liens utilisés par l'encart en fin d'article et le lien « Boutique ».
// Pour associer un article à un produit, ajouter `product: <clé>` dans son en-tête MDX.
const shop = {
  url: "https://experit-mali.mychariow.shop",
  products: {
    mikrotik: {
      url: "https://experit-mali.mychariow.shop/prd_js488x",
      fr: {
        title: "Pack Expert : Haute Disponibilité & Sécurité MikroTik",
        text: "Le guide, le script de configuration et la checklist de maintenance de l'architecture Starlink + fibre décrite ici, prêts à déployer.",
        cta: "Voir le pack",
      },
      en: {
        title: "Expert Pack: MikroTik High Availability & Security",
        text: "The guide, configuration script and maintenance checklist for the Starlink + fiber architecture described here, ready to deploy.",
        cta: "See the pack",
      },
    },
    nextcloud: {
      url: "https://experit-mali.mychariow.shop/installation-nextcloud",
      fr: {
        title: "Installation & sécurisation de Nextcloud",
        text: "Votre propre cloud de fichiers, installé, sécurisé et documenté, sur votre serveur ou dans le cloud. Formation de l'équipe incluse.",
        cta: "Voir le service",
      },
      en: {
        title: "Nextcloud installation & hardening",
        text: "Your own file cloud, installed, secured and documented, on your server or in the cloud. Team training included.",
        cta: "See the service",
      },
    },
  },
};

export { shop, routes, protectedRoutes, effects, style, display, mailchimp, baseURL, font };
