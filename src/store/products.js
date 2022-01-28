import ProductService from "../services/ProductService";

const productStore = {
    state: () =>  ({
        products: [],
        activeProduct: {},
    }),
    mutations: {
        setProducts({state}, products) {
            state.products = products;
        },

        setActiveProduct({state}, product) {
            state.activeProduct = product;
        }
    },
    actions: {
        async fetchAllProducts({commit}) {
            await ProductService.fetchAll()
                .then(response => commit('setProducts', response));
        },

        async fetchProduct({commit}, productId) {
            await ProductService.fetch(productId)
                .then(response => commit('setActiveProduct', response));
        }
    }
}

export default productStore;