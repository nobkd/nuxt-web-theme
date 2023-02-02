// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    extends: '@nuxt-themes/typography',

    modules: ['@nuxt/content'],

    telemetry: false,
    ssr: true,

    app: {
        head: {
            charset: 'utf-8',
            link: [
                {
                    rel: 'shortcut icon preload',
                    href: '/favicon.svg',
                    type: 'image/svg+xml',
                },
            ],
        },
    },

    css: ['@/assets/vars.sass', '@/assets/default.sass'],

    content: {
        documentDriven: true,
        highlight: false,
    },

    typescript: {
        shim: false,
        strict: true,
    },
});
