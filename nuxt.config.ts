import { createResolver } from '@nuxt/kit';
const { resolve } = createResolver(import.meta.url);

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    extends: ['@nuxt-themes/typography', '@nuxt-themes/elements'],

    modules: ['@nuxt/content'],

    ssr: true,

    css: [
        resolve('./assets/reset.css'),
        resolve('./assets/vars.sass'),
        resolve('./assets/default.sass'),
    ],

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

    content: {
        documentDriven: true,
        highlight: true,
    },

    typescript: {
        shim: false,
        strict: true,
    },
});
