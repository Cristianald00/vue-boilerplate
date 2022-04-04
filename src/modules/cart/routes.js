export default [
    {
        path: '/cart',
        name: 'cart',
        component: () =>
            import(/* webpackChunkName: "products" */ './components/CartModule.vue')
    }
]
