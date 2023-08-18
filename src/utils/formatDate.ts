import { format } from 'date-fns'

export function formatDate(date?: string) {
  if (date) {
    const convertedDate = new Date(date)
    return format(convertedDate, 'dd/MM/yyyy')
  }
}
