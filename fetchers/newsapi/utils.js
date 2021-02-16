import shortid from 'shortid'

const months = [
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

export const deleteSourceFromTitle = title => {
  for (let i = title.length - 1; i > 0; --i) {
    if (title[i] === '-') {
      return title.slice(0, i - 1)
    }
  }

  return title
}

export const toDateText = (date) => {
  const year = date.slice(0, 4)
  const month = Number(date.slice(6, 7))
  const day = date.slice(8, 10)
  return `${months[month - 1]} ${day}, ${year}`
}

export const toArticle = (res) => ({
  id: shortid.generate(),
  title: res.title,
  date: toDateText(res.publishedAt),
  imgUrl: res.urlToImage,
  category: 'NULL'
})
