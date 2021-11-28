<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="p-2 rounded-lg bg-primary-600 shadow-lg sm:p-3">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-primary-800">
              <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <span class="ml-4 text-white"> {{ banner.title }} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SpeakerphoneIcon, XIcon } from '@heroicons/vue/outline';

export default {
  components: {
    SpeakerphoneIcon,
    XIcon,
  },
  props: ['banner'],
};
</script>
