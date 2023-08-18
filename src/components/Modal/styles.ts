import * as Dialog from '@radix-ui/react-dialog'
import { keyframes, styled } from 'styled-components'

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const overlayHide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(31, 44, 51, 0.6);
  animation: ${overlayShow} 450ms cubic-bezier(0.16, 1, 0.3, 1);

  &[data-state='closed'] {
    animation: ${overlayHide} 450ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme['--white']};
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  padding: 0.5rem;
  cursor: pointer;
`

export const ModalInfoHeader = styled.header`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 2.25rem);
`

export const ModalInfoWrapper = styled.div`
  overflow-y: auto;
  margin-top: 1rem;
`

export const ModalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div + div {
    padding-top: 0.5rem;
    border-top: 1px solid ${(props) => props.theme['--gray-200']};
  }
`

export const ModalInfoRow = styled.div`
  color: ${(props) => props.theme['--gray-base']};
  display: flex;
  gap: 0.5rem;

  svg {
    height: 1.125rem;
    width: 1.125rem;
  }
`

export const ModalInfoLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  p {
    font-size: 0.875rem;
  }
`

export const ModalBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
