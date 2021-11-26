<template>
  <div>
    <nav
      class="
        flex
        items-center
        p-4
        fixed
        w-full
        top-0
        bg-white
        z-50
        shadow-md
        h-24
      "
    >
      <img src="images/new-verse-icon.png" alt="New Verse" width="60" />
      <NuxtLink to="/" class="ml-4">Home</NuxtLink>
      <NuxtLink to="/about" class="ml-4">Chi siamo</NuxtLink>
      <span class="flex-grow"></span>
      <div>
        <button
          v-on:click="onConnectWallet()"
          v-if="!accountAddress"
          class="p-2 shadow-sm bg-green-300 text-black rounded-sm"
        >
          Connetti Wallet
        </button>
        <div
          class="text-black p-2 bg-gray-300 rounded-sm"
          v-if="accountAddress"
        >
          Account: {{ accountAddress }}
        </div>
      </div>
    </nav>
    <main class="pt-24">
      <slot />
    </main>
  </div>
</template>

<script>
import { useState, useNuxtApp } from '#app';

export default {
  setup() {
    useMeta({
      title: 'Home',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'images/new-verse-icon.png',
        },
      ],
    });
  },
  data() {
    return {
      nuxtApp: null,
      accountAddress: useState('accountAddress'),
      async onConnectWallet() {
        this.nuxtApp.payload.state.accountAddress = await connectWallet();
      },
    };
  },
  mounted() {
    this.nuxtApp = useNuxtApp();
  },
};
</script>
