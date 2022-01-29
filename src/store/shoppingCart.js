const shoppingCartStore = {
    state: () =>  ({
        shoppingCartItems: [],
    }),
    mutations: {
        addProduct(state, { product, quantity }) {
            product['quantity'] = quantity;

            state.shoppingCartItems.push(product);
        }
    },
    getters: {
        productInShoppingCart: state => productId => {
            return state.shoppingCartItems.find(cartProduct => cartProduct.id === productId);
        },
        quantityInShoppingCart: (state, getters) => productId => {
            const item = getters.productInShoppingCart(parseInt(productId));

            return item ? item.quantity : 0;
        }
    },
    actions: {
        addProductToCart({commit}, {product, quantity}) {
            return commit('addProduct', { product: product, quantity: quantity });
        },
        incrementProductQuantity({getters}, {productId, quantity}){
            const cartProduct = getters.productInShoppingCart(productId);
            cartProduct.quantity += quantity;
        },
        incrementProductQuantityInCart({state, dispatch}, {product, quantity}) {
            if (state.shoppingCartItems.some(cartProduct => cartProduct.id === product.id)) {
                dispatch('incrementProductQuantity', {
                    productId: product.id,
                    quantity: quantity
                });
                return;
            }

            dispatch('addProductToCart', {
                product: product,
                quantity: quantity,
            });
        },
        updateProductQuantity({getters}, {productId, quantity}) {
            const cartProduct = getters.productInShoppingCart(productId);
            cartProduct.quantity = quantity;
        },
        updateProductQuantityInCart({state, dispatch}, {product, quantity}) {
            if (state.shoppingCartItems.some(cartProduct => cartProduct.id === product.id)) {
                return dispatch('updateProductQuantity', {
                    productId: product.id,
                    quantity: quantity,
                })
            }

            dispatch('addProductToCart', {
                product: product,
                quantity: quantity,
            });
        }
    }
}

export default shoppingCartStore;