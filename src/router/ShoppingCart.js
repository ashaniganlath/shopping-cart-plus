export default [
    {
        path: '/cart',
        name: 'shopping-cart',
        component: () => import('../components/shoppingCart/ShoppingCartIndex.vue'),
        props: true,
    }
];