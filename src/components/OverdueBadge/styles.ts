import { styled } from 'styled-components'

export const OverdueContainer = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.625rem;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['--yellow-200']};
  color: ${(props) => props.theme['--yellow-base']};
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
`
