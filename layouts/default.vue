<template>
  <div>
    <Sidebar />
    <nav
      class="
        flex
        items-center
        p-4
        fixed
        w-full
        top-0
        bg-white
        z-40
        shadow-md
        h-24
      "
    >
      <NuxtLink to="/">
        <img src="/images/new-verse-icon.png" alt="New Verse" width="60" />
      </NuxtLink>

      <button
        type="button"
        class="px-4 focus:outline-non block md:hidden"
        @click="sidebarIsOpen = true"
      >
        <span class="sr-only">Open sidebar {{ sidebarIsOpen }}</span>
        <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
      </button>

      <NuxtLink
        v-for="item in useNavigationMenu"
        :key="item.href"
        :to="item.href"
        class="ml-4 hidden md:block"
      >
        <span>{{ item.title }}</span>
      </NuxtLink>

      <span class="flex-grow"></span>

      <div>
        <button
          v-on:click="onConnectWallet()"
          v-if="!accountAddress"
          class="p-2 shadow-sm bg-primary-600 text-white rounded-sm"
        >
          Connetti Wallet
        </button>

        <div
          class="text-black p-2 bg-gray-300 rounded-md"
          v-if="accountAddress"
        >
          <component
            v-if="accountAddress"
            :is="KeyIcon"
            class="h-6 w-6"
            v-on:click="copyAccountAddress()"
          />
          <span class="hidden md:block">{{ accountAddress }}</span>
        </div>

        <Banner v-if="banner" :banner="banner" />
      </div>
    </nav>
    <main class="pt-24">
      <slot />
    </main>
  </div>
</template>

<script setup>
const sidebarIsOpen = useState('sidebarIsOpen', () => false);
</script>

<script>
import { useState, useNuxtApp } from '#app';
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  KeyIcon,
} from '@heroicons/vue/outline';

import Sidebar from '~~/components/Sidebar.vue';
import { useNavigationMenu } from '~~/composables/useNavigationMenu';

export default {
  components: {
    BellIcon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    MenuAlt2Icon,
    UsersIcon,
    XIcon,
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    Sidebar,
  },
  setup() {
    useMeta({
      title: 'Home',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
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
      banner: null,
    };
  },
  mounted() {
    this.nuxtApp = useNuxtApp();
  },
  methods: {
    copyAccountAddress() {
      navigator.clipboard.writeText(this.accountAddress);
      this.banner = {
        title: 'Indirizzo account copiato',
      };
      setTimeout(() => {
        this.banner = null;
      }, 5000);
    },
  },
};
</script>
