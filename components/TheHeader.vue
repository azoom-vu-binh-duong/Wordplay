<script setup>
import { storeToRefs } from 'pinia'

const { showModal } = useModalStore()
const gameStore = useGameStore()
const { giveUp, initGame } = gameStore
const { gameStatus } = storeToRefs(gameStore)

const openSetting = () => {
  showModal('Settings', ModalType.Settings)
}

const openGuide = () => {
  showModal('How to play', ModalType.Guide)
}
</script>
<template>
  <div class="the-header">
    <div class="controls -left">
      <div class="button -back">
        <Icon name="ei:arrow-left" @click="navigateTo('/')" />
      </div>
      <button
        class="button -inline -dark-mode"
        @click="giveUp"
        v-if="gameStatus === GameStatus.Playing"
      >
        Give up
      </button>
      <button class="button -inline -dark-mode" @click="initGame" v-else>
        New game
      </button>
    </div>
    <h2 class="title">Wordplay</h2>
    <div class="controls -right">
      <div class="button -guide" @click="openGuide">
        <Icon name="ph:question-bold" />
      </div>
      <div class="button -config" @click="openSetting">
        <Icon name="icon-park-solid:setting-two" />
      </div>
      <div class="button -github">
        <Icon name="mdi:github" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.the-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
  border-bottom: 1px solid #3a3a3c;
  padding: 0 30px;
  > .title {
    align-self: center;
  }

  > .controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  > .controls > .button:hover {
    cursor: pointer;
  }

  > .controls > .button.-back > .icon {
    width: 38px;
    height: 38px;
  }

  > .controls > .button.-guide > .icon,
  > .controls > .button.-github > .icon {
    width: 30px;
    height: 30px;
  }
}
</style>
