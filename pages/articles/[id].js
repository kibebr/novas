import Navbar from '../../components/Navbar.js'
import articles from '../../fetchers/articles.preval'

const Article = ({ article }) => {
  return (
    <div className='bg-white h-screen'>
      <Navbar />
      <section className='md:px-46 px-10 py-10'>
        <div className='max-w-screen-2xl m-0auto outline-black'>
          <div className='text-center tracking-wider leading-5'>
            <p className='font-bold text-sm text-gray-500 mb-5'>
              FEATURE&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;February 16, 2021
            </p>
            <h1 className='font-bold text-3xl md:text-5xl'>{article.title}</h1>
          </div>
          <p className='w-6/12 leading-6 tracking-tight'>
            “Coding is a mesh between the logical and the creative, because the act of writing code can also be like writing poetry or something else,” Thomas says. “You’re also actually building something when you code, so it’s a really creative process.”
            Thomas, who is both an iOS developer for the meditation app Calm and an independent app developer in the App Store, launched We Read Too in 2014 to bridge a gap in literature she noticed as a teenager.
            “I was going to the library and bookstores and book fairs in school, and I would see a very specific set of books,” Thomas says. “By the time I got to high school, I started to get really frustrated wondering why there weren’t any books that I was being exposed to that had Black characters, or were by Black authors. I started doing my own research and realised that those books existed — they just weren’t on bestseller lists, or displayed in the library or at the bookstore.”
          </p>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps ({ params }) {
  return {
    props: {
      article: articles.articles.find(({ id }) => id === params.id)
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
