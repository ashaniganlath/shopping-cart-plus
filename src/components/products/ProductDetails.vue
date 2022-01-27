<script>
export default {
    name: "ProductDetails"
}
</script>

<template>
    <div class="grid grid-cols-2 gap-4 m-20 p-5 w-3/6 bg-white">
        <div><img src="./../../assets/logo.png" alt=""></div>
        <div class="flex flex-col gap-3">
            <span class="text-2xl text-gray-600">Title</span>
            <span class="text-xs text-gray-400">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make </span>
            <span class="text-xs text-gray-400">Category: test</span>
            <span class="text-base text-cyan-400">Rs. 300</span>
            <span class="text-sm text-gray-500 w-24"><vue-number-input size="small" :min="1" controls></vue-number-input></span>
            <span><button class="bg-cyan-400 text-xs text-white p-2 mt-5 uppercase">Add to cart</button></span>
        </div>
    </div>
</template>