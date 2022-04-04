<template>
    <div class="product-card">
        <div class="product-card-head">
            <img src="https://cdn.shopify.com/s/files/1/0623/0609/1239/products/CoffeeJosePosada.webp?v=1646792536" alt="">
        </div>
        <div class="product-card-body">
            <span>Coffee Bag - Hector Rivas</span>
            <span class="number-label">$40.00</span><span> CAD</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    metaInfo() {
        return {}
    },
    data() {
        return {}
    },
}
</script>

<style scoped>
    .product-card{
        display: inline-block;
        width: 400px;
        height: 380px;
        
        background: white;
        border-radius: 0.5em;
    }
    .product-card-head{
        display: block;
        width: 100%;
        height: 280px;
        max-height: 400px;
        overflow-y: hidden;
        border-radius:  0.3em 0.3em 0px  0px;
    }
    .product-card-head img{
        display: block;
        min-width: 100%;
        width: 100%;
    }
    .product-card-body{
        display: block;
        width: 100%;
        height: 100px;
        padding: 1em;
        text-align: left;
        border-radius: 0px 0px 0.3em 0.3em;
    }
    .product-card-body span:nth-child(1){
        display: block;
        font-weight: 500;
    }
    .product-card-body span:nth-child(2){
        display: inline-block;
        font-size: 1.2em;
    }
    .product-card-body span:nth-child(3){
        font-size: 1em;
    }

    .number-label{
        font-family: 'Crimson Pro', serif;
        letter-spacing: 2px;
    }
</style>
