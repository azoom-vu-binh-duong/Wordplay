<script setup>
import { storeToRefs } from 'pinia'

const gameStore = useGameStore()
const { initGame } = gameStore
const { gameStatus, targetWord } = storeToRefs(gameStore)

const chat = computed(() =>
  gameStatus === GameStatus.Win ? 'Good job, bro!' : 'Nice try, bro!'
)
</script>
<template>
  <div class="game-result">
    <div class="content">
      <p class="text">The answer was:</p>
      <div class="word">{{ targetWord }}</div>
      <p class="text -chat">{{ chat }}</p>
      <button class="restart" @click="initGame()">New game</button>
      <p class="text -or">or press Enter to play again</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-result {
  > .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    background-color: #25283a;
    > .text {
      font-size: 14px;
      margin: 0px;
      color: #c3c7e0;
      &.-chat {
        color: #7999e1;
      }

      &.-or {
        color: #898fb2;
        margin-bottom: 10px;
      }
    }

    > .word {
      border: 2px dashed #696f90;
      border-radius: 5px;
      padding: 10px 15px;
      background-color: #40445c;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 2.6px;
      text-transform: uppercase;
    }

    > .restart {
      border: none;
      border-radius: 5px;
      padding: 10px 30px;
      background-color: #57ac57;
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>
