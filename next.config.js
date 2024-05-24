/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'literal-app-assets.ams3.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/**/**/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.literal.club',
                port: '',
                pathname: '/**/**/**',
            },
        ],
    },
}

module.exports = nextConfig
