import {
  CalendarBlank,
  CalendarPlus,
  ClipboardText,
  MapPin,
  Paperclip,
  UserCircle,
  X,
} from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useModal } from '../../hooks/useModal'
import { useTasks } from '../../hooks/useTasks'
import { formatDate } from '../../utils/formatDate'
import { formatDistanceToNow } from '../../utils/formatDistanceToNow'
import { isOverdue } from '../../utils/isOverdue'
import { AttachmentList } from '../AttachmentList'
import { OverdueBadge } from '../OverdueBadge'
import { PriorityBadge } from '../PriorityBadge'
import {
  CloseButton,
  ModalBadgeContainer,
  ModalContent,
  ModalInfoContainer,
  ModalInfoHeader,
  ModalInfoLabel,
  ModalInfoRow,
  ModalInfoWrapper,
  ModalOverlay,
} from './styles'

export function Modal() {
  const { openModal, setOpenModal } = useModal()
  const { selectedTask } = useTasks()

  return (
    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
      <Dialog.Portal>
        <ModalOverlay>
          <ModalContent>
            <CloseButton>
              <X weight="bold" />
            </CloseButton>
            <ModalInfoHeader>
              <h2>{selectedTask?.title}</h2>
            </ModalInfoHeader>
            <ModalInfoWrapper>
              <ModalInfoContainer>
                <ModalBadgeContainer>
                  <PriorityBadge priority={selectedTask!.priority} />
                  {isOverdue(selectedTask!.date) && <OverdueBadge />}
                </ModalBadgeContainer>
                <ModalInfoRow>
                  <CalendarPlus weight="bold" />
                  <ModalInfoLabel>
                    <h3>Criado em:</h3>
                    <p>{`${formatDate(
                      selectedTask!.created_at,
                    )} (${formatDistanceToNow(selectedTask!.created_at)})`}</p>
                  </ModalInfoLabel>
                </ModalInfoRow>
                <ModalInfoRow>
                  <UserCircle weight="bold" />
                  <ModalInfoLabel>
                    <h3>Criado por:</h3>
                    <p>{selectedTask?.created_by}</p>
                  </ModalInfoLabel>
                </ModalInfoRow>
                <ModalInfoRow>
                  <CalendarBlank weight="bold" />
                  <ModalInfoLabel>
                    <h3>Pra quando?</h3>
                    <p>{`${formatDate(
                      selectedTask!.date,
                    )} (${formatDistanceToNow(selectedTask!.date)})`}</p>
                  </ModalInfoLabel>
                </ModalInfoRow>
                <ModalInfoRow>
                  <ClipboardText weight="bold" />
                  <ModalInfoLabel>
                    <h3>O que precisa ser feito?</h3>
                    <p>{selectedTask?.description}</p>
                  </ModalInfoLabel>
                </ModalInfoRow>
                <ModalInfoRow>
                  <MapPin weight="bold" />
                  <ModalInfoLabel>
                    <h3>Local:</h3>
                    <p>{selectedTask?.local}</p>
                  </ModalInfoLabel>
                </ModalInfoRow>
                {selectedTask?.attachment &&
                  selectedTask?.attachment.length !== 0 && (
                    <ModalInfoRow>
                      <Paperclip weight="bold" />
                      <ModalInfoLabel>
                        <h3>Anexos:</h3>
                        <AttachmentList data={selectedTask.attachment} />
                      </ModalInfoLabel>
                    </ModalInfoRow>
                  )}
              </ModalInfoContainer>
            </ModalInfoWrapper>
          </ModalContent>
        </ModalOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
