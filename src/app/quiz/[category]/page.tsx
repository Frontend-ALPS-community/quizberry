import QuizPreview from '../../quiz/_components/quizPreview'

const QuizList = () => {
  const quizs = Array.from({ length: 10 }, (index: number) => index + 1)

  return (
    <div className="w-[480px] min-w-[400px] mx-auto border-x border-black">
      <div className="divide-y divide-primaryGray-300">
        {quizs.map((post) => (
          <QuizPreview key={post} />
        ))}
      </div>
    </div>
  )
}

export default QuizList
