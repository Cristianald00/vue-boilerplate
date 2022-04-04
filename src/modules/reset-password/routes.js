export default [
    {
        path: '/products',
        name: 'products',
        component: () =>
            import(/* webpackChunkName: "products" */ './components/ProductsModule.vue')
    }
]
