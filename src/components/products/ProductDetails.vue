<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import mixins from "../../mixins";

export default {
    name: "ProductDetails",
    components: {
        ProductsInSameCategory: defineAsyncComponent(() => import("./ProductsInSameCategory.vue")),
    },
    mixins: [mixins],
    props: {
        productId: {
            required: true,
            type: Number,
        },
    },
    data() {
        return {
            defaultCount: 1,
            productQuantity: 0,
        };
    },
    computed: {
        ...mapState({
            activeProduct: (state) => state.products.activeProduct,
            activeProductLoading: (state) =>
                state.products.activeProductLoading,
        }),
        ...mapGetters({
            productQuantityInShoppingCart: "productQuantityInShoppingCart",
        }),
    },
    watch: {
        productId(value) {
            this.setActiveProductLoading(true);
            this.fetchProduct(value);
        },
    },
    mounted() {
        this.fetchProduct(this.productId);
        this.productQuantity =
            this.productQuantityInShoppingCart(this.productId) ??
            this.defaultCount;
    },
    unmounted() {
        this.unAssignActiveProduct();
    },
    methods: {
        ...mapMutations({
            setActiveProductLoading: "setActiveProductLoading",
        }),
        ...mapActions({
            fetchProduct: "fetchProduct",
            updateProductQuantityInCart: "updateProductQuantityInCart",
            unAssignActiveProduct: "unAssignActiveProduct",
        }),
        addProductToShoppingCart() {
            this.updateProductQuantityInCart({
                product: this.activeProduct,
                quantity: this.productQuantity,
            });
        },
        updateQuantity(quantity) {
            this.productQuantity = quantity;
        },
    },
};
</script>

<template>
    <vue-loading :active="activeProductLoading" loader="bars" />

    <div class="grid grid-cols-2 gap-4 m-20 p-5 bg-white">
        <div class="justify-self-center">
            <img :src="activeProduct.image" class="h-72" alt="" />
        </div>
        <div class="flex flex-col gap-3">
            <span class="text-2xl text-gray-600">{{
                activeProduct.title
            }}</span>
            <span class="text-xs text-gray-400">{{
                activeProduct.description
            }}</span>
            <span class="text-xs text-gray-400"
                >Category: {{ activeProduct.category }}</span
            >
            <span class="text-base text-cyan-400">{{
                convertToUsd(activeProduct.price)
            }}</span>
            <span class="text-sm text-gray-500 w-24">
                <vue-number-input
                    size="small"
                    :min="1"
                    controls
                    :model-value="productQuantity"
                    @update:model-value="updateQuantity"
                ></vue-number-input>
            </span>
            <span>
                <button
                    class="bg-cyan-400 text-xs text-white p-2 mt-5 uppercase"
                    @click="addProductToShoppingCart"
                >
                    Add to cart
                </button>
            </span>
        </div>
    </div>

    <products-in-same-category></products-in-same-category>
</template>
