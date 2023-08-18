import { styled } from 'styled-components'

export const AttachmentListContainer = styled.ul`
  list-style: none;
`

export const AttachmentListItem = styled.li`
  margin: 0.5rem;
  font-size: 0.875rem;
`

export const AttachmentFileName = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.375rem;

  color: ${(props) => props.theme['--base-text']};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme['--primary-base']};
  }
`
