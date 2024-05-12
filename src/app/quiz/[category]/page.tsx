'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import QuizPreview from '../../quiz/_components/quizPreview'

const QuizList = () => {
  const params = useParams() //useParams()사용하려고 client사용 해결방법 모르겠음.
  const [quizzes, setQuizzes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch(`http://localhost:9999/${params.category}`, {
        cache: 'no-store',
      })
      const data = await resp.json()
      setQuizzes(data)
    }

    fetchData()
  }, [params.category])

  return (
    <div className="w-[480px] min-w-[400px] mx-auto border-x border-black">
      <div className="divide-y divide-primaryGray-300">
        {quizzes.map((quiz, index) => (
          <QuizPreview key={index} quiz={quiz} />
        ))}
      </div>
    </div>
  )
}

export default QuizList
