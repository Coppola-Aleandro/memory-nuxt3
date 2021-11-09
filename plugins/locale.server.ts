import { defineNuxtPlugin, useState } from '#app';

export default defineNuxtPlugin((nuxt) => {
  const locale = useState(
    'locale',
    () =>
      nuxt.ssrContext?.req.headers['accept-language']
        ?.split(',')[0]
        .split('-')[0]
  );

  console.log('LOCALE:', locale.value);
});
