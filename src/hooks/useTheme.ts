import type { GlobalThemeOverrides } from 'naive-ui'
import { computed, watch } from 'vue'
import { lightTheme, useOsTheme } from 'naive-ui'
import { useAppStore } from '@/store'

export function useTheme() {
  const appStore = useAppStore()

  const OsTheme = useOsTheme()

  const isLight = computed(() => {
    if (appStore.theme === 'auto')
      return OsTheme.value === 'light'
    else
      return appStore.theme === 'light'
  })

  const theme = computed(() => {
    return isLight.value ? lightTheme : undefined
  })

  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    if (isLight.value) {
      return {
        common: {
          primaryColor: '#F1BC00',
          primaryColorHover: '##F9BE01',
          primaryColorPressed: '#F9BE01',
          primaryColorSuppl: '#F9BE01'

        },
      }
    }
    return {}
  })

  watch(
    () => isLight.value,
    (light) => {
      if (light)
       document.documentElement.classList.remove('dark')
      else
        document.documentElement.classList.add('dark')
    },
    { immediate: true },
  )

  return { theme, themeOverrides }
}
