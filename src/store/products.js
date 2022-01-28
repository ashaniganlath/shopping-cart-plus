import ProductService from "../services/ProductService";
import {comment} from "postcss";

const productStore = {
    state: () =>  ({
        activeProduct: {},
        activeProductLoading: true,
        products: [],
        productsLoading: true,
    }),
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },

        setActiveProduct(state, product) {
            state.activeProduct = product;
        },

        setActiveProductLoading(state, loading) {
            state.activeProductLoading = loading;
        },

        setProductsLoading(state, loading) {
            state.productsLoading = loading;
        },
    },
    actions: {
        async fetchAllProducts({commit}) {
            await ProductService.fetchAll()
                .then(response => {
                    commit('setProducts', response.data)
                    commit('setProductsLoading', false)
                });
        },

        async fetchProduct({commit}, productId) {
            await ProductService.fetch(productId)
                .then(response => {
                    commit('setActiveProduct', response.data);
                    commit('setActiveProductLoading', false);
                });
        },

        unAssignActiveProduct({commit}) {
            commit('setActiveProductLoading', true);
            commit('setActiveProduct', {});
        }
    }
}

export default productStore;