import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['--gray-200']};
  border: 1px solid ${(props) => props.theme['--gray-400']};
  color: ${(props) => props.theme['base-text']};

  &:active {
    border: 1px solid ${(props) => props.theme['--primary-base']};
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme['--primary-base']};
  }
`

export const InputContainer = styled.input`
  font-size: 0.875rem;
  &::placeholder {
    color: ${(props) => props.theme['--base-text']};
  }
`
