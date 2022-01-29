<script>
import { mapActions } from "vuex";
import mixins from "../../mixins.js";

export default {
    name: "ProductItem",
    mixins: [mixins],
    props: {
        product: {
            required: true,
            type: Object,
        },
        showAddToCart: {
            type: Boolean,
            default: true,
        },
    },
    methods: {
        ...mapActions({
            incrementProductQuantityInCart: "incrementProductQuantityInCart",
        }),
        addProductToShoppingCart() {
            this.incrementProductQuantityInCart({
                product: this.product,
                quantity: 1,
            });
        },
    },
};
</script>

<template>
    <div
        class="bg-white h-76 flex flex-col justify-between place-items-center p-3"
    >
        <div class="m-6 h-28">
            <img :src="product.image" class="h-24" alt="" />
        </div>
        <span class="text-sm text-gray-500 w-52 text-center">
            <router-link
                :to="{
                    name: 'product-details',
                    params: { productId: product.id },
                }"
            >
                {{ product.title }}
            </router-link>
        </span>
        <span class="text-sm text-cyan-400">{{
            convertToUsd(product.price)
        }}</span>
        <div v-if="showAddToCart" class="p-4 text-xs text-gray-500">
            <button
                class="border px-3 py-1 border-gray-300 hover:bg-cyan-400 hover:text-white uppercase"
                @click="addProductToShoppingCart"
            >
                Add to cart
            </button>
        </div>
    </div>
</template>
