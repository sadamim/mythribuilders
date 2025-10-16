/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    output: 'export',
    trailingSlash: true,
    //basePath: '',
    //assetPrefix: '',
};

export default nextConfig;
