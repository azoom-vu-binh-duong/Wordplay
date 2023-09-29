<script setup>
import { storeToRefs } from 'pinia'

const appStore = useAppStore()
const { mode } = storeToRefs(appStore)
</script>
<template>
  <div class="app-default" :class="{ '-light': mode === Mode.LightMode }">
    <the-header />
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.app-default {
  height: 100vh;
  background-color: $dark-mode-bg-color;
  color: $dark-mode-text-color;
  font-family: sans-serif;
  &.-light {
    background-color: $light-mode-bg-color;
    color: $light-mode-text-color;
  }
}
</style>
