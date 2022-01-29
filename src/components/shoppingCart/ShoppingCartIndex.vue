<script>
import ShoppingCartSummary from "./ShoppingCartSummary.vue";
import ShoppingCartItem from "./ShoppingCartItem.vue";
import { mapState } from "vuex";

export default {
    name: "ShoppingCartIndex",
    components: {
        ShoppingCartItem,
        ShoppingCartSummary,
    },
    computed: {
        ...mapState({
            shoppingCartItems: (state) => state.shoppingCart.shoppingCartItems,
        }),
    },
};
</script>

<template>
    <div class="grid grid-cols-3 gap-4 m-20">
        <div class="col-span-2 bg-white p-5">
            <table
                v-if="shoppingCartItems.length"
                class="w-full table-fixed text-gray-500 text-sm"
            >
                <tbody class="divide-y">
                    <shopping-cart-item
                        v-for="cartItem in shoppingCartItems"
                        :key="cartItem.id"
                        :cart-item="cartItem"
                    />
                </tbody>
            </table>
            <div v-else class="text-center text-gray-400 text-sm">
                No products in the cart.
                <router-link
                    :to="{ name: 'product-index' }"
                    class="text-cyan-400"
                    >Shop now!</router-link
                >
            </div>
        </div>

        <shopping-cart-summary></shopping-cart-summary>
    </div>
</template>
