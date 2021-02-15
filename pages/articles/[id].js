import Navbar from '../../components/Navbar.js'
import articles from '../../fetchers/articles.preval'

const Article = ({ article }) => {
  return (
    <div>
      <Navbar />
      {article.title}
    </div>
  )
}

export async function getStaticProps ({ params }) {
  return {
    props: {
      article: articles.find(({ id }) => id === params.id)
    }
  }
}

export async function getStaticPaths () {
  return {
    paths: [
      { params: { id: '10' } },
      { params: { id: '11' } }
    ],
    fallback: false
  }
}

export default Article
