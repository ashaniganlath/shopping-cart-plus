<script>
export default {
    name: "MainHeader"
}
</script>

<template>
    <div class="flex flex-row shadow h-16 bg-white px-10 align-middle mb-10">
        <div class="flex-none w-5/6 text-2xl self-center font-sans pl-4">
            <router-link :to="{ name: 'product-index' }">
                <img src="src/assets/images/logo.png" alt="" class="object-contain h-16" />
            </router-link>
        </div>
        <div class="flex flex-row w-1/6 self-center pt-2 text-gray-500 pl-24">
            <router-link :to="{ name: 'shopping-cart' }">
                <span><i class="material-icons">shopping_cart</i></span>
            </router-link>
            <span class="w-6 h-6 text-sm text-center rounded-full bg-cyan-400 text-white">3</span>
            <span class="text-xs pl-5"> <strong>Total</strong> <br/> Rs.300</span>
        </div>
    </div>
</template>