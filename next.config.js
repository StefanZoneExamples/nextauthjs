/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    images: {
        // Cache der Avatare aus dem Google CDN.
        // Vermeidet Probleme bezüglich Rate Limiting.
        domains: ['lh3.googleusercontent.com']
    },
    serverRuntimeConfig: {
        // Nutzer, die sich über OAuth 2.0 anmelden dürfen.
        authorizedUsers: []
    },
    async redirects() {
        // Weiterleitungen zu externen Seiten.
        return [
            {
                source: '/github',
                destination: 'https://github.com/StefanZoneExamples/nextauthjs.git',
                permanent: false
            }
        ];
    }
};
