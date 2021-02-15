import preval from 'next-plugin-preval'

const getArticles = async () => {
  const articles = [
    {
      id: '10',
      title: 'We Read Too app developer Kaya Thomas explores trends in Black literature',
      category: 'NADA',
      date: 'February 12, 2021'
    },
    {
      id: '11',
      title: 'COVID-19 is now better',
      category: 'COVID-19',
      date: 'March 14, 2003'
    },
    {
      id: '12',
      title: 'Testing this',
      category: 'TEST',
      date: 'March 15, 2005'
    }
  ]

  return {
    headline: articles[0],
    articles: articles.slice(1, -1)
  }
}

export default preval(getArticles())
