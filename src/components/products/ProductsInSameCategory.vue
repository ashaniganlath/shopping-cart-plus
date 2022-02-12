<script>
import { mapState } from "vuex";

export default {
    name: "RelatedProducts",
    components: {
        ProductItem: defineAsyncComponent(() => import("./ProductItem.vue")),
    },
    computed: {
        ...mapState({
            productsInCategory: (state) => state.products.productsInCategory,
            productsInCategoryInLoading: (state) =>
                state.products.productsInCategoryInLoading,
        }),
    },
};
</script>

<template>
    <vue-loading :active="productsInCategoryInLoading" loader="bars" />
    <div class="grid grid-cols-4 gap-4 px-20">
        <product-item
            v-for="product in productsInCategory"
            :key="product.id"
            :product="product"
            :show-add-to-cart="false"
        />
    </div>
</template>
