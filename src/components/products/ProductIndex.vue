<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "ProductIndex",
    components: {
        ProductItem: defineAsyncComponent(() => import("./ProductItem.vue")),
    },
    computed: {
        ...mapState({
            products: (state) => state.products.products,
            productsLoading: (state) => state.products.productsLoading,
        }),
    },
    mounted() {
        this.fetchAllProducts();
    },
    methods: {
        ...mapActions({
            fetchAllProducts: "fetchAllProducts",
        }),
    },
};
</script>

<template>
    <div class="grid grid-cols-5 gap-4 px-20">
        <vue-loading :active="productsLoading" loader="bars" />

        <product-item
            v-for="product in products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>
