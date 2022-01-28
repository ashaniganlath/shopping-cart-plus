export default [
    {
        path: '/',
        name: 'product-index',
        component: () => import('../components/products/ProductIndex.vue'),
    },
    {
        path: '/product/:productId',
        name: 'product-details',
        component: () => import('../components/products/ProductDetails.vue'),
        props: true,
    },
];