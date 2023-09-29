import { ModalType } from '@/utils/type'

export const useModalStore = defineStore('modal-store', () => {
  const isShowModalResult = ref<boolean>(false)
  const title = ref<string>('')
  const type = ref<ModalType>()

  const showModal = (titleValue: string, typeValue: ModalType) => {
    title.value = titleValue
    type.value = typeValue
    isShowModalResult.value = true
  }

  const hideModal = () => (isShowModalResult.value = false)

  return { isShowModalResult, title, type, showModal, hideModal }
})
