'use client'

import { useEffect, useState } from 'react'
import QuizPreview from '../../quiz/_components/quizPreview'
import { Icategory, IquizQuestion } from '@/types/types'

const QuizList = () => {
  // const res = await fetch('http://localhost:9999/questions')
  // const questions = await res.json()

  const [questions, setQuestions] = useState<IquizQuestion[]>([])
  const [categories, setCategories] = useState<Icategory[]>([])

  useEffect(() => {
    const fetchQuestionsAndCategories = async () => {
      try {
        const [questionsRes, categoriesRes] = await Promise.all([
          fetch('http://localhost:9999/questions'),
          fetch('http://localhost:9999/categories'),
        ])
        const questionsData: IquizQuestion[] = await questionsRes.json()
        const categoriesData: Icategory[] = await categoriesRes.json()

        const categoryMap = categoriesData.reduce(
          (map, category) => {
            map[category.id.toString()] = category.name
            return map
          },
          {} as Record<string, string>,
        )

        const transformedQuestions = questionsData.map((question) => ({
          ...question,
          category_id: categoryMap[question.category_id.toString()],
        }))

        setQuestions(transformedQuestions)
      } catch (error) {
        console.error('에러', error)
      }
    }

    fetchQuestionsAndCategories()
  }, [])

  return (
    <div className="w-[480px] min-w-[400px] mx-auto border-x border-black">
      <div className="divide-y divide-primaryGray-300">
        {questions.map((quiz: IquizQuestion) => (
          <QuizPreview key={quiz.id} question={quiz} />
        ))}
      </div>
    </div>
  )
}

export default QuizList
