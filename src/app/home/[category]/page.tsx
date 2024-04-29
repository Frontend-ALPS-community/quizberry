'use client'
import Header from '@/app/home/_components/header'
import { useParams } from 'next/navigation'
import QuizPreview from './quizPreview'

const page = () => {
  const params = useParams()
  const quizs = Array.from({ length: 10 }, (index: number) => index + 1)
  return (
    <div className="w-[480px] min-w-[400px] mx-auto border-x border-black">
      <Header title={String(params.category)} />
      <div className="divide-y divide-primaryGray-300">
        {quizs.map((post) => (
          <QuizPreview key={post} />
        ))}
      </div>
    </div>
  )
}

export default page
