import { Plus } from '@phosphor-icons/react'
import { Card } from '../../components/Card'
import { List } from '../../components/List'
import {
  AddMoreButton,
  CardListContainer,
  ListContainer,
  MainContainer,
  MainContainerWrapper,
} from './styles'

import { EmptyList } from '../../components/EmptyList'
import { Loading } from '../../components/Loading'
import { Modal } from '../../components/Modal'
import { SearchAndFilterBar } from '../../components/SearchAndFilterBar'
import { ITask } from '../../contexts/TasksContext'
import { useModal } from '../../hooks/useModal'
import { useTasks } from '../../hooks/useTasks'

export function Home() {
  const { handleOpenModal } = useModal()
  const { taskList, handleSelectTask, isLoading } = useTasks()

  function handleOpenModalAndSetTask(task: ITask) {
    handleOpenModal()
    handleSelectTask(task)
  }

  return (
    <>
      <SearchAndFilterBar />

      <MainContainer>
        <MainContainerWrapper>
          <ListContainer>
            <List title="A fazer" length={taskList.length} variant="primary" />
            <CardListContainer>
              {isLoading ? (
                <Loading />
              ) : taskList.length === 0 ? (
                <EmptyList />
              ) : (
                taskList.map((item) => {
                  return (
                    <Card
                      key={item.id}
                      data={item}
                      onClick={() => handleOpenModalAndSetTask(item)}
                    />
                  )
                })
              )}
            </CardListContainer>
          </ListContainer>
          <ListContainer>
            <List title="Em Progresso" length={0} variant="tertiary" />
            <CardListContainer>
              <EmptyList />
            </CardListContainer>
          </ListContainer>
          <ListContainer>
            <List title="Realizadas" length={0} variant="secondary" />
            <CardListContainer>
              <EmptyList />
            </CardListContainer>
          </ListContainer>
          <ListContainer>
            <AddMoreButton>
              <Plus size={20} />
            </AddMoreButton>
          </ListContainer>
        </MainContainerWrapper>
      </MainContainer>
      <Modal />
    </>
  )
}
