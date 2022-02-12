import { createStore } from "vuex";
import productStore from "./products";
import shoppingCartStore from "./shoppingCart";

const store = createStore({
    modules: {
        products: productStore,
        shoppingCart: shoppingCartStore,
    },
});

export default store;
