<script>
import { mapGetters } from "vuex";

export default {
    name: "TheHeader",
    computed: {
        ...mapGetters({
            totalNumberOfItemsInCart: "totalNumberOfItemsInCart",
        }),
    },
};
</script>

<template>
    <div class="flex flex-row shadow h-16 bg-white px-10 align-middle mb-10">
        <div v-once class="flex-none w-2/6 text-2xl self-center font-sans pl-4">
            <router-link :to="{ name: 'product-index' }">
                <img
                    src="/src/assets/images/logo.png"
                    alt=""
                    class="object-contain h-16"
                />
            </router-link>
        </div>
        <div v-once class="flex-none w-3/6 text-base self-center font-sans text-cyan-400 pl-4">
            <router-link :to="{ name: 'product-index' }">
                Products
            </router-link>
        </div>
        <div v-memo="[totalNumberOfItemsInCart]" class="flex flex-row w-1/6 self-center pt-2 text-gray-500 pl-36">
            <router-link :to="{ name: 'shopping-cart' }">
                <span><i class="material-icons">shopping_cart</i></span>
            </router-link>
            <span
                class="w-6 h-6 text-sm text-center rounded-full bg-cyan-400 text-white"
                >{{ totalNumberOfItemsInCart }}</span
            >
        </div>
    </div>
</template>
