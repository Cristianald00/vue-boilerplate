<template>
    <v-menu v-model="showMenu" offset-y>
        <template v-slot:activator="{ on }">
            <v-btn :class="languageButtonClass" v-on="on" text>
                <i class="fa-solid fa-earth-americas"></i>
                &nbsp;{{ displayLocale }}
            </v-btn>
        </template>
        <v-list>
            <v-list-item
                active-class="white--text"
                v-for="(item, i) in langs"
                :value="item.lang"
                @click="switchLocale(item.lang)"
                :class="[item.class]"
            >
                <country-flag :country="item.flag" size="small" />
                <v-list-item-title class="ml-3">{{
                    item.lang.toUpperCase()
                }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
import CountryFlag from 'vue-country-flag'

export default {
    data() {
        return {
            showMenu: false,
            languageButtonClass: 'btnLocaleActivation language-button',
            langs: [
                {
                    lang: 'en',
                    flag: 'gb',
                    class: 'btnEN'
                },
                {
                    lang: 'es',
                    flag: 'es',
                    class: 'btnES'
                },
                {
                    lang: 'fr',
                    flag: 'fr',
                    class: 'btnFR'
                },
                {
                    lang: 'cn',
                    flag: 'cn',
                    class: 'btnCN'
                }
            ]
        }
    },
    components: {
        CountryFlag
    },
    methods: {
        switchLocale(lang) {
            this.$store.dispatch('setLocale', lang)
        }
    },
    computed: {
        displayLocale() {
            return this.$i18n.locale
        }
    },
    watch: {
        $route() {
            let routName = this.$route.name;
            this.languageButtonClass = routName == 'landing' ? 'btnLocaleActivation language-button': 'btnLocaleActivation language-button language-button-dark';
        }
    },
}
</script>

<style>
.flag {
    width: 118px !important;
}

.v-list-item {
    min-width: 185px !important;
}

.btnLocaleActivation {
    color: white;
}

.language-button span {
    color: var(--mainWhite);
    font-size: 1.3em;
}
.language-button-dark span {
    color: var(--mainBlack);
    font-size: 1.3em;
}
</style>
