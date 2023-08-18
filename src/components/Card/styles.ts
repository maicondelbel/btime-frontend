import { styled } from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['--white']};
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  position: relative;

  &:hover {
    transition: box-shadow 0.125s cubic-bezier(0.2, 0, 0.38, 0.9);
    box-shadow:
      0 4px 6px 0 rgba(102, 102, 102, 0.09),
      0 9px 14px 0 rgba(102, 102, 102, 0.06);
  }

  & + div {
    margin-top: 0.5rem;
  }
`

export const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.375rem;
`

export const Title = styled.h3`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  color: ${(props) => props.theme['--gray-base']};
`

export const CardInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  span {
    font-size: 0.75rem;
  }
`
