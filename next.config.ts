const config = {
  // experimental: {
  //   dynamicIO: true,
  // },
  eslint: {
    // This will ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  // typescript: {
  //   // This will ignore TypeScript errors during builds
  //   ignoreBuildErrors: true,
  // },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
}

export default config
