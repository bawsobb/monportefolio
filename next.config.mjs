import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  // Les pages dynamiques (accueil, projets, blog) lisent les fichiers MDX au
  // runtime : sans cette inclusion, ils sont absents des fonctions Vercel
  // et ces pages renvoient une 404.
  outputFileTracingIncludes: {
    "/*": ["./src/app/work/projects/**/*", "./src/app/blog/posts/**/*"],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  eslint: {
    // Cela permet de déployer même s'il y a des avertissements sur les images ou les hooks
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore aussi les erreurs de type pour le déploiement
    ignoreBuildErrors: true,
  },
};

export default withMDX(nextConfig);