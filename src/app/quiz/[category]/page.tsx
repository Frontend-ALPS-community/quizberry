import { Question } from '@/components/question/question'

const QuizList: React.FC = () => {
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
    <>
      <div>각 카테고리별 뿌려지는 문제리스트들</div>
      <div>컴포넌트들</div>
      <div className="mt-8">
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </>
  )
}

export default QuizList
