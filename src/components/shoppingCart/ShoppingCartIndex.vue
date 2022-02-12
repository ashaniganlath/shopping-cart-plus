<script>
import ShoppingCartSummary from './ShoppingCartSummary.vue';

export default {
    name: "ShoppingCartIndex",
    components: {
        ShoppingCartSummary,
    }
}
</script>

<template>
    <div class="grid grid-cols-3 gap-4 m-20">
        <div class="col-span-2 bg-white p-5">
            <table class="w-full table-fixed text-gray-500 text-sm">
                <tbody class="divide-y">
                    <tr>
                        <td class="w-28"><img src="../../assets/logo.png" class="h-20" alt=""></td>
                        <td class="flex flex-col w-48 pt-3">
                            <span class="text-gray-600 text-base">Image Name</span>
                            <span class="text-gray-400 text-xs">Category</span>
                        </td>
                        <td class="text-base text-cyan-400 w-24">Rs.300</td>
                        <td class="text-sm text-gray-500 w-24"><vue-number-input size="small" :min="1" controls></vue-number-input></td>
                        <td class="w-10 text-gray-500 text-right"><i class="material-icons text-lg">delete</i></td>
                    </tr>
                    <tr>
                        <td class="w-28"><img src="../../assets/logo.png" class="h-20" alt=""></td>
                        <td class="flex flex-col w-48 pt-3">
                            <span class="text-gray-600 text-base">Image Name</span>
                            <span class="text-gray-400 text-xs">Category</span>
                        </td>
                        <td class="text-base text-cyan-400 w-24">Rs.300</td>
                        <td class="text-sm text-gray-500 w-24"><vue-number-input size="small" :min="1" controls></vue-number-input></td>
                        <td class="w-10 text-gray-500 text-right"><i class="material-icons text-lg">delete</i></td>
                    </tr>
                    <tr>
                        <td class="w-28"><img src="../../assets/logo.png" class="h-20" alt=""></td>
                        <td class="flex flex-col w-48 pt-3">
                            <span class="text-gray-600 text-base">Image Name</span>
                            <span class="text-gray-400 text-xs">Category</span>
                        </td>
                        <td class="text-base text-cyan-400 w-24">Rs.300</td>
                        <td class="text-sm text-gray-500 w-24"><vue-number-input size="small" :min="1" controls></vue-number-input></td>
                        <td class="w-10 text-gray-500 text-right"><i class="material-icons text-lg">delete</i></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <shopping-cart-summary></shopping-cart-summary>
    </div>
</template>

