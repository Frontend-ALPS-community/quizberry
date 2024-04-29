import DefaultHeader from '@/components/header/defaultHeader'
import Link from 'next/link'

export default function HomePage() {
  //임시
  const category = [
    {
      id: 1,
      category_id: 'Next.JS',
    },
    {
      id: 2,
      category_id: 'React',
    },
    {
      id: 3,
      category_id: 'JavaScript',
    },
    {
      id: 4,
      category_id: 'TypeScript',
    },
    {
      id: 5,
      category_id: 'Library',
    },
    {
      id: 6,
      category_id: 'CS',
    },
    {
      id: 7,
      category_id: 'ETC',
    },
  ]

  return (
    <div className="w-full flex h-full text-center flex-col">
      <DefaultHeader />
      <div className="w-full h-[300px] bg-gray-100"></div>
      <div className="mt-8">
        {category.map((oneCategory) => (
          <Link href={`/quiz/${oneCategory.category_id}`}>
            <div className="flex flex-col justify-center bg-gray-200 w-full h-10 border mb-4">
              {oneCategory.category_id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
