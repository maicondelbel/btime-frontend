import { formatDistanceToNow as distanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDistanceToNow(date?: string) {
  if (date) {
    const convertedDate = new Date(date)
    return distanceToNow(convertedDate, {
      addSuffix: true,
      locale: ptBR,
    })
  }
}
