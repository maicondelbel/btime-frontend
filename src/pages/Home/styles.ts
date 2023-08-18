import styled from 'styled-components'

export const MainContainer = styled.main`
  height: calc(100vh - 7rem - 1px);
  padding: 1.5rem;
`

export const MainContainerWrapper = styled.div`
  display: flex;
  max-width: 90rem;
  margin: 0 auto;
  gap: 0.75rem;
  overflow-x: auto;
  height: 100%;
  padding: 0.5rem;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  min-width: 20rem;
  background-color: ${(props) => props.theme['--gray-200']};
  box-shadow: 4px 4px 10px -4px ${(props) => props.theme['--gray-700']};
  overflow: hidden;

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const AddMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['--white']};
  padding: 1rem;
  border-radius: 9999px;
  cursor: pointer;
`

export const CardListContainer = styled.div`
  padding: 0.5rem;
  flex: 1;
  overflow-y: auto;
`

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme['--white']};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;

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
