import Link from 'next/link'
import React, { useState, useEffect } from 'react'

interface Question {
  id: number
  category_id: number
  number: number
  question: string
}

interface Category {
  id: number
  name: string
}

const QuizList: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [questions, setQuestions] = useState<Question[]>([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/quizData.json')
  //       const data = await response.json()
  //       setCategories(data.categories)
  //       setQuestions(data.questions)
  //     } catch (error) {
  //       console.error('Error', error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  return (
    <div>
      <div>퀴즈카테고리</div>
      <div>
        {categories.map((category) => (
          <li key={category.id}>
            <a href={`/category/${category.id}`}>{category.name}</a>
          </li>
        ))}
      </div>

      <div>문제</div>
      <div>
        {questions.map((question) => (
          <div key={question.id}>
            <Link href={`/question/${question.id}`}>Question {question.number}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuizList
