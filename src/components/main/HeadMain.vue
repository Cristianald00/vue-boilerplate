<template v-slot:activator="{ on }">
    <div class="head">
        <div class="head-section">
            
            <div class="head-search">
                <router-link to="/cart" :class="headMenuItemClass"><i class="fa-solid fa-magnifying-glass"></i></router-link>
                <a href="#" style="padding: 0em 4em;"></a>
            </div>
            
            <div :class="headLogoClass">
                <img src="https://cdn.shopify.com/s/files/1/0623/0609/1239/files/LOGO_CON_FONDO_9f5de555-cdc8-4617-87d8-e6190904cd8e_80x@2x.png?v=1645216246" alt="">
            </div>
            
            <div class="head-menu">
                <router-link to="/cart" :class="headMenuItemClass"><i class="fa-solid fa-cart-shopping"></i></router-link>
                
                <v-btn text v-if="isTokenSet" @click="userLogout" class="hidden-sm-and-down btnLogout">
                <v-icon left>mdi-exit-to-app</v-icon>
                    {{ $t('menuItems.LOGOUT') }}
                </v-btn>
                <LocaleChangerMain/>
            </div>
            
        </div>
    
        <div class="navbar">
            <div :class="navBarClass">
                <router-link to="/" >HOME</router-link>
                <router-link to="/products">SHOP COFFEE &nbsp;<i class="fa-solid fa-angle-down"></i></router-link>
                <router-link to="/home">SHOP BREW &nbsp;<i class="fa-solid fa-angle-down"></i></router-link>
                <router-link to="/about">ABOUT</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleChangerMain from '@/components/main/LocaleChangerMain'
import ResizeText from 'vue-resize-text'

export default {
    name: 'Toolbar',
    // router: Router,
    metaInfo() {
        return {
            title: this.$store.getters.appTitle,
            htmlAttrs: {
                lang: this.$i18n.locale
            },
            meta: [
                { name: 'msapplication-TileColor', content: '#ffc40d' },
                { name: 'theme-color', content: '#ffffff' },
                {
                    name: 'apple-mobile-web-app-title',
                    content: this.$store.getters.appTitle
                },
                {
                    name: 'application-name',
                    content: this.$store.getters.appTitle
                }
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
                { rel: 'manifest', href: '/site.webmanifest' },
                {
                    rel: 'mask-icon',
                    color: '#5bbad5',
                    href: '/safari-pinned-tab.svg'
                },
                { rel: 'favicon', href: '/favicon.ico' }
            ]
        }
    },
    components: {
        LocaleChangerMain
    },
    directives: {
        ResizeText
    },
    data() {
        return {
            isDark: false,
            sidebar: false,
            
            // Class Variables
            headLogoClass: 'head-logo',
            headMenuItemClass: 'head-menu-item',
            navBarClass: 'navbar-items',
        }
    },
    computed: {
        ...mapGetters(['appTitle', 'isTokenSet', 'user']),
        admin() {
            return this.user !== null ? this.user.role === 'admin' : false
        },
        adminItems() {
            return [
                {
                    title: this.$t('adminItems.CITIES'),
                    link: 'admin-cities',
                    icon: 'mdi-city',
                    class: 'btnAdminCities'
                },
                {
                    title: this.$t('adminItems.USERS'),
                    link: 'admin-users',
                    icon: 'mdi-account-supervisor',
                    class: 'btnAdminUsers'
                }
            ]
        },
        menuItems() {
            if (this.isTokenSet) {
                return [
                    {
                        title: this.$t('menuItems.HOME'),
                        link: 'home',
                        icon: 'mdi-home',
                        class: 'btnHome'
                    },
                    {
                        title: this.$t('menuItems.ABOUT'),
                        link: 'about',
                        icon: 'mdi-help-circle-outline',
                        class: 'btnAbout'
                    },
                    {
                        title: this.$t('menuItems.MY_PROFILE'),
                        link: 'profile',
                        icon: 'mdi-face',
                        class: 'btnProfile'
                    },
                    {
                        title: this.$t('menuItems.PRODUCTS'),
                        link: 'products',
                        icon: 'mdi-face',
                        class: 'btnProfile'
                    }
                ]
            }
            return [
                {
                    title: this.$t('menuItems.HOME'),
                    link: 'landing',
                    icon: 'mdi-home'
                },
                {
                    title: this.$t('menuItems.ABOUT'),
                    link: 'about',
                    icon: 'mdi-help-circle-outline',
                    class: 'btnAbout'
                },
                {
                    title: this.$t('menuItems.LOGIN'),
                    link: 'login',
                    icon: 'mdi-lock',
                    class: 'btnLogin'
                },
                {
                    title: this.$t('menuItems.SIGNUP'),
                    link: 'signup',
                    icon: 'mdi-plus-circle-outline',
                    class: 'btnLogin'
                },
                {
                    title: this.$t('menuItems.PRODUCTS'),
                    link: 'products',
                    icon: 'mdi-plus-circle-outline',
                    class: 'btnLogin'
                }
            ]
        }
    },
    methods: {
        userLogout() {
            this.$store.dispatch('userLogout')
        },
    },
    watch: {
        // isDark() {
        //     this.$vuetify.theme.dark = this.isDark
        //     localStorage.setItem('dark', this.isDark)
        // },
        $route() {
            let routName = this.$route.name;
            this.headLogoClass = routName == 'landing' ? 'head-logo': 'head-logo-small';
            this.headMenuItemClass = routName == 'landing' ? 'head-menu-item': 'head-menu-item-dark';
            this.navBarClass = routName == 'landing' ? 'navbar-items': 'navbar-items-dark';
        }
    },
    created() {
        const dark = localStorage.getItem('dark')
        this.isDark = dark ? JSON.parse(dark) : false
    }
}
</script>

<style scoped>
.head {
    position: fixed;
    z-index: 100;
    display: block;
    width: 100%;
    padding: 1em 2em;
}

.head-section{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1em;
    vertical-align: top;
}
.head-search{
    display: inline-block;
    vertical-align: top;
    color: white;
}
.head-logo{
    display: inline-block;
    vertical-align: top;
    color: white;
}
.head-logo img{
    max-width: 100px;
}
.head-logo-small img{
    max-width: 70px;
}

.head-menu{
    display: inline-block;
    vertical-align: top;
}
.head-menu-item{
    color: var(--mainWhite);;
}
.head-menu-item-dark{
    color: var(--mainBlack);
}

.navbar{
    display: block;
    width: 100%;
    text-align: center;
}
.navbar-items a, .navbar-items-dark a {
    display: inline-block;
    padding: 0.5em 1.2em;
    font-size: 0.9em;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    letter-spacing: 1px;
}
.navbar-items a{
    color: var(--mainWhite);
}
.navbar-items-dark a{
    color: var(--mainBlack);
}



/* Dropdown Button */
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}

</style>
