<template>
    <div class="landing">
        
        <div class="landing-head">
            <div class="landing-head-background"></div>
            <div class="landing-head-background2"></div>
            
            <div class="landing-head-content">
                <h1 style="line-height: 1.1em;">
                    <span style="color: #cbbd9e; font-size: 1.8em; vertical-align: baseline;">Coffee</span>
                    <span style="vertical-align: bottom; vertical-align: bottom;"> is magical from</span><br>
                    <span style="vertical-align: top; vertical-align: top;">harvest to </span>
                    <span style="color: #cbbd9e; font-size: 1.2em; vertical-align: sub;">Cup</span>
                </h1>
                <!-- <div class="">
                    <h3>Colombian Coffee</h3>
                    <a href="#">Explore our varieties</a>
                </div> -->
            </div>
        </div>
        
        <div class="landing-secion1" style="margin-top: 40vh;">
            
            <div class="">
                <img src="/public/SebastianRamirezNoBack.png" alt="">
            </div>
            
            
        </div>
        
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </div>
</template>

<script>
    import ProductCard from '@/components/cards/ProductCard.vue'
    
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
            }
        },
        components: {
            ProductCard,
        },
        computed: {
            appTitle() {
                return this.$store.getters.appTitle
            }
        }
    }
</script>

<style scoped>
    .landing{
        background: var(--mainWhiteBackground);
    }

    .landing-head{
        position: relative;
        padding: 0px;
        margin: 0px;
    }
    .landing-head-background{
        display: block;
        width: 100%;
        height: 60vh;
        background: url("https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
        background-position: left;
        background-attachment: fixed;
        padding: 0px;
        margin: 0px;
    }
    .landing-head-background2{
        position: absolute;
        z-index: 9;
        top: 0px;
        display: block;
        width: 100%;
        height: 60vh;
        background: rgba(50, 48, 48, 0.7);
        padding: 0px;
        margin: 0px;
    }
    .landing-head-content{
        position: absolute;
        top: 30vh;
        z-index: 10;
        display: block;
        width: 100%;
        height: 30vh;
        text-align: left;
    }
    
    .landing-head-content h1{
        display: block;
        font-size: 3.2em;
        color: white;
        text-align: left;
        margin-left: 10%;
    }
    
    .landing-head-content div {
        position: absolute;
        bottom: 0vh;
        display: block;
        width: 100%;
        text-align: right;
    }
    .landing-head-content h3{
        display: inline-block;
        font-size: 2em;
        color: var(--mainGreen);
        text-align: right;
    }
    .landing-head-content a{
        display: inline-block;
        width: 200px;
        margin-left: auto;
        background: var(--mainGreen);
        padding: var(--buttonPadding);
        font-size: 1em;
        font-weight: bold;
        color: var(--mainWhite);
        text-decoration: none;
        text-align: center;
    }
    
    
    .landing-secion1{
        
    }
</style>
