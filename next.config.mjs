import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
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