import { useState } from "react"

const useModal = (useModalProps?: { openModalOnRender?: boolean }) => {
  const [isOpen, setIsOpen] = useState(
    useModalProps?.openModalOnRender ?? false
  )

  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)

  return {
    isOpen,
    closeModal,
    openModal,
  }
}

export { useModal }
