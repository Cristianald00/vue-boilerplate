<template>
    <div class="products">
        <div class="products-head">
            <div class="products-head-background"></div>
            <div class="products-head-background2"></div>
            <h2>Our Coffees</h2>
        </div>
        
        <div class="products-body">
            
            <div class="products-body-list">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            
        </div>
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
    .products{
        background: #f4f4f4;
    }
    
    .products-head{
        padding: 0px;
        margin: 0px;
    }
    .products-head-background{
        display: block;
        width: 100%;
        /* height: 15vh; */
        /* background: #222; */
    }
    .products-head-background2{
        display: block;
        width: 100%;
        height: 5vh;
        /* background: var(--mainYellowBrown); */
    }
    
    .products-head h2{
        font-size: 3em;
        margin-top: 4em;
        margin-bottom: 1em;
        color: var(--mainBlack);
        letter-spacing: 1px;
    }
    
    .products-body{
        /* background: var(--mainWhite); */
        /* background: url('https://d2mq91o692rj7w.cloudfront.net/flatshots/2017-main/L9151-01_m.jpg'); */
    }
    .products-body-list{
        display: block;
        margin: auto;
        text-align: center;
        max-width: 90%;
    }
    .products-body-list .product-card{
        margin: 3em 1em;
    }
</style>
