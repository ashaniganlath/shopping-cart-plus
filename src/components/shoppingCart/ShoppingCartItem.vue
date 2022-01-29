<script>
import {mapActions} from "vuex";

export default {
    name: "ShoppingCartItem",
    props: {
        cartItem: {
            required: true,
            type: Object,
        }
    },
    methods: {
        ...mapActions({
            updateProductQuantityInCart: 'updateProductQuantityInCart',
        }),
        updateQuantity(quantity) {
            this.updateProductQuantityInCart({
                product: this.cartItem,
                quantity: quantity,
            })
        }
    }
}
</script>

<template>
    <tr>
        <td class="w-28"><img :src="cartItem.image" class="h-20" alt=""></td>
        <td class="flex flex-col w-48 pt-3">
            <span class="text-gray-600 text-base">
                <router-link :to="{ name: 'product-details', params: { productId: cartItem.id }}">
                    {{ cartItem.title }}
                </router-link>
            </span>
            <span class="text-gray-400 text-xs">{{ cartItem.category }}</span>
        </td>
        <td class="text-base text-cyan-400 w-24">USD {{ cartItem.price }}</td>
        <td class="text-sm text-gray-500 w-24">
            <vue-number-input size="small" :min="1" :modelValue="cartItem.quantity" controls @update:model-value="updateQuantity"></vue-number-input>
        </td>
        <td class="w-10 text-gray-500 text-right"><i class="material-icons text-lg">delete</i></td>
    </tr>
</template>