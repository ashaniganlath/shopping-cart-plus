<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "ProductDetails",
    props: {
        productId: {
            required: true,
        }
    },
    computed:{
        ...mapState({
            activeProduct: state => state.products.activeProduct,
            activeProductLoading: state => state.products.activeProductLoading,
        })
    },
    mounted() {
        this.fetchProduct(this.productId);
    },
    methods: {
        ...mapActions([
            'fetchProduct',
            'unAssignActiveProduct',
        ]),
    },
    unmounted() {
        this.unAssignActiveProduct();
    }
}
</script>

<template>
    <div class="grid grid-cols-2 gap-4 m-20 p-5 w-3/6 bg-white">
        <loading :active="activeProductLoading" loader="bars"/>

        <div><img :src="activeProduct.image" class="h-72" alt=""></div>
        <div class="flex flex-col gap-3">
            <span class="text-2xl text-gray-600">{{ activeProduct.title }}</span>
            <span class="text-xs text-gray-400">{{ activeProduct.description }}</span>
            <span class="text-xs text-gray-400">Category: {{ activeProduct.category }}</span>
            <span class="text-base text-cyan-400">USD: {{ activeProduct.price }}</span>
            <span class="text-sm text-gray-500 w-24"><vue-number-input size="small" :min="1" controls></vue-number-input></span>
            <span><button class="bg-cyan-400 text-xs text-white p-2 mt-5 uppercase">Add to cart</button></span>
        </div>
    </div>
</template>