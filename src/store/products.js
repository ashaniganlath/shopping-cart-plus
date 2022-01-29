import ProductService from "../services/ProductService";

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
        setProducts(state, products) {
            state.products = products;
        },

        setProductsInCategory(state, products) {
            state.productsInCategory = products;
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

        setProductsInCategoryLoading(state, loading) {
            state.productsInCategoryInLoading = loading;
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

        async fetchProduct({commit, dispatch}, productId) {
            await ProductService.fetch(productId)
                .then(response => {
                    commit('setActiveProduct', response.data);
                    commit('setActiveProductLoading', false);

                    return dispatch('fetchProductsInCategory', response.data.category);
                });
        },

        async fetchProductsInCategory({commit}, category) {
            await ProductService.fetchInCategory(category)
                .then(response => {
                    commit('setProductsInCategory', response.data);
                    commit('setProductsInCategoryLoading', false);
                });
        },

        unAssignActiveProduct({commit}) {
            commit('setActiveProductLoading', true);
            commit('setActiveProduct', {});
        }
    }
}

export default productStore;