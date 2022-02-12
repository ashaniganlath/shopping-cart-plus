<script>

</script>

<template>
    <div class="bg-gray-200 w-screen h-auto min-h-screen">
        <div class="flex flex-row shadow h-16 bg-white px-10 align-middle mb-10">
            <div class="flex-none w-5/6 text-2xl self-center font-sans pl-4">
                <img src="src/assets/images/logo.png" alt="" class="object-contain h-16">
            </div>
            <div class="flex flex-row w-1/6 self-center pt-2 text-gray-500 pl-24">
                <span><i class="material-icons">shopping_cart</i></span>
                <span class="w-6 h-6 text-sm text-center rounded-full bg-cyan-400 text-white">3</span>
                <span class="text-xs pl-5"> <strong>Total</strong> <br/> Rs.300</span>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 m-20 p-5 w-3/6 bg-white">
            <div><img src="./assets/logo.png" alt=""></div>
            <div class="flex flex-col gap-3">
                <span class="text-2xl text-gray-600">Title</span>
                <span class="text-xs text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </span>
                <span class="text-xs text-gray-400">Category: test</span>
                <span class="text-base text-cyan-400">Rs. 300</span>
                <span class="text-sm text-gray-500 w-24"><vue-number-input size="small" :min="1" controls></vue-number-input></span>
                <span><button class="bg-cyan-400 text-xs text-white p-2 mt-5 uppercase">Add to cart</button></span>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-4 m-20">
            <div class="col-span-2 bg-white p-5">
                <table class="w-full table-fixed text-gray-500 text-sm">
                    <tbody class="divide-y">
                        <tr>
                            <td class="w-28"><img src="./assets/logo.png" class="h-20" alt=""></td>
                            <td class="flex flex-col w-48 pt-3">
                                <span class="text-gray-600 text-base">Image Name</span>
                                <span class="text-gray-400 text-xs">Category</span>
                            </td>
                            <td class="text-base text-cyan-400 w-24">Rs.300</td>
                            <td class="text-sm text-gray-500 w-24"><vue-number-input size="small" :min="1" controls></vue-number-input></td>
                            <td class="w-10 text-gray-500 text-right"><i class="material-icons text-lg">delete</i></td>
                        </tr>
                        <tr>
                            <td class="w-28"><img src="./assets/logo.png" class="h-20" alt=""></td>
                            <td class="flex flex-col w-48 pt-3">
                                <span class="text-gray-600 text-base">Image Name</span>
                                <span class="text-gray-400 text-xs">Category</span>
                            </td>
                            <td class="text-base text-cyan-400 w-24">Rs.300</td>
                            <td class="text-sm text-gray-500 w-24"><vue-number-input size="small" :min="1" controls></vue-number-input></td>
                            <td class="w-10 text-gray-500 text-right"><i class="material-icons text-lg">delete</i></td>
                        </tr>
                        <tr>
                            <td class="w-28"><img src="./assets/logo.png" class="h-20" alt=""></td>
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
            <div class="grid grid-cols-2 gap-4 bg-white justify-between p-5">
                <span class="col-span-2 text-lg text-gray-600">Order Summary</span>
                <span class="text-sm text-gray-400">Sub total (0 items)</span>
                <span class="text-sm text-gray-400 text-right">Rs.300</span>
                <span class="text-base text-gray-600">Total</span>
                <span class="text-base text-cyan-400 text-right">Rs.300</span>
                <span class="col-span-2"><button class="w-full bg-cyan-400 text-white p-3 mt-10 uppercase">Proceed to checkout</button></span>
            </div>
        </div>


        <div class="grid grid-cols-5 gap-4 px-20">
            <div class="bg-white h-76 flex flex-col justify-between place-items-center">
                <div class="p-2"><img src="./assets/logo.png" alt=""></div>
                <span class="text-sm text-gray-500">Title</span>
                <span class="text-sm text-cyan-400">Rs.300</span>
                <div class="p-4 text-xs text-gray-500">
                    <button class="border px-3 py-1 border-gray-300">ADD TO CART</button>
                </div>
            </div>
            <div class="bg-white h-76 flex flex-col justify-between place-items-center">
                <div class="p-2"><img src="./assets/logo.png" alt=""></div>
                <span class="text-sm text-gray-500">Title</span>
                <span class="text-sm text-cyan-400">Rs.300</span>
                <div class="p-4 text-xs text-gray-500">
                    <button class="border px-3 py-1 border-gray-300">ADD TO CART</button>
                </div>
            </div>
            <div class="bg-white h-76 flex flex-col justify-between place-items-center">
                <div class="p-2"><img src="./assets/logo.png" alt=""></div>
                <span class="text-sm text-gray-500">Title</span>
                <span class="text-sm text-cyan-400">Rs.300</span>
                <div class="p-4 text-xs text-gray-500">
                    <button class="border px-3 py-1 border-gray-300">ADD TO CART</button>
                </div>
            </div>
            <div class="bg-white h-76 flex flex-col justify-between place-items-center">
                <div class="p-2"><img src="./assets/logo.png" alt=""></div>
                <span class="text-sm text-gray-500">Title</span>
                <span class="text-sm text-cyan-400">Rs.300</span>
                <div class="p-4 text-xs text-gray-500">
                    <button class="border px-3 py-1 border-gray-300">ADD TO CART</button>
                </div>
            </div>
            <div class="bg-white h-76 flex flex-col justify-between place-items-center">
                <div class="p-2"><img src="./assets/logo.png" alt=""></div>
                <span class="text-sm text-gray-500">Title</span>
                <span class="text-sm text-cyan-400">Rs.300</span>
                <div class="p-4 text-xs text-gray-500">
                    <button class="border px-3 py-1 border-gray-300">ADD TO CART</button>
                </div>
            </div>
            <div class="bg-white h-76 flex flex-col justify-between place-items-center">
                <div class="p-2"><img src="./assets/logo.png" alt=""></div>
                <span class="text-sm text-gray-500">Title</span>
                <span class="text-sm text-cyan-400">Rs.300</span>
                <div class="p-4 text-xs text-gray-500">
                    <button class="border px-3 py-1 border-gray-300">ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>
</template>