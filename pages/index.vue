<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mohave:wght@300;700&display=swap" rel="stylesheet">
<template>
  <div class="flex flex-col justify-center items-center min-h-screen bg-black text-green-300">
    <div class="absolute top-16 right-16">
      <button v-on:click="onConnectWallet()" v-if="!accountAddress" class="p-2 shadow-sm bg-green-300 text-black rounded-sm">Connetti Wallet</button>
      <div class="text-black p-2 bg-gray-300 rounded-sm" v-if="accountAddress">Account: {{ accountAddress }}</div>
    </div>
    <div class="text-green-300 font-bold font-Mohave text-5xl">
      Welcome on New Verse
      <div class="text-center text-2xl mt-10 text-green-200">Coming soon...</div>
    </div>     

    <div class="mt-20 text-green-200">
      <NuxtLink to="/about">Chi siamo</NuxtLink>
    </div>
  </div>
</template>

<script>
import { useState, useNuxtApp } from '#app';

export default {  
  data() {
    return {
      nuxtApp: null,
      accountAddress: useState('accountAddress'),
      async onConnectWallet() {
        this.nuxtApp.payload.state.accountAddress = await connectWallet();        
      },
    }
  },
  mounted() {
    this.nuxtApp = useNuxtApp();
  }
}

</script>