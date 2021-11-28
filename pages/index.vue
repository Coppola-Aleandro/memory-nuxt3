<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mohave:wght@300;700&display=swap" rel="stylesheet">
<template>
  <div>    
    <section class="diagonal-section bg-primary-600">
      <div class="py-24 mt-12 text-white">
        <div class="font-thin font-Mohave text-2xl text-center">Welcome on</div>

        <div class="font-bold font-Mohave text-5xl text-center mt-2">
            <h1>New Verse</h1>
        </div>  
        <div class="text-center text-2xl mt-12 text-white">Coming soon</div>
      </div>
    </section>
    <section class="mt-12">
      <div class="text-center">
        <h2 class="font-bold text-2xl">I nostri servizi</h2>
      </div>
    </section>
  </div>
</template>


<style>
  
</style>

<script>
import "~/assets/css/home.scss";
import { useState, useNuxtApp } from '#app';

export default { 
  setup () {
    useMeta({
      title: "Home",
      link: [{
        rel: 'icon', type: 'image/x-icon', href: 'images/new-verse-icon.png'
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