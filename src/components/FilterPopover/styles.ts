import * as Popover from '@radix-ui/react-popover'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { css, styled } from 'styled-components'

interface IFilterButtonContainer {
  isActive: boolean
}

export const FilterButtonContainer = styled(
  Popover.Trigger,
)<IFilterButtonContainer>`
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => props.theme['--gray-200']};
  border-radius: 9999px;
  border: 1px solid ${(props) => props.theme['--gray-400']};
  line-height: 0;

  &:focus,
  &[data-state='open'] {
    border: 1px solid ${(props) => props.theme['--primary-base']};
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: ${props.theme['--primary-base']};
      svg {
        fill: ${props.theme['--white']};
        stroke: ${props.theme['--white']};
      }
    `}
`

export const PopoverContentWrapper = styled.div`
  width: 260px;
  box-shadow:
    hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  background-color: ${(props) => props.theme['--white']};
  padding: 1.5rem;
  border-radius: 8px;
`

export const CloseButton = styled(Popover.Close)`
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  line-height: 0;
`

export const PopoverArrow = styled(Popover.Arrow)`
  fill: ${(props) => props.theme['--white']};
  width: 2rem;
  height: 0.5rem;
`

export const PopoverHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme['--gray-200']};
`

export const PopoverInfoContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 1.5rem;
  }
`

export const PopoverInfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    margin-bottom: 0.5rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const ToggleGroupItem = styled(ToggleGroup.Item)`
  cursor: pointer;
  width: fit-content;
  line-height: 100%;
  font-size: 0.875rem;
  color: ${(props) => props.theme['--gray-base']};

  &:hover {
    > p {
      filter: brightness(1.2);
    }
  }

  &[data-state='off'] {
    > span {
      background-color: ${(props) => props.theme['--gray-700']};
    }
  }
  &[data-state='on'] {
    > p {
      font-weight: 700;
      color: ${(props) => props.theme['--primary-base']};
    }
  }
`

interface IClearFilterButtonProps {
  isActive: boolean
}

export const ClearFilterButton = styled.button<IClearFilterButtonProps>`
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: ${(props) =>
    props.isActive ? props.theme['--primary-base'] : props.theme['--white']};
  color: ${(props) =>
    props.isActive ? props.theme['--white'] : props.theme['--primary-base']};
  border: 2px solid
    ${(props) =>
      props.isActive ? `transparent` : props.theme['--primary-base']};
  font-size: 0.875rem;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    filter: brightness(1.2);
  }

  &:disabled {
    cursor: default;
  }
`
