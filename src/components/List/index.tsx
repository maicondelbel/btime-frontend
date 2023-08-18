import { Plus } from '@phosphor-icons/react'
import { memo } from 'react'
import {
  ActionButton,
  ListHeader,
  ListHeaderActions,
  ListHeaderTitle,
} from './styles'

interface IListProps {
  title: string
  length: number
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
}

function ListComponent({ title, variant, length }: IListProps) {
  return (
    <>
      <ListHeader variant={variant}>
        <ListHeaderTitle>
          <h2>{title}</h2>
          <span>{`(${length})`}</span>
        </ListHeaderTitle>
        <ListHeaderActions>
          <ActionButton variant={variant}>
            <Plus weight="bold" />
          </ActionButton>
        </ListHeaderActions>
      </ListHeader>
    </>
  )
}

export const List = memo(ListComponent)
