<script>
import ShoppingCartSummary from './ShoppingCartSummary.vue';
import ShoppingCartItem from './ShoppingCartItem.vue';
import {mapState} from "vuex";

export default {
    name: "ShoppingCartIndex",
    components: {
        ShoppingCartItem,
        ShoppingCartSummary,
    },
    computed: {
        ...mapState({
            shoppingCartItems: state => state.shoppingCart.shoppingCartItems,
        }),
    }
}
</script>

<template>
    <div class="grid grid-cols-3 gap-4 m-20">
        <div class="col-span-2 bg-white p-5">
            <table class="w-full table-fixed text-gray-500 text-sm">
                <tbody class="divide-y">
                    <shopping-cart-item :cart-item="cartItem" v-for="cartItem in shoppingCartItems" />
                </tbody>
            </table>
        </div>

        <shopping-cart-summary></shopping-cart-summary>
    </div>
</template>

