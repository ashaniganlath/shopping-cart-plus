<script>
export default {
    name: "ShoppingCartSummary"
}
</script>

<template>
    <div class="grid grid-cols-2 gap-4 bg-white justify-between p-5">
        <span class="col-span-2 text-lg text-gray-600">Order Summary</span>
        <span class="text-sm text-gray-400">Sub total (0 items)</span>
        <span class="text-sm text-gray-400 text-right">Rs.300</span>
        <span class="text-base text-gray-600">Total</span>
        <span class="text-base text-cyan-400 text-right">Rs.300</span>
        <span class="col-span-2"><button class="w-full bg-cyan-400 text-white p-3 mt-10 uppercase">Proceed to checkout</button></span>
    </div>
</template>