const shoppingCartStore = {
    state: () => ({
        shoppingCartItems: [],
    }),
    mutations: {
        addProduct(state, { product, quantity }) {
            product["quantity"] = quantity;

            state.shoppingCartItems.push(product);
        },
        removeProduct(state, productId) {
            state.shoppingCartItems = state.shoppingCartItems.filter(
                (cartProduct) => cartProduct.id !== productId
            );
        },
    },
    getters: {
        productQuantityInShoppingCart: (state, getters) => (productId) => {
            const item = getters.productInShoppingCart(parseInt(productId));

            return item ? item.quantity : 0;
        },
        productInShoppingCart: (state) => (productId) => {
            return state.shoppingCartItems.find(
                (cartProduct) => cartProduct.id === productId
            );
        },
        isProductInShoppingCart: (state) => (productId) => {
            return state.shoppingCartItems.some(
                (cartProduct) => cartProduct.id === productId
            );
        },
        totalNumberOfItemsInCart: (state) => {
            return state.shoppingCartItems.reduce((accumulator, item) => {
                return accumulator + item.quantity;
            }, 0);
        },
        subTotal: (state) => {
            return state.shoppingCartItems.reduce((accumulator, item) => {
                return accumulator + item.quantity * item.price;
            }, 0);
        },
    },
    actions: {
        addProductToCart({ commit }, { product, quantity }) {
            return commit("addProduct", {
                product: product,
                quantity: quantity,
            });
        },
        incrementProductQuantity({ getters }, { productId, quantity }) {
            const cartProduct = getters.productInShoppingCart(productId);
            cartProduct.quantity += quantity;
        },
        incrementProductQuantityInCart(
            { getters, dispatch },
            { product, quantity }
        ) {
            if (getters.isProductInShoppingCart(product.id)) {
                dispatch("incrementProductQuantity", {
                    productId: product.id,
                    quantity: quantity,
                });
                return;
            }

            dispatch("addProductToCart", {
                product: product,
                quantity: quantity,
            });
        },
        removeProductFromShoppingCart({ commit }, productId) {
            return commit("removeProduct", productId);
        },
        updateProductQuantity({ getters }, { productId, quantity }) {
            const cartProduct = getters.productInShoppingCart(productId);
            cartProduct.quantity = quantity;
        },
        updateProductQuantityInCart(
            { getters, dispatch },
            { product, quantity }
        ) {
            if (getters.isProductInShoppingCart(product.id)) {
                return dispatch("updateProductQuantity", {
                    productId: product.id,
                    quantity: quantity,
                });
            }

            dispatch("addProductToCart", {
                product: product,
                quantity: quantity,
            });
        },
    },
};

export default shoppingCartStore;
