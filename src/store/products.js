import ProductService from "../services/ProductService";
import {
    SET_ACTIVE_PRODUCT,
    SET_ACTIVE_PRODUCT_LOADING,
    SET_PRODUCTS,
    SET_PRODUCTS_IN_CATEGORY,
    SET_PRODUCTS_IN_CATEGORY_LOADING,
    SET_PRODUCTS_LOADING
} from "./mutationTypes";

const productStore = {
    state: () =>  ({
        activeProduct: {},
        activeProductLoading: true,
        products: [],
        productsLoading: true,
        productsInCategory: [],
        productsInCategoryInLoading: true,
    }),
    mutations: {
        [SET_PRODUCTS](state, products) {
            state.products = products;
        },

        [SET_PRODUCTS_IN_CATEGORY](state, products) {
            state.productsInCategory = products;
        },

        [SET_ACTIVE_PRODUCT](state, product) {
            state.activeProduct = product;
        },

        [SET_ACTIVE_PRODUCT_LOADING](state, loading) {
            state.activeProductLoading = loading;
        },

        [SET_PRODUCTS_LOADING](state, loading) {
            state.productsLoading = loading;
        },

        [SET_PRODUCTS_IN_CATEGORY_LOADING](state, loading) {
            state.productsInCategoryInLoading = loading;
        },
    },
    actions: {
        async fetchAllProducts({commit}) {
            await ProductService.fetchAll()
                .then(response => {
                    commit(SET_PRODUCTS, response.data)
                    commit(SET_PRODUCTS_LOADING, false)
                });
        },

        async fetchProduct({commit, dispatch}, productId) {
            await ProductService.fetch(productId)
                .then(response => {
                    commit(SET_ACTIVE_PRODUCT, response.data);
                    commit(SET_ACTIVE_PRODUCT_LOADING, false);

                    return dispatch('fetchProductsInCategory', response.data.category);
                });
        },

        async fetchProductsInCategory({commit}, category) {
            await ProductService.fetchInCategory(category)
                .then(response => {
                    commit(SET_PRODUCTS_IN_CATEGORY, response.data);
                    commit(SET_PRODUCTS_IN_CATEGORY_LOADING, false);
                });
        },

        unAssignActiveProduct({commit}) {
            commit(SET_ACTIVE_PRODUCT_LOADING, true);
            commit(SET_ACTIVE_PRODUCT, {});
        }
    }
}

export default productStore;