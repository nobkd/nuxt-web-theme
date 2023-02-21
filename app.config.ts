
export default defineAppConfig({
    nuxtWebTheme: {
        name: 'Nuxt Web Theme'
    }
})

declare module '@nuxt/schema' {
    interface AppConfigInput {
        nuxtWebTheme?: {
            /** Project name */
            name?: string
        }
    }
}