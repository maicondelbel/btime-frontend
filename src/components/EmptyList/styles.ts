import { styled } from 'styled-components'

export const EmptyListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['--gray-700']};
  }
`
