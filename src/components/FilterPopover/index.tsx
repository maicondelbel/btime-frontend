import { Sliders, X } from '@phosphor-icons/react'
import * as Popover from '@radix-ui/react-popover'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { useTasks } from '../../hooks/useTasks'
import { PriorityBadge } from '../PriorityBadge'
import {
  ClearFilterButton,
  CloseButton,
  FilterButtonContainer,
  PopoverArrow,
  PopoverContentWrapper,
  PopoverHeader,
  PopoverInfoContainer,
  PopoverInfoRow,
  ToggleGroupItem,
} from './styles'

export function FilterPopover() {
  const {
    isLoading,
    priorityListItems,
    localListItems,
    filterIsActive,
    ownerListItems,
    filterByPriority,
    handleFilterByPriority,
    filterByLocal,
    handleFilterByLocal,
    filterByOwner,
    handleFilterByOwner,
    handleClearFilters,
  } = useTasks()

  return (
    <Popover.Root>
      <FilterButtonContainer isActive={filterIsActive} disabled={isLoading}>
        <Sliders />
      </FilterButtonContainer>
      <Popover.Portal>
        <Popover.Content align="end" sideOffset={10} asChild>
          <PopoverContentWrapper>
            <CloseButton>
              <X weight="bold" />
            </CloseButton>
            <PopoverHeader>
              <h3>Filtrar tarefas</h3>
            </PopoverHeader>
            <PopoverInfoContainer>
              <PopoverInfoRow>
                <h4>Por prioridade</h4>
                <ToggleGroup.Root
                  type="multiple"
                  value={filterByPriority}
                  onValueChange={(value) => handleFilterByPriority(value)}
                >
                  {priorityListItems.map((item) => {
                    return (
                      <ToggleGroupItem key={item} value={item}>
                        <PriorityBadge priority={item} />
                      </ToggleGroupItem>
                    )
                  })}
                </ToggleGroup.Root>
              </PopoverInfoRow>
              <PopoverInfoRow>
                <h4>Por local</h4>
                <ToggleGroup.Root
                  type="multiple"
                  value={filterByLocal}
                  onValueChange={(value) => handleFilterByLocal(value)}
                >
                  {localListItems.map((item) => {
                    return (
                      <ToggleGroupItem key={item} value={item}>
                        <p>{item}</p>
                      </ToggleGroupItem>
                    )
                  })}
                </ToggleGroup.Root>
              </PopoverInfoRow>
              <PopoverInfoRow>
                <h4>Por criador</h4>
                <ToggleGroup.Root
                  type="multiple"
                  value={filterByOwner}
                  onValueChange={(value) => handleFilterByOwner(value)}
                >
                  {ownerListItems.map((item) => {
                    return (
                      <ToggleGroupItem key={item} value={item}>
                        <p>{item}</p>
                      </ToggleGroupItem>
                    )
                  })}
                </ToggleGroup.Root>
              </PopoverInfoRow>
              <ClearFilterButton
                isActive={filterIsActive}
                onClick={handleClearFilters}
                disabled={!filterIsActive}
              >
                Limpar Filtro
              </ClearFilterButton>
            </PopoverInfoContainer>
            <PopoverArrow />
          </PopoverContentWrapper>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
