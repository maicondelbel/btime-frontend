import { memo } from 'react'
import { useTasks } from '../../hooks/useTasks'
import { FilterPopover } from '../FilterPopover'
import { SearchInput } from '../SearchInput'
import {
  SearchAndFilterBarContainer,
  SearchAndFilterBarContainerWrapper,
} from './styles'

function SearchAndFilterBarComponent() {
  const { handleSearchByTerm } = useTasks()

  return (
    <SearchAndFilterBarContainer>
      <SearchAndFilterBarContainerWrapper>
        <SearchInput
          placeholder="Pesquisar por..."
          onChange={(e) => handleSearchByTerm(e.target.value)}
        />
        <FilterPopover />
      </SearchAndFilterBarContainerWrapper>
    </SearchAndFilterBarContainer>
  )
}

export const SearchAndFilterBar = memo(SearchAndFilterBarComponent)
