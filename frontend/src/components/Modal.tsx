import React, { Fragment, useRef } from "react"

import { Dialog, Transition } from "@headlessui/react"
import { VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"
import { useModal } from "../hooks/useModal"
import { modalStyles } from "../helper/modalstyles"

export type ModalStylesProps = VariantProps<typeof modalStyles>

type ModalProps = {
  modal: ReturnType<typeof useModal>
  children: React.ReactNode
  className?: string
  showBackgroundBlur?: boolean
  showBackdrop?: boolean
  overrideClassName?: string
} & ModalStylesProps

const Modal = ({
  modal,
  className = "h-[400px] w-[500px] top-[30%] rounded-lg bg-white p-6 ",
  children,
  showBackgroundBlur = true,
  showBackdrop = true,
  overrideClassName,
  maxWidth,
}: ModalProps) => {
  const focus = useRef(null)
  return (
    <Transition show={modal.isOpen} as={Fragment}>
      <Dialog
        onClose={modal.closeModal}
        className="relative z-[150]"
        initialFocus={focus}
      >
        {/* seperate animations for backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-100"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <div
            aria-hidden="true"
            className={`fixed inset-0 
                        ${showBackdrop && "bg-black/30"} 
                        ${showBackgroundBlur && "backdrop-blur-sm"}`}
          />
        </Transition.Child>

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 px-2 py-4 sm:px-4">
          {/* animaitions for dialog panel */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            {/* The actual dialog panel  */}
            <Dialog.Panel
              className={twMerge(
                overrideClassName
                  ? `relative ${overrideClassName}`
                  : modalStyles({
                      className,
                      maxWidth,
                    })
              )}
            >
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

// use these so screen reader announces content when modal opens
Modal.Title = Dialog.Title // renders as h2 tag
Modal.Description = Dialog.Description // renders as p tag

export default Modal
