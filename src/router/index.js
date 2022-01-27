import { createRouter, createWebHistory } from 'vue-router';

const index = [
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
    {
        path: '/cart',
        name: 'shopping-cart',
        component: () => import('../components/shoppingCart/ShoppingCartIndex.vue'),
        props: true,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: index,
});

export default router;