import { styled } from 'styled-components'

const COLOR_VARIANT = {
  primary: '--primary-base',
  secondary: '--secondary-base',
  tertiary: '--tertiary-base',
  quaternary: '--quaternary-base',
} as const

interface IListHeaderProps {
  variant: keyof typeof COLOR_VARIANT
}

export const ListHeader = styled.header<IListHeaderProps>`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme['--gray-400']};
  background-color: ${(props) => props.theme['--white']};
  padding: 1rem;
  box-shadow: inset 0 3px 0
    ${(props) => props.theme[COLOR_VARIANT[props.variant]]};
  overflow: hidden;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`

export const ListHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h2 {
    font-size: 1.2rem;
  }

  span {
    font-size: 0.875rem;
  }
`

export const ListHeaderActions = styled.div`
  display: flex;
  align-items: center;
`

export const ActionButton = styled.button<IListHeaderProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme[COLOR_VARIANT[props.variant]]};
  border-radius: 9999px;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
  }

  svg {
    fill: ${(props) => props.theme['--white']};
  }
`
