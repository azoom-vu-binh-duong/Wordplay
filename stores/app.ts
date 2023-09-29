import { Mode } from '@/utils/type'

export const useAppStore = defineStore('app-store', () => {
  const mode = ref(Mode.DarkMode)

  return {
    mode,
  }
})
