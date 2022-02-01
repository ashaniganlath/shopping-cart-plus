<script>
import ProductItem from "./ProductItem.vue";
import {mapState, mapActions} from "vuex";

export default {
    name: "ProductIndex",
    components: {
        ProductItem,
    },
    computed: {
        ...mapState({
            products: state => state.products.products,
            productsLoading: state => state.products.productsLoading,
        })
    },
    mounted() {
        this.fetchAllProducts();
    },
    methods: {
        ...mapActions({
            fetchAllProducts: 'fetchAllProducts',
            incrementProductQuantityInCart: 'incrementProductQuantityInCart',
        }),
        addProductToShoppingCart(product) {
            this.incrementProductQuantityInCart({
                product: product,
                quantity: 1,
            });
        }
    }
}
</script>

<template>
    <div class="grid grid-cols-5 gap-4 px-20">
        <loading :active="productsLoading" loader="bars"/>

        <product-item :key="product.id" v-for="product in products" :product="product"
                      @update-quantity-in-cart="addProductToShoppingCart"/>
    </div>
</template>

