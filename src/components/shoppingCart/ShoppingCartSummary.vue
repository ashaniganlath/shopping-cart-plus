<script>
import {mapGetters} from "vuex";

export default {
    name: "ShoppingCartSummary",
    data() {
        return {
            shippingCost: 3,
        }
    },
    computed: {
        ...mapGetters({
            totalNumberOfItemsInCart: 'totalNumberOfItemsInCart',
            subTotal: 'subTotal',
        }),
        total() {
            if (! this.subTotal) {
                return 0;
            }

            return this.subTotal + this.shippingCost;
        }
    }
}
</script>

<template>
    <div class="grid grid-cols-2 gap-4 bg-white p-5">
        <span class="col-span-2 text-lg text-gray-600">Order Summary</span>
        <span class="text-sm text-gray-400">Sub total ({{ totalNumberOfItemsInCart }} items)</span>
        <span class="text-sm text-gray-400 text-right">USD {{ subTotal }}</span>
        <span v-if="subTotal" class="text-sm text-gray-400">Standard shipping</span>
        <span v-if="subTotal" class="text-sm text-gray-400 text-right">USD {{ shippingCost }}</span>
        <span class="text-base text-gray-600">Total</span>
        <span class="text-base text-cyan-400 text-right">USD {{ total }}</span>
        <span class="col-span-2">
            <button :disabled="!total" class="w-full bg-cyan-400 text-white p-3 mt-10 uppercase disabled:opacity-50">Proceed to checkout</button>
        </span>
    </div>
</template>