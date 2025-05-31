import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Desactiva ESLint durante el build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!  
    // Permite builds de producción aunque hayan errores de TypeScript
    // No recomendado para producción real
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
