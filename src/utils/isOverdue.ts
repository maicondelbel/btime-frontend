import { isPast } from 'date-fns'

export function isOverdue(date?: string) {
  if (date) {
    const convertedDate = new Date(date)
    return isPast(convertedDate)
  }
}
