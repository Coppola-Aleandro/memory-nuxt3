<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mohave:wght@300;700&display=swap" rel="stylesheet">
<template>
  <div class="flex flex-col justify-center items-center text-green-300 welcome-section">    
    
    <div class="text-green-300 font-bold font-Mohave text-5xl">
      Welcome on New Verse
      <div class="text-center text-2xl mt-10 text-green-200">Coming soon...</div>
    </div>     
    
    <div class="mt-20 text-green-200 btn-indigo">
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </div>
</template>


<style>
  
</style>

<script>
import "~/assets/css/home.css";
import { useState, useNuxtApp } from '#app';

export default { 
  setup () {
    useMeta({
      title: "Home",
      link: [{
        rel: 'icon', type: 'image/x-icon', href: '/assets/images/new-verse-icon.png'
      }]
    })
  }, 
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