import { styled } from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    fill: ${(props) => props.theme['--primary-base']};
  }
`
