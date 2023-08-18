import { memo } from 'react'
import { LabelContainer } from './styles'

interface IPriorityBadgeProps {
  priority: 'low' | 'high' | 'critical'
}

const PRIORITY_TITLE = {
  low: 'prioridade baixa',
  high: 'prioridade alta',
  critical: 'crítica',
}

function PriorityBadgeComponent({ priority }: IPriorityBadgeProps) {
  return (
    <LabelContainer className={priority}>
      {PRIORITY_TITLE[priority]}
    </LabelContainer>
  )
}

export const PriorityBadge = memo(PriorityBadgeComponent)
