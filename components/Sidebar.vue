<template>
  <TransitionRoot as="template" :show="sidebarIsOpen">
    <Dialog
      as="div"
      class="fixed inset-0 flex z-40 z-50"
      @close="sidebarIsOpen = false"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
      </TransitionChild>
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div
          class="
            relative
            flex-1 flex flex-col
            max-w-xs
            w-full
            pt-5
            pb-4
            bg-white
          "
        >
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                class="
                  ml-1
                  flex
                  items-center
                  justify-center
                  h-10
                  w-10
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-white
                "
                @click="sidebarIsOpen = false"
              >
                <span class="sr-only">Close sidebar</span>
                <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </TransitionChild>
          <div class="flex-shrink-0 flex items-center px-4">
            <img
              src="/images/new-verse-icon.png"
              alt="New Verse"
              class="h-14 w-auto"
            />
          </div>
          <div class="mt-5 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">
              <NuxtLink
                v-for="item in useNavigationMenu"
                :key="item.href"
                :to="item.href"
                :class="[
                  'text-black hover:bg-primary-600 hover:text-white',
                  'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                ]"
              >
                <component
                  :is="item.icon"
                  class="mr-4 flex-shrink-0 h-6 w-6"
                  aria-hidden="true"
                />
                <span>{{ item.title }}</span>
              </NuxtLink>
            </nav>
          </div>
        </div>
      </TransitionChild>
      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
const sidebarIsOpen = useState('sidebarIsOpen');
</script>

<script>
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
  FolderIcon,
  HomeIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/vue/outline';
import { SearchIcon } from '@heroicons/vue/solid';
import { useNavigationMenu } from '~~/composables/useNavigationMenu';

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: 'about', icon: UsersIcon, current: false },
  { name: 'Domini', href: 'domains', icon: FolderIcon, current: false },
];

export default {
  props: {
    demo: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    MenuAlt2Icon,
    SearchIcon,
    XIcon,
  },
  data() {
    return {
      navigation,
      isOpen: false,
    };
  },
};
</script>
