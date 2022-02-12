<script>
import { mapGetters } from "vuex";
import mixins from "../../mixins";

export default {
    name: "ShoppingCartSummary",
    mixins: [mixins],
    data() {
        return {
            shippingCost: 3,
        };
    },
    computed: {
        ...mapGetters({
            totalNumberOfItemsInCart: "totalNumberOfItemsInCart",
            subTotal: "subTotal",
        }),
        total() {
            if (!this.subTotal) {
                return 0;
            }

            return this.subTotal + this.shippingCost;
        },
    },
};
</script>

<template>
    <div class="grid grid-cols-2 gap-3 bg-white p-5 max-h-64">
        <span class="col-span-2 text-lg text-gray-600">Order Summary</span>
        <span class="text-sm text-gray-400"
            >Sub total ({{ totalNumberOfItemsInCart }} items)</span
        >
        <span class="text-sm text-gray-400 text-right">{{
            convertToUsd(subTotal)
        }}</span>
        <span v-if="subTotal" class="text-sm text-gray-400"
            >Standard shipping</span
        >
        <span v-if="subTotal" class="text-sm text-gray-400 text-right">{{
            convertToUsd(shippingCost)
        }}</span>
        <span class="text-base text-gray-600">Total</span>
        <span class="text-base text-cyan-400 text-right">{{
            convertToUsd(total)
        }}</span>
        <span class="col-span-2">
            <button
                :disabled="!total"
                class="w-full bg-cyan-400 text-white p-3 mt-5 uppercase disabled:opacity-50"
            >
                Proceed to checkout
            </button>
        </span>
    </div>
</template>
