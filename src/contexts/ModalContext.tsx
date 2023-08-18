import { createContext, ReactNode, useState } from 'react'

interface IModalContext {
  openModal: boolean
  setOpenModal: (state: boolean) => void
  handleOpenModal: () => void
}

interface IModalContextProvider {
  children: ReactNode
}

export const ModalContext = createContext({} as IModalContext)

export function ModalProvider({ children }: IModalContextProvider) {
  const [openModal, setOpenModal] = useState<boolean>(false)

  function handleOpenModal() {
    setOpenModal(!openModal)
  }

  return (
    <ModalContext.Provider value={{ openModal, setOpenModal, handleOpenModal }}>
      {children}
    </ModalContext.Provider>
  )
}
