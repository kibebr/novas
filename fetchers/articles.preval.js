import preval from 'next-plugin-preval'

const getArticles = async () => {
  return [
    {
      id: '10',
      title: 'test'
    },
    {
      id: '11',
      title: 'OASDKOAOAKKOAD'
    }
  ]
}

export default preval(getArticles())
