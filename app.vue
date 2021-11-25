<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mohave:wght@300;700&display=swap" rel="stylesheet">
<template>
  <div>
    <NuxtPage/>
  </div>
</template>

<script>
  export default {
    setup () {
      useMeta({
        title: "New Verse",
        meta: [
          { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
        ]
      })
    }, 
  }
</script>
