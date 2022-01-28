import { createRouter, createWebHistory } from 'vue-router';

import productRoutes from './Product';
import shoppingCartRoutes from './ShoppingCart';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...productRoutes,
        ...shoppingCartRoutes,
    ],
});

export default router;