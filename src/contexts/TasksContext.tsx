/* eslint-disable react-hooks/exhaustive-deps */
import { AxiosError } from 'axios'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useModal } from '../hooks/useModal'
import { api } from '../lib/axios'

export interface IAttachment {
  id: number
  file_type: 'pdf' | 'jpg' | 'txt' | 'doc' | 'xls' | 'png'
  file_name: string
  file_url: string
}

export interface ITask {
  id: number
  title: string
  description: string
  date: string
  local: string
  priority: 'low' | 'high' | 'critical'
  created_at: string
  created_by: string
  attachment: IAttachment[]
}

interface ITasksContextProps {
  selectedTask: ITask | undefined
  taskList: ITask[]
  isLoading: boolean
  priorityListItems: ('high' | 'low' | 'critical')[]
  localListItems: string[]
  ownerListItems: string[]
  filterIsActive: boolean
  filterByPriority: string[] | undefined
  filterByLocal: string[] | undefined
  filterByOwner: string[] | undefined
  handleFilterByPriority: (value: string[] | undefined) => void
  handleFilterByLocal: (value: string[] | undefined) => void
  handleFilterByOwner: (value: string[] | undefined) => void
  handleSelectTask: (task?: ITask) => void
  handleSearchByTerm: (value: string) => void
  handleClearFilters: () => void
}

interface ITasksContextProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({} as ITasksContextProps)

