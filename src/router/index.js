import { createRouter, createWebHistory } from 'vue-router';

import productRoutes from './product';
import shoppingCartRoutes from './shoppingCart';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...productRoutes,
        ...shoppingCartRoutes,
    ],
});

export default router;