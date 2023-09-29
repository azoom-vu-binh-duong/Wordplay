<script setup>
import { storeToRefs } from 'pinia'

const gameStore = useGameStore()
const { selectWordLength } = useGameStore()
const { lengthOfWord } = storeToRefs(gameStore)

const switchValue = ref(true)
const switchValue2 = ref(true)
</script>
<template>
  <div class="game-settings">
    <div class="content">
      <p class="label">Number of letters</p>
      <div class="numbers">
        <div
          v-for="wordLength in WORD_LENGTHS"
          class="number"
          :class="{ '-active': wordLength === lengthOfWord }"
          @click="selectWordLength(wordLength)"
        >
          {{ wordLength }}
        </div>
      </div>
      <div class="row">
        <p class="label">Dark mode</p>
        <app-switch v-model="switchValue" />
      </div>
      <div class="row">
        <p class="label">Language</p>
        <app-switch v-model="switchValue2" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.game-settings {
  > .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    background-color: #25283a;
  }

  > .content > .label {
    margin: 0 0 12px 0;
    color: #dfe1f3;
    font-size: 18px;
    font-weight: 700;
  }

  > .content > .numbers {
    display: flex;
    margin-bottom: 20px;
    gap: 7px;
  }

  > .content > .numbers > .number {
    border-radius: 4px;
    padding: 12px 14px;
    background-color: #6e7b98;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    &.-active {
      background-color: $light-green-color;
    }

    &:hover {
      background-color: $light-green-color;
    }
  }

  > .content > .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #40445c;
  }
}
</style>
