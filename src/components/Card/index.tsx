import { CalendarBlank, MapPin, Paperclip } from '@phosphor-icons/react'

import { HTMLAttributes, memo } from 'react'
import { ITask } from '../../contexts/TasksContext'
import { formatDate } from '../../utils/formatDate'
import { formatDistanceToNow } from '../../utils/formatDistanceToNow'
import { isOverdue } from '../../utils/isOverdue'
import { OverdueBadge } from '../OverdueBadge'
import { PriorityBadge } from '../PriorityBadge'
import {
  BadgesContainer,
  CardContainer,
  CardInfoContainer,
  CardInfoRow,
  Title,
} from './styles'

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  data: ITask
}

function CardComponent({ data, ...props }: ICardProps) {
  if (!data) {
    return null
  }

  return (
    <CardContainer {...props}>
      <BadgesContainer>
        <PriorityBadge priority={data.priority} />
        {isOverdue(data.date) && <OverdueBadge />}
      </BadgesContainer>
      <Title>{data.title}</Title>
      <CardInfoContainer>
        <CardInfoRow>
          <CalendarBlank />
          <span>{`${formatDate(data.date)} (${formatDistanceToNow(
            data.date,
          )})`}</span>
        </CardInfoRow>
        <CardInfoRow>
          <MapPin />
          <span>{data.local}</span>
        </CardInfoRow>
        {data.attachment.length !== 0 && (
          <CardInfoRow>
            <Paperclip />
            <span>{data.attachment.length}</span>
          </CardInfoRow>
        )}
      </CardInfoContainer>
    </CardContainer>
  )
}

export const Card = memo(CardComponent)
