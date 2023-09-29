<script setup lang="ts"></script>
<template>
  <Suspense>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
      <app-modal />
    </NuxtLayout>
  </Suspense>
</template>
