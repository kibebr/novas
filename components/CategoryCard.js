import Image from 'next/image'

const CategoryCard = ({ title, classes }) => {
  return (
    <div className={`w-36 h-24 p-5 flex flex-col items-center gap-2 rounded-md ${classes}`}>
      <div className='min-w-max'>
      <Image src='/icons/cpu.svg' width={16} height={16} />
      </div>
      <span className='font-bold'>{title}</span>
    </div>
  )
}

export default CategoryCard
