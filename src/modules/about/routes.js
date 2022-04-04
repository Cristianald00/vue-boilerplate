export default [
    {
        path: '/about',
        name: 'about',
        component: () =>
            import(/* webpackChunkName: "products" */ './components/AboutModule.vue')
    }
]
