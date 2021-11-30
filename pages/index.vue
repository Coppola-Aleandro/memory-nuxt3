<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mohave:wght@300;700&display=swap" rel="stylesheet">
<template>
  <div>    
    Playing card
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
    });
  }, 
  data() {
    return {
      nuxtApp: null,
      accountAddress: useState('accountAddress'),
      async onConnectWallet() {
        this.nuxtApp.payload.state.accountAddress = await connectWallet();        
      }      
    }
  },
  mounted() {
    this.nuxtApp = useNuxtApp();
  }
}

</script>