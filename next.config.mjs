/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*/",
        has: [
          { type: "query", key: "path", value: "(.*)" }
        ],
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
