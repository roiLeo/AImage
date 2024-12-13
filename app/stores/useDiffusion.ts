import type { RouterInput } from '~~/server/trpc/routers'
import type { Prediction } from 'replicate'

export type DiffusionTask = Prediction & {
  input: {
    prompt: string
    image: string
    mask: string
    width: number
    height: number
  }
  output: string[]
}

type DiffusionState = {
  history: DiffusionTask[]
}

export const useDiffusion = defineStore('diffusion', {
  persist: {
    storage: persistedState.localStorage,
  },

  state: () => ({ history: [] }) as DiffusionState,

  actions: {
    async generate(input: RouterInput['diffusion']['generate']) {
      const { $client } = useNuxtApp()

      const generateTask = await $client.diffusion.generate.mutate(input)
      this.history.unshift(generateTask as DiffusionTask)

      try {
        const task = await awaitTaskResult(generateTask)
        const index = this.history.findIndex((t) => t.id === generateTask.id)
        this.history[index] = task as DiffusionTask
      } catch (e) {
        this.history = this.history.filter((t) => t.id !== generateTask.id)
        throw e
      }
    },

    // Resolve pending tasks
    async resolvePendingTasks() {
      // Remove invalid tasks
      this.history = this.history.filter((t) => !!t.status)

      const pendingTasks = this.history.filter(
        (t) => t.status === 'starting' || t.status === 'processing',
      )

      await Promise.all(
        pendingTasks.map(async (task) => {
          try {
            const _task = await awaitTaskResult(task)
            const index = this.history.findIndex((t) => t.id === task.id)
            this.history[index] = _task as DiffusionTask
          } catch (e) {
            this.history = this.history.filter((t) => t.id !== task.id)
            throw e
          }
        }),
      )
    },
  },
})
