<template>
  <header
    class="sticky top-0 mx-auto -mb-px flex w-full flex-wrap md:max-w-2xl md:flex-nowrap md:justify-start md:pt-8"
  >
    <nav
      class="relative w-full max-w-[66rem] rounded-[100px] border border-gray-200 bg-gray-100 px-4 dark:border-gray-700 dark:bg-gray-900 sm:px-6 md:flex md:items-center md:justify-between md:py-0 lg:mx-auto lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <!-- Brand -->
        <NuxtLink
          to="/"
          class="inline-block flex-none rounded-md font-akira text-xl font-semibold focus:opacity-80 focus:outline-none"
        >
          AImage
        </NuxtLink>
        <!-- End Brand -->

        <div class="space-x-2 py-4 md:hidden">
          <ColorModeButton />
          <UButton
            color="primary"
            variant="outline"
            icon="i-simple-icons-github"
          />
          <UButton
            class="hidden"
            icon="i-heroicons-bars-3"
            color="gray"
            variant="ghost"
            aria-label="Toggle Navbar"
          />
        </div>
      </div>

      <div
        class="hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
      >
        <div
          class="mt-5 flex flex-col gap-x-2 gap-y-2 py-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:ps-7"
        >
          <ColorModeButton />

          <div>
            <UButton
              :ui="{ rounded: 'rounded-full' }"
              color="primary"
              variant="outline"
              icon="i-simple-icons-github"
              label="Github"
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
