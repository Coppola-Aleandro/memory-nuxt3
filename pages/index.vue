<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mohave:wght@300;700&display=swap" rel="stylesheet">
<template>
  <div>
    <section class="z-10">
      <div class="diagonal-box">
          <div class="flex flex-col justify-center items-center text-black welcome-section relative p-8 md:p-12">        
            <span class="font-bold font-Mohave text-2xl text-center">Welcome on</span>
            <br> 
            <div class="font-bold font-Mohave text-5xl text-center">
              New Verse
              <div class="text-center text-2xl mt-24 text-white">Coming soon...</div>
            </div>             
          </div>
      </div>
    </section>
    <section  >
      Welc asjhdba,jhsdba,sjd ba,sdba,sjbd,
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