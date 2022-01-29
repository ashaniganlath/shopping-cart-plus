<script>
import { mapActions } from "vuex";
import mixins from "../../mixins";

export default {
    name: "ShoppingCartItem",
    mixins: [mixins],
    props: {
        cartItem: {
            required: true,
            type: Object,
        },
    },
    methods: {
        ...mapActions({
            updateProductQuantityInCart: "updateProductQuantityInCart",
            removeProductFromShoppingCart: "removeProductFromShoppingCart",
        }),
        updateQuantity(quantity) {
            this.updateProductQuantityInCart({
                product: this.cartItem,
                quantity: quantity,
            });
        },
    },
};
</script>

<template>
    <tr class="h-20">
        <td class="w-28"><img :src="cartItem.image" class="h-16" alt="" /></td>
        <td class="flex flex-col w-72 pt-3">
            <span class="text-gray-600 text-sm">
                <router-link
                    :to="{
                        name: 'product-details',
                        params: { productId: cartItem.id },
                    }"
                >
                    {{ cartItem.title }}
                </router-link>
            </span>
            <span class="text-gray-400 text-xs">{{ cartItem.category }}</span>
        </td>
        <td class="text-sm text-right pr-5 text-cyan-400 w-28">
            {{ convertToUsd(cartItem.price) }}
        </td>
        <td class="text-sm text-gray-500 w-24">
            <vue-number-input
                size="small"
                :min="1"
                :model-value="cartItem.quantity"
                controls
                @update:model-value="updateQuantity"
            ></vue-number-input>
        </td>
        <td class="w-10 text-gray-500 text-right">
            <i
                class="material-icons text-lg cursor-pointer"
                @click="removeProductFromShoppingCart(cartItem.id)"
                >delete</i
            >
        </td>
    </tr>
</template>
