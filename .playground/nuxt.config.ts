// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    extends: '..',

    typescript: {
        includeWorkspace: true,
    },

    app: {
        head: {
            titleTemplate: '%s | Website Name',
        },
    },
});
