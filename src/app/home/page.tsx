'use client'
import DropDown from '@/app/home/_components/dropDown'
import QuizCard from '@/app/home/_components/quizCard'
import { useState } from 'react'
type category = '전체' | 'javascript' | 'typescript' | 'nextJS' | 'CS'
const page = () => {
  const [selectedCategory, setSelectedCategory] = useState<category | undefined>('전체')

  const handleCategorySelect = (category: category) => {
    setSelectedCategory(category)
  }

  return (
    <div className="w-[480px] min-w-[400px] bg-primaryColor px-md mx-auto border border-black">
      <div className="h-[307px] relative bg-slate-200  text-center pt-36">
        <div className="absolute top-0 left-0 w-[115px] h-[45px] pt-2 bg-pink-400">LOGO</div>배너 이미지
      </div>
      <DropDown handleCategorySelect={handleCategorySelect} />
      {selectedCategory === 'javascript' || selectedCategory === '전체' ? (
        <QuizCard category="javascript" quizNum={10} quizType="OX 퀴즈" />
      ) : null}
      {selectedCategory === 'typescript' || selectedCategory === '전체' ? (
        <QuizCard category="typescript" quizNum={11} quizType="OX 퀴즈" />
      ) : null}
      {selectedCategory === 'nextJS' || selectedCategory === '전체' ? (
        <QuizCard category="nextJS" quizNum={20} quizType="OX 퀴즈" />
      ) : null}
      {selectedCategory === 'CS' || selectedCategory === '전체' ? (
        <QuizCard category="CS" quizNum={8} quizType="주관식" />
      ) : null}
    </div>
  )
}

export default page
