// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Web Note',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'Помогаем вам пподелится знаниями с миром' }
            ],
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/style/main.scss" as *;'
                }
            }
        }
    }
})
