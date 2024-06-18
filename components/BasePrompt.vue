<template>
  <form
    class="mx-auto mt-10 w-full max-w-2xl px-4 sm:px-6 lg:px-8"
    @submit.prevent="$emit('generate')"
  >
    <div class="relative">
      <input
        v-model="prompt"
        type="text"
        class="block w-full rounded-full border border-gray-200 p-4 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        :class="{ 'cursor-not-allowed opacity-50': disabled }"
        placeholder="What's on your mind?"
        :disabled="disabled"
        required
      />
      <div class="absolute end-2 top-1/2 -translate-y-1/2">
        <button
          type="submit"
          name="Generate"
          class="inline-flex size-10 items-center justify-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-sm font-semibold text-gray-500 hover:text-gray-800 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:text-white"
          :class="{ 'animate-pulse': loading }"
          :disabled="loading || disabled"
        >
          <Transition mode="out-in">
            <Icon
              v-if="loading || disabled"
              name="humbleicons:spinner-earring"
              class="animate-spin"
            />
            <Icon
              v-else
              name="heroicons:arrow-right"
            />
          </Transition>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
defineProps<{
  loading?: boolean
  disabled?: boolean
}>()
defineEmits(['generate'])
const prompt = defineModel({ type: String })
</script>
