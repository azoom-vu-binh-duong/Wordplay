<script setup>
import { storeToRefs } from 'pinia';

const gameStore = useGameStore()
const { typeLetter } = gameStore
const { gameStatus } = storeToRefs(gameStore)

const handleTyping = (event) => {
  const letter = event.key

  if (
    gameStatus.value === GameStatus.Playing &&
    letter.match(/^([a-zA-Z]|Enter|Backspace)$/)
  ) {
    console.log('a')
    typeLetter(letter)
  }
}

onMounted(() => {
  if (typeof window !== 'undefined')
    window.addEventListener('keyup', handleTyping)
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined')
    window.removeEventListener('keyup', handleTyping)
})
</script>

<template>
  <div class="page-content">
    <guess-words />
    <key-board />
  </div>
</template>
<style lang="scss" scoped>
.page-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  height: 90%;
  padding-top: 12px;
}
</style>
