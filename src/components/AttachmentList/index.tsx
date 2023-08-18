import {
  FileDoc,
  FileJpg,
  FilePdf,
  FilePng,
  FileText,
  FileXls,
} from '@phosphor-icons/react'
import { IAttachment } from '../../contexts/TasksContext'
import {
  AttachmentFileName,
  AttachmentListContainer,
  AttachmentListItem,
} from './styles'

interface IAttachmentListProps {
  data: IAttachment[]
}

const FILE_TYPE_ICON = {
  pdf: <FilePdf />,
  jpg: <FileJpg />,
  txt: <FileText />,
  doc: <FileDoc />,
  xls: <FileXls />,
  png: <FilePng />,
} as const

export function AttachmentList({ data }: IAttachmentListProps) {
  return (
    <AttachmentListContainer>
      {data.map((item) => {
        return (
          <AttachmentListItem key={item.id}>
            <AttachmentFileName href={item.file_url}>
              {FILE_TYPE_ICON[item.file_type]}
              <span>{item.file_name}</span>
            </AttachmentFileName>
          </AttachmentListItem>
        )
      })}
    </AttachmentListContainer>
  )
}
