import { Article } from '../../pages/index'
import shortid from 'shortid'

const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const deleteSourceFromTitle = (title: string): string => {
  for (let i = title.length - 1; i > 0; --i) {
    if (title[i] === '-') {
      return title.slice(0, i - 1)
    }
  }

  return title
}

export const toDateText = (date: string): string => {
  const year = date.slice(0, 4)
  const month = Number(date.slice(6, 7))
  const day = date.slice(8, 10)
  return `${months[month - 1]} ${day}, ${year}`
}
