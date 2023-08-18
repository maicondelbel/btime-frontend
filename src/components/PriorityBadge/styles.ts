import { styled } from 'styled-components'

export const LabelContainer = styled.span`
  width: fit-content;
  padding: 0.25rem 0.5rem;
  border-radius: 99999px;
  font-size: 0.625rem;
  font-weight: 700;
  color: ${(props) => props.theme['--white']};
  text-transform: uppercase;

  &.low {
    background-color: ${(props) => props.theme['--low-priority']};
  }

  &.high {
    background-color: ${(props) => props.theme['--high-priority']};
  }

  &.critical {
    background-color: ${(props) => props.theme['--critical-priority']};
  }
`
