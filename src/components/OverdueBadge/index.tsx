import { Alarm } from '@phosphor-icons/react'
import { OverdueContainer } from './styles'

export function OverdueBadge() {
  return (
    <OverdueContainer>
      <Alarm />
      <span>Atrasado</span>
    </OverdueContainer>
  )
}
