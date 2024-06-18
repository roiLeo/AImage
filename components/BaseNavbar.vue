<template>
  <header
    class="sticky inset-x-0 top-4 z-50 flex w-full flex-wrap md:flex-nowrap md:justify-start"
  >
    <nav
      class="relative mx-2 w-full max-w-[66rem] rounded-[100px] border border-gray-200 bg-gray-100 px-3 dark:border-gray-700 dark:bg-gray-800 md:flex md:items-center md:justify-between md:py-0 lg:mx-auto"
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="inline-block flex-none rounded-md text-xl font-semibold focus:opacity-80 focus:outline-none"
        >
          FindALogo
        </NuxtLink>
        <!-- End Logo -->

        <div class="py-4 md:hidden">
          <UButton
            icon="i-heroicons-bars-3"
            color="gray"
            variant="ghost"
            aria-label="Toggle Navbar"
          />
        </div>
      </div>

      <!-- Collapse -->
      <div
        id="navbar-collapse"
        class="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
      >
        <div
          class="mt-5 flex flex-col gap-x-0 gap-y-4 py-4 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-x-7 md:gap-y-0 md:ps-7"
        >
          <NuxtLink to="/">About</NuxtLink>
          <NuxtLink to="/">Contact</NuxtLink>

          <ColorModeButton />

          <div>
            <UButton
              :ui="{ rounded: 'rounded-full' }"
              color="pink"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="icon h-5 w-5 flex-shrink-0"
                style=""
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                data-v-0c07c18e=""
              >
                <path
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                ></path>
              </svg>
              Github
            </UButton>
          </div>
        </div>
      </div>
      <!-- End Collapse -->
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style></style>
