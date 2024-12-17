import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/, // Babel loader for JS/TS files
      use: {
        loader: "babel-loader",
        options: {
          presets: ["next/babel"], // This uses Next.js Babel preset
        },
      },
    });

    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/videos/",
        },
      },
    });

    return config;
  },
};

export default nextConfig;