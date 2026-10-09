/** Static export so the hero can be hosted anywhere (DO App Platform static site, Replit, etc.). */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
