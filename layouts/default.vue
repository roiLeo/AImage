<template>
  <div class="min-h-screen w-screen overflow-y-scroll">
    <BaseNavbar />

    <div
      class="mx-auto min-h-[95vh] max-w-screen-xl overflow-x-visible py-8 md:px-8"
    >
      <NuxtPage />
    </div>

    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-zinc-50 dark:bg-zinc-900',
  },
})
useServerSeoMeta({
  title: 'AImage',
  description: 'Generate image using AI',
})
</script>

<style lang="postcss">
* {
  @apply antialiased;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
