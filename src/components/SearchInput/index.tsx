import { MagnifyingGlass } from '@phosphor-icons/react'
import { InputHTMLAttributes } from 'react'
import { InputContainer, SearchInputContainer } from './styles'

export function SearchInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <SearchInputContainer>
      <InputContainer {...props} />
      <MagnifyingGlass />
    </SearchInputContainer>
  )
}
