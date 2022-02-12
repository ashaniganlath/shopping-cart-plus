export default [
    {
        path: '/',
        name: 'product-index',
        component: () => import('../components/products/ProductIndex.vue'),
    },
    {
        path: '/products/:productId',
        name: 'product-details',
        component: () => import('../components/products/ProductDetails.vue'),
        props: true,
    },
];