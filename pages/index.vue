<script setup>
definePageMeta({
  layout: 'empty',
})

const { showModal } = useModalStore()

const { initGame } = useGameStore()

const handleStartGame = () => {
  initGame()
  navigateTo('/game')
}

const openSetting = () => {
  showModal('Settings', ModalType.Settings)
}

const openGuide = () => {
  console.log('a')
  showModal('How to play', ModalType.Guide)
}
</script>

<template>
  <div class="page-menu">
    <div class="menu">
      <button class="item" @click="handleStartGame">New game</button>
      <button class="item" @click="openGuide">How to play</button>
      <button class="item" @click="openSetting">Setting</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-menu {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  > .menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 440px;
    padding: 20px;
    margin-top: 250px;
  }

  > .menu > .item {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 100px;
    padding: 10px 20px;
    text-transform: uppercase;
  }
}
</style>