export function TasksProvider({ children }: ITasksContextProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [initialTasks, setInitialTasks] = useState<ITask[]>([])
  const [taskList, setTaskList] = useState<ITask[]>([])

  const [selectedTask, setSelectedTask] = useState<ITask>({} as ITask)

  const [filtredTaskListByTerm, setFiltredTaskListByTerm] = useState<ITask[]>(
    [],
  )
  const [filtredTaskListByFilters, setFiltredTaskListByFilters] = useState<
    ITask[]
  >([])

  const [filterByPriority, setFilterByPriority] = useState<string[]>()
  const [filterByLocal, setFilterByLocal] = useState<string[]>()
  const [filterByOwner, setFilterByOwner] = useState<string[]>()

  const { openModal } = useModal()

  async function fetchTasks() {
    try {
      setIsLoading(true)
      const { data } = await api.get('/tasks')

      setTaskList(data)
      setInitialTasks(data)
    } catch (error) {
      const err = error as AxiosError
      console.log(err.response?.data)
    } finally {
      setIsLoading(false)
    }
  }

  const priorityListItems = initialTasks
    .map((task) => task.priority)
    .filter((task, index, array) => array.indexOf(task) === index)

  const localListItems = initialTasks
    .map((task) => task.local)
    .filter((task, index, array) => array.indexOf(task) === index)

  const ownerListItems = initialTasks
    .map((task) => task.created_by)
    .filter((task, index, array) => array.indexOf(task) === index)

  function handleSelectTask(task?: ITask) {
    if (task) {
      setSelectedTask(task)
    } else {
      setSelectedTask({} as ITask)
    }
  }

  function handleSearchByTerm(value: string) {
    if (value) {
      if (
        filterByPriority?.length ||
        filterByLocal?.length ||
        filterByOwner?.length
      ) {
        const resultFiltredTasks = filtredTaskListByFilters.filter((task) => {
          return Object.values(task)
            .join(' ')
            .toLowerCase()
            .includes(value.toLowerCase())
        })
        setTaskList(resultFiltredTasks)
        setFiltredTaskListByTerm(resultFiltredTasks)
      } else {
        const resultFiltredTasks = initialTasks.filter((task) => {
          return Object.values(task)
            .join('')
            .toLowerCase()
            .includes(value.toLowerCase())
        })
        setTaskList(resultFiltredTasks)
        setFiltredTaskListByTerm(resultFiltredTasks)
        setFiltredTaskListByFilters(resultFiltredTasks)
      }
    } else {
      if (
        filterByPriority?.length ||
        filterByLocal?.length ||
        filterByOwner?.length
      ) {
        setTaskList(filtredTaskListByTerm)
      } else {
        setTaskList(initialTasks)
      }
    }
  }

  function filterPriorityFromInitialValue(values: string[]) {
    const filtredValue = initialTasks.filter((task) => {
      return values.includes(task.priority)
    })
    setTaskList(filtredValue)
  }

  function filterLocalFromInitialValue(values: string[]) {
    const filtredValue = initialTasks.filter((task) => {
      return values.includes(task.local)
    })
    setTaskList(filtredValue)
  }

  function filterOwnerFromInitialValue(values: string[]) {
    const filtredValue = initialTasks.filter((task) => {
      return values.includes(task.created_by)
    })
    setTaskList(filtredValue)
  }

  const handleFilterByPriority = useCallback(
    (values: string[] | undefined) => {
      setFilterByPriority(values)

      if (values?.length) {
        if (filterByLocal?.length || filterByOwner?.length) {
          const filtredByPriority = filtredTaskListByFilters.filter((task) => {
            return values.includes(task.priority)
          })
          setTaskList(filtredByPriority)
          setFiltredTaskListByTerm(filtredByPriority)
        } else {
          const filtredByPriority = initialTasks.filter((task) => {
            return values.includes(task.priority)
          })
          setTaskList(filtredByPriority)
          setFiltredTaskListByTerm(filtredByPriority)
          setFiltredTaskListByFilters(filtredByPriority)
        }
      } else {
        if (filterByLocal?.length || filterByOwner?.length) {
          if (filterByLocal?.length) {
            filterLocalFromInitialValue(filterByLocal)
          }

          if (filterByOwner?.length) {
            filterOwnerFromInitialValue(filterByOwner)
          }
        } else {
          setTaskList(initialTasks)
        }
      }
    },
    [initialTasks, filterByLocal, filterByOwner, filterByPriority],
  )

  const handleFilterByLocal = useCallback(
    (values: string[] | undefined) => {
      setFilterByLocal(values)

      if (values?.length) {
        if (filterByPriority?.length || filterByOwner?.length) {
          const filtredByLocal = filtredTaskListByFilters.filter((task) => {
            return values.includes(task.local)
          })
          setTaskList(filtredByLocal)
          setFiltredTaskListByTerm(filtredByLocal)
        } else {
          const filtredByLocal = initialTasks.filter((task) => {
            return values.includes(task.local)
          })
          setTaskList(filtredByLocal)
          setFiltredTaskListByTerm(filtredByLocal)
          setFiltredTaskListByFilters(filtredByLocal)
        }
      } else {
        if (filterByPriority?.length || filterByOwner?.length) {
          if (filterByPriority?.length) {
            filterPriorityFromInitialValue(filterByPriority)
          }

          if (filterByOwner?.length) {
            filterOwnerFromInitialValue(filterByOwner)
          }
        } else {
          setTaskList(initialTasks)
        }
      }
    },
    [initialTasks, filterByLocal, filterByOwner, filterByPriority],
  )

  const handleFilterByOwner = useCallback(
    (values: string[] | undefined) => {
      setFilterByOwner(values)
      if (values?.length) {
        if (filterByPriority?.length || filterByLocal?.length) {
          const filtredByOwner = filtredTaskListByFilters.filter((task) => {
            return values.includes(task.created_by)
          })
          setTaskList(filtredByOwner)
          setFiltredTaskListByTerm(filtredByOwner)
        } else {
          const filtredByOwner = initialTasks.filter((task) => {
            return values.includes(task.created_by)
          })
          setTaskList(filtredByOwner)
          setFiltredTaskListByTerm(filtredByOwner)
          setFiltredTaskListByFilters(filtredByOwner)
        }
      } else {
        if (filterByPriority?.length || filterByLocal?.length) {
          if (filterByPriority?.length) {
            filterPriorityFromInitialValue(filterByPriority)
          }

          if (filterByLocal?.length) {
            filterLocalFromInitialValue(filterByLocal)
          }
        } else {
          setTaskList(initialTasks)
        }
      }
    },
    [initialTasks, filterByLocal, filterByOwner, filterByPriority],
  )

  function handleClearFilters() {
    handleFilterByPriority([])
    handleFilterByLocal([])
    handleFilterByOwner([])
    setTaskList(initialTasks)
  }

  const filterIsActive =
    !!filterByPriority?.length ||
    !!filterByLocal?.length ||
    !!filterByOwner?.length

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    if (!openModal) {
      handleSelectTask()
    }
  }, [openModal])

  return (
    <TasksContext.Provider
      value={{
        isLoading,
        filterIsActive,
        localListItems,
        priorityListItems,
        ownerListItems,
        taskList,
        selectedTask,
        handleSelectTask,
        filterByPriority,
        handleFilterByPriority,
        filterByLocal,
        handleFilterByLocal,
        filterByOwner,
        handleFilterByOwner,
        handleSearchByTerm,
        handleClearFilters,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
