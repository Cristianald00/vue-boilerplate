<template>
    <v-app>
        <HeadMain />
        <v-main class="text-center">
            <loading />
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </v-main>
        <Footer />
    </v-app>
</template>

<script>
import HeadMain from '@/components/main/HeadMain.vue'
import Loading from '@/components/main/LoadingMain.vue'
import Footer from '@/components/main/LoadingMain.vue'

export default {
    name: 'App',
    metaInfo() {
        return {
            title: this.appTitle,
            htmlAttrs: {
                lang: this.$i18n.locale
            },
            meta: [
                { name: 'msapplication-TileColor', content: '#ffc40d' },
                { name: 'theme-color', content: '#ffffff' },
                {
                    name: 'apple-mobile-web-app-title',
                    content: this.appTitle
                },
                { name: 'application-name', content: this.appTitle }
            ],
            link: [
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/apple-touch-icon.png'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png'
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png'
                },
                {
                    rel: 'manifest',
                    href: '/site.webmanifest'
                },
                {
                    rel: 'mask-icon',
                    color: '#5bbad5',
                    href: '/safari-pinned-tab.svg'
                },
                {
                    rel: 'favicon',
                    href: '/favicon.ico'
                }
            ]
        }
    },
    components: {
        HeadMain,
        Loading,
        Footer
    },
    computed: {
        appTitle() {
            return this.$store.getters.appTitle
        }
    }
}
</script>

<style>
.v-app * {
    display: block;
    width: 100%;
    background: transparent;
    padding: 0px;
    margin: 0px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
