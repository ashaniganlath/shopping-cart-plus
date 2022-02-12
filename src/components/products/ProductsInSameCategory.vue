<script>
import ProductItem from "./ProductItem.vue";
import {mapState} from "vuex";

export default {
    name: "RelatedProducts",
    components: {
        ProductItem
    },
    computed: {
        ...mapState({
            productsInCategory: state => state.products.productsInCategory,
            productsInCategoryInLoading: state => state.products.productsInCategoryInLoading,
        }),
    }
}
</script>

<template>
    <loading :active="productsInCategoryInLoading" loader="bars"/>
    <div class="grid grid-cols-4 gap-4 px-20">
        <product-item :key="product.id" v-for="product in productsInCategory" :product="product" :show-add-to-cart="false" />
    </div>
</template>