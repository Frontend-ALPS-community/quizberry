import DefaultHeader from '@/components/header/defaultHeader'
import { Question } from '@/components/question/question'
import Link from 'next/link'

export default function HomePage() {
  //임시
  const questions = [
    {
      id: 1,
      category_id: 'JavaScript',
      number: 1,
      question: '자바스크립트에 대해 설명하세요',
      options: ['A programming language', 'A markup language', 'A styling language', 'None of the above'],
      answer: 0,
    },
    {
      id: 2,
      category_id: 'JavaScript',
      number: 2,
      question: "'DOM'과 '가상DOM'에 대해 설명하세요",
      options: ['Document Object Model', 'Digital Object Model', 'Direct Object Manipulation', 'Data Object Manager'],
      answer: 0,
    },
    {
      id: 3,
      category_id: 'TypeScript',
      number: 10,
      question: '타입스크립트에 대해 설명하세요',
      options: ['Static typing', 'Dynamic typing', 'Functional programming', 'Object-oriented programming'],
      answer: 0,
    },
  ]

  return (
    <div className="w-full flex h-full align-center text-center flex-col m-auto">
      <DefaultHeader />
      <div className="w-full h-[300px] bg-gray-100"></div>
      <div className="mt-8">
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
      <Link href={'/quiz'}>
        <button className="bg-gray-100 border">quiz로 가기</button>
      </Link>
    </div>
  )
}
