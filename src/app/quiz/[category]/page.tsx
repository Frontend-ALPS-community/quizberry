import QuizPreview from '../../quiz/_components/quizPreview'

const QuizList = () => {
  const questions = [
    {
      id: 1,
      category_id: 'JavaScript',
      number: 1,
      question: '자바스크립트에 대해 설명하세요',
      answer: 0,
    },
    {
      id: 2,
      category_id: 'JavaScript',
      number: 2,
      question: "'DOM'과 '가상DOM'에 대해 설명하세요",
      answer: 0,
    },
    {
      id: 3,
      category_id: 'TypeScript',
      number: 10,
      question: '타입스크립트에 대해 설명하세요',
      answer: 0,
    },
  ]

  return (
    <div className="w-[480px] min-w-[400px] mx-auto border-x border-black">
      <div className="divide-y divide-primaryGray-300">
        {questions.map((quiz) => (
          <QuizPreview key={quiz.id} question={quiz} />
        ))}
      </div>
    </div>
  )
}

export default QuizList
