<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const modalStore = useModalStore()
const { isShowModalResult, title, type } = storeToRefs(modalStore)
</script>
<template>
  <div class="app-modal" :class="{ '-visible': isShowModalResult }">
    <div class="content">
      <div class="header">
        <!-- Just for centering others DOM -->
        <Icon class="close -invisible" name="material-symbols:close" />
        <span class="text">
          {{ title }}
        </span>
        <Icon
          class="close"
          name="material-symbols:close"
          @click="isShowModalResult = !isShowModalResult"
        />
      </div>
      <div class="body">
        <template v-if="type === ModalType.Result">
          <result />
        </template>
        <template v-if="type === ModalType.Settings">
          <settings />
        </template>
        <template v-if="type === ModalType.Guide">
          <guide />
        </template>
      </div>
    </div>
  </div>
  <div v-if="isShowModalResult" class="background-layout"></div>
</template>
<style lang="scss" scoped>
.app-modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  visibility: hidden;
  &.-visible {
    visibility: visible;
  }

  &.-visible > .content {
    transform: translateY(0px);
    opacity: 1;
  }

  > .content {
    margin-top: -150px;
    min-width: 350px;
    border-radius: 10px;
    overflow: hidden;
    transform: translateY(40px);
    opacity: 0;
    transition: all 0.2s;
    > .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      background-color: #323447;
      > .text {
        color: #fff;
        font-size: 18px;
        font-weight: 700;
      }

      > .close {
        width: 40px;
        cursor: pointer;
      }

      > .close.-invisible {
        visibility: hidden;
        cursor: default;
      }
    }

    > .body {
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
    }
  }
}

.background-layout {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
